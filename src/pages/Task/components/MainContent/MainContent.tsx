import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FastAverageColor from 'fast-average-color';
import {
  AttachmentOutlined as AttachmentOutlinedIcon,
  ListRounded as ListRoundedIcon,
  Add as AddIcon,
} from '@material-ui/icons';

import { PopOver } from '../../../../components';
import { Comments } from './Comments';
import { AddDescription } from './AddDescription';
import { IComment, IUser, IAttachment } from '../../utils';
import { getAvatarFallbackName } from '../../../../utils';

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

const Attachment: React.FC<{ attachment: IAttachment }> = ({ attachment }) => {
  const { url, ext, name, createdAt } = attachment;
  const imgExtensions = ['.png', '.jpg'];

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const downloadBtnRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (['.png', '.jpg'].includes(ext)) {
      const fac = new FastAverageColor();
      fac
        .getColorAsync(`https://tamalo.herokuapp.com${url}`)
        .then((color) => {
          imageRef.current!.style.backgroundColor = color.rgba;
        })
        .catch(() => {});
    }
  }, [ext, url]);

  const deleteAttachmentHandler = () => {};

  return (
    <StyledAttachment onClick={() => downloadBtnRef.current?.click()}>
      <a
        href={`https://tamalo.herokuapp.com${url}`}
        ref={downloadBtnRef}
        download={name}
      >
        Download
      </a>
      <StyledAttachmentImg
        ref={imageRef}
        imgSrc={url}
        isImg={imgExtensions.includes(ext)}
      >
        {!imgExtensions.includes(ext) && ext.slice(1)}
      </StyledAttachmentImg>
      <div>
        <div>{name}</div>
        <div>Added {createdAt} - </div>
        <StyledDeleteLink
          onClick={(e) => setAnchorEl(e.currentTarget)}
          aria-hidden="true"
        >
          Delete
        </StyledDeleteLink>
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
      </div>
    </StyledAttachment>
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
