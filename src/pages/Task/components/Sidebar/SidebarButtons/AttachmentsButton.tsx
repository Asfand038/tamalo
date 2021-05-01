import React, { useState, useRef } from 'react';
import { useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { AttachmentOutlined as AttachmentOutlinedIcon } from '@material-ui/icons';

import { PopOver, Loader, ErrorAlert } from '../../../../../components';
import { errorMessages } from '../../../../../utils';
import { addAttachment } from '../../../api';
import { IBoard, ITaskDetails, IAttachment } from '../../../utils';
import {
  StyledListButton,
  StyledPopOverButton,
  StyledPopOverContent,
  StyledLoaderWrapper,
} from '../Sidebar.styles';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

const AttachmentsButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [error, setError] = useState('');

  const fileUploadRef = useRef<HTMLInputElement>(null);
  const { boardId, taskId } = useParams<IRouteParams>();

  const queryClient = useQueryClient();
  const taskData = queryClient.getQueryData<ITaskDetails>(['task', taskId])!;
  const { attachments } = taskData;
  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members } = boardData;
  const users = [...owners, ...members];

  const attachFileHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files![0]) {
      const attachmentFile = event.target.files![0];
      setIsUploadingFile(true);
      setError('');
      let attachmentIds: [] | string[] = [];
      if (attachments.length) {
        attachmentIds = attachments.map((att: IAttachment) => att.id);
      }
      try {
        const taskData = await addAttachment(
          attachmentFile,
          attachmentIds,
          taskId,
          users
        );
        queryClient.setQueryData<ITaskDetails>(['task', taskId], taskData);
      } catch (err) {
        setError(errorMessages.addAttachment);
      }
      setIsUploadingFile(false);
      setAnchorEl(null);
    }
  };

  return (
    <>
      {error && <ErrorAlert message={error} />}
      <StyledListButton
        variant="contained"
        startIcon={<AttachmentOutlinedIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Attachment
      </StyledListButton>
      <input
        type="file"
        ref={fileUploadRef}
        style={{ display: 'none' }}
        onChange={attachFileHandler}
      />
      <PopOver
        headingText="Attach from..."
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      >
        <StyledPopOverContent>
          <div>ATTACHMENTS</div>
          {isUploadingFile && (
            <StyledLoaderWrapper>
              <Loader color="#737581" />
            </StyledLoaderWrapper>
          )}
          <StyledPopOverButton
            variant="contained"
            fullWidth
            onClick={() => fileUploadRef.current?.click()}
          >
            Attach a file
          </StyledPopOverButton>
        </StyledPopOverContent>
      </PopOver>
    </>
  );
};

export default AttachmentsButton;
