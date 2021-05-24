import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { VideoLabel as VideoLabelIcon } from '@material-ui/icons';

import { PopOver, Loader, ErrorAlert } from '../../../../../components';
import { errorMessages } from '../../../../../utils';
import { addCover } from '../../../api';
import { IBoard, ITaskDetails, ITask } from '../../../utils';
import {
  StyledListButton,
  StyledPopOverContent,
  StyledPopOverButton,
  StyledLoaderWrapper,
} from '../Sidebar.styles';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

const CoverUploadButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isUploadingCover, setIsUploadingCover] = useState(false);
  const [error, setError] = useState('');

  const fileUploadRef = useRef<HTMLInputElement>(null);
  const { boardId, taskId } = useParams<IRouteParams>();

  const queryClient = useQueryClient();
  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members } = boardData;
  const users = [...owners, ...members];

  const uploadCoverHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files![0]) {
      setError('');
      setIsUploadingCover(true);
      const coverFile = event.target.files![0];
      try {
        const taskData = await addCover(coverFile, taskId, users);
        queryClient.setQueryData<ITaskDetails>(['task', taskId], taskData);
        const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
        const updatedTasks = boardData.tasks.map((task) => {
          if (task.id === taskId) {
            const updatedTask: ITask = { ...task, cover: taskData.cover };
            return updatedTask;
          }
          return task;
        });
        queryClient.setQueryData<IBoard>(['board', boardId], {
          ...boardData,
          tasks: updatedTasks,
        });
      } catch (err) {
        setError(errorMessages.addCover);
      }
      setIsUploadingCover(false);
      setAnchorEl(null);
    }
  };

  return (
    <>
      {error && <ErrorAlert message={error} />}
      <StyledListButton
        variant="contained"
        startIcon={<VideoLabelIcon className="small-icon" />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Cover
      </StyledListButton>
      <input
        type="file"
        accept="image/*"
        ref={fileUploadRef}
        style={{ display: 'none' }}
        onChange={uploadCoverHandler}
      />
      <PopOver
        headingText="Cover"
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      >
        <StyledPopOverContent>
          <div>ATTACHMENTS</div>
          {isUploadingCover && (
            <StyledLoaderWrapper>
              <Loader color="#737581" />
            </StyledLoaderWrapper>
          )}
          <StyledPopOverButton
            variant="contained"
            fullWidth
            onClick={() => fileUploadRef.current?.click()}
          >
            Upload a cover image
          </StyledPopOverButton>
        </StyledPopOverContent>
      </PopOver>
    </>
  );
};

export default CoverUploadButton;
