import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { VideoLabel as VideoLabelIcon } from '@material-ui/icons';

import { PopOver, Loader } from '../../../../../components';
import { addCover } from '../../../api';
import { IBoard, ITaskDetails } from '../../../utils';
import {
  StyledCoverButton,
  StyledCoverPopOverContent,
  StyledPopOverButton,
  StyledLoaderWrapper,
} from './CoverUploadButton.styles';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

const Cover: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isUploadingCover, setIsUploadingCover] = useState(false);

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
      setIsUploadingCover(true);
      const coverFile = event.target.files![0];
      const taskData = await addCover(coverFile, taskId, users);
      queryClient.setQueryData<ITaskDetails>(['task', taskId], taskData);
      setIsUploadingCover(false);
      setAnchorEl(null);
    }
  };
  return (
    <>
      <StyledCoverButton
        variant="contained"
        startIcon={<VideoLabelIcon className="small-icon" />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Cover
      </StyledCoverButton>
      <PopOver
        headingText="Cover"
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      >
        <StyledCoverPopOverContent>
          <input
            type="file"
            ref={fileUploadRef}
            style={{ display: 'none' }}
            onChange={uploadCoverHandler}
          />
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
        </StyledCoverPopOverContent>
      </PopOver>
    </>
  );
};

export default Cover;
