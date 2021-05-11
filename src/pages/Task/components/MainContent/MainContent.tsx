import React, { useEffect, useRef, useState } from 'react';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import FastAverageColor from 'fast-average-color';
import {
  AttachmentOutlined as AttachmentOutlinedIcon,
  ListRounded as ListRoundedIcon,
  Add as AddIcon,
} from '@material-ui/icons';

import { PopOver, ErrorAlert } from '../../../../components';
import { Comments } from './Comments';
import { AddDescription } from './AddDescription';
import { deleteAttachment } from '../../api';
import {
  IComment,
  IUser,
  IAttachment,
  IBoard,
  ITaskDetails,
} from '../../utils';
import {
  getAvatarFallbackName,
  errorMessages,
  baseUrl,
} from '../../../../utils';

import {
  StyledContainer,
  StyledTasksDetailsContainer,
  StyledTaskDetailItem,
  StyledAddMemberButton,
  StyledTitleContainer,
  StyledTitle,
  StyledButton,
  StyledIcon,
  StyledWrapper,
  StyledAttachment,
  StyledAttachmentImg,
  StyledDeleteLink,
} from './MainContent.styles';
import {
  StyledAvatar,
  StyledDeleteButton,
  StyledDeletePopOverContent,
} from '../../Task.styles';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

const Attachment: React.FC<{ attachment: IAttachment }> = ({ attachment }) => {
  const { url: attachmentUrl, ext, name, createdAt, id } = attachment;
  const imgExtensions = ['.png', '.jpg'];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isOverLink, setIsOverLink] = useState(false);
  const [error, setError] = useState('');

  const { boardId, taskId } = useParams<IRouteParams>();
  const downloadBtnRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const queryClient = useQueryClient();
  const taskData = queryClient.getQueryData<ITaskDetails>(['task', taskId])!;
  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members } = boardData;
  const users = [...owners, ...members];

  useEffect(() => {
    if (['.png', '.jpg'].includes(ext)) {
      const fac = new FastAverageColor();
      fac
        .getColorAsync(`${baseUrl}${attachmentUrl}`)
        .then((color) => {
          imageRef.current!.style.backgroundColor = color.rgba;
        })
        .catch(() => {});
    }
  }, [attachmentUrl, ext]);

  const deleteAttachmentHandler = async () => {
    setError('');
    const updatedAttachments = taskData.attachments.filter(
      (att) => att.id !== id
    );
    queryClient.setQueryData<ITaskDetails>(['task', taskId], {
      ...taskData,
      attachments: updatedAttachments,
    });
    try {
      const data = await deleteAttachment(id, users);
      queryClient.setQueryData<ITaskDetails>(['task', taskId], data);
    } catch (err) {
      queryClient.setQueryData<ITaskDetails>(['task', taskId], taskData);
      setError(errorMessages.deleteAttachment);
    }
  };

  return (
    <>
      {error && <ErrorAlert message={error} />}
      <StyledAttachment
        onClick={() => {
          if (!isOverLink) {
            downloadBtnRef.current?.click();
          }
        }}
      >
        <a
          href={`${baseUrl}${attachmentUrl}`}
          ref={downloadBtnRef}
          download={name}
        >
          Download
        </a>
        <StyledAttachmentImg
          ref={imageRef}
          imgSrc={attachmentUrl}
          isImg={imgExtensions.includes(ext)}
        >
          {!imgExtensions.includes(ext) && ext.slice(1)}
        </StyledAttachmentImg>
        <div>
          <div>{name}</div>
          <div>Added {createdAt} - </div>
          <StyledDeleteLink
            onClick={(e) => setAnchorEl(e.currentTarget)}
            onMouseEnter={() => setIsOverLink(true)}
            onMouseLeave={() => setIsOverLink(false)}
            aria-hidden="true"
          >
            Delete
          </StyledDeleteLink>
        </div>
      </StyledAttachment>
      <PopOver
        headingText="Delete attachment?"
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      >
        <StyledDeletePopOverContent>
          <p>Deleting an attachment is permanent. There is no undo.</p>
          <StyledDeleteButton
            variant="contained"
            fullWidth
            onClick={deleteAttachmentHandler}
          >
            Delete
          </StyledDeleteButton>
        </StyledDeletePopOverContent>
      </PopOver>
    </>
  );
};

interface IProps {
  comments: IComment[];
  dueDate: string | undefined;
  taskMembers: [] | IUser[];
  attachments: [] | IAttachment[];
}

const MainContent: React.FC<IProps> = ({
  comments,
  dueDate,
  taskMembers,
  attachments,
}) => {
  return (
    <StyledContainer>
      <StyledTasksDetailsContainer>
        {Boolean(taskMembers.length) && (
          <StyledTaskDetailItem>
            <div>MEMBERS</div>
            <div>
              {taskMembers.map((member: IUser) => (
                <StyledAvatar key={uuidv4()} src={member.profileImg}>
                  {getAvatarFallbackName(member.username)}
                </StyledAvatar>
              ))}
              <StyledAddMemberButton>
                <AddIcon />
              </StyledAddMemberButton>
            </div>
          </StyledTaskDetailItem>
        )}
        {dueDate && (
          <StyledTaskDetailItem>
            <div>DUE DATE</div>
            <StyledButton>{dueDate}</StyledButton>
          </StyledTaskDetailItem>
        )}
      </StyledTasksDetailsContainer>
      <AddDescription />
      {Boolean(attachments.length) && (
        <StyledWrapper>
          <StyledTitleContainer>
            <StyledIcon component={<AttachmentOutlinedIcon />} />
            <StyledTitle>Attachments</StyledTitle>
          </StyledTitleContainer>
          {attachments.map((att: IAttachment) => (
            <Attachment key={uuidv4()} attachment={att} />
          ))}
        </StyledWrapper>
      )}
      <StyledWrapper>
        <StyledTitleContainer>
          <StyledIcon component={<ListRoundedIcon />} />
          <StyledTitle>Activity</StyledTitle>
          <StyledButton>Show details</StyledButton>
        </StyledTitleContainer>
      </StyledWrapper>
      <Comments comments={comments} />
    </StyledContainer>
  );
};

export default MainContent;
