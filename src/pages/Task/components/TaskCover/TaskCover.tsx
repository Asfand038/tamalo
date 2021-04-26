import React, { useState, useRef } from 'react';
import { useQueryClient } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import {
  Close as CloseIcon,
  VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

import { Loader, PopOver } from '../../../../components';
import { CoverImageSizes, getRequiredSizeCoverImg } from '../../../../utils';
import { addCover, deleteCover } from '../../api';
import { IBoard, ITaskDetails, ITask } from '../../utils';
import {
  StyledCloseIcon,
  StyledCoverWrapper,
  StyledButton,
  StyledMenu,
} from './TaskCover.styles';
import {
  StyledDeleteButton,
  StyledDeletePopOverContent,
} from '../../Task.styles';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

interface IProps {
  coverId: string;
  imgSrc: string;
  coverBg: {
    color: string;
    isDark: boolean;
  };
}

const TaskCover: React.FC<IProps> = ({ coverId, imgSrc, coverBg }) => {
  const [menuAnchorEl, setMenuAnchorEl] = useState<HTMLElement | null>(null);
  const [delAnchorEl, setDelAnchorEl] = useState<HTMLElement | null>(null);
  const [isUpdatingCover, setIsUpdatingCover] = useState(false);
  const [imgUrl, setImgUrl] = useState(imgSrc);
  const [bgColor, setBgColor] = useState(coverBg);

  const history = useHistory();
  const fileUploadRef = useRef<HTMLInputElement>(null);
  const updateBtnRef = useRef<HTMLButtonElement>(null);
  const { boardId, taskId } = useParams<IRouteParams>();

  const queryClient = useQueryClient();
  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members } = boardData;
  const users = [...owners, ...members];

  const updateCoverHandler = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files![0]) {
      setIsUpdatingCover(true);
      setImgUrl('');
      setBgColor({ color: '#fff', isDark: false });

      const coverFile = event.target.files![0];
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

      setIsUpdatingCover(false);
      setImgUrl(
        getRequiredSizeCoverImg(taskData.cover!, CoverImageSizes.medium)
      );
      if (taskData.cover) {
        setBgColor(taskData.cover.coverBg);
      }
    }
  };

  const deleteCoverHandler = async () => {
    setMenuAnchorEl(null);
    setDelAnchorEl(null);
    updateBtnRef.current!.style.display = 'none';
    setImgUrl('');
    const taskData = await deleteCover(coverId, users);
    queryClient.setQueryData<ITaskDetails>(['task', taskId], taskData);
    const updatedTasks = boardData.tasks.map((task) => {
      if (task.id === taskId) {
        const updatedTask: ITask = { ...task, cover: null };
        return updatedTask;
      }
      return task;
    });
    queryClient.setQueryData<IBoard>(['board', boardId], {
      ...boardData,
      tasks: updatedTasks,
    });
  };

  return (
    <>
      <StyledCloseIcon dark={+bgColor.isDark}>
        <CloseIcon onClick={() => history.goBack()} />
      </StyledCloseIcon>
      <StyledCoverWrapper imgSrc={imgUrl} bgColor={bgColor.color}>
        {isUpdatingCover && <Loader color="#737581" />}
        {!isUpdatingCover && (
          <>
            <StyledButton
              ref={updateBtnRef}
              dark={+bgColor.isDark}
              variant="contained"
              aria-controls="cover-menu"
              startIcon={<VideoLabelIcon />}
              onClick={(e) => setMenuAnchorEl(e.currentTarget)}
            >
              Cover
            </StyledButton>
            <StyledMenu
              id="cover-menu"
              anchorEl={menuAnchorEl}
              getContentAnchorEl={null}
              keepMounted
              open={Boolean(menuAnchorEl)}
              onClose={() => setMenuAnchorEl(null)}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <input
                type="file"
                ref={fileUploadRef}
                style={{ display: 'none' }}
                onChange={updateCoverHandler}
              />
              <MenuItem
                onClick={() => {
                  fileUploadRef.current?.click();
                  setMenuAnchorEl(null);
                }}
              >
                Change Cover
              </MenuItem>
              <MenuItem onClick={(e) => setDelAnchorEl(e.currentTarget)}>
                Remove Cover
              </MenuItem>
              <PopOver
                headingText="Delete cover?"
                anchorEl={delAnchorEl}
                setAnchorEl={setDelAnchorEl}
              >
                <StyledDeletePopOverContent>
                  <p>Deleting a cover is permanent. There is no undo.</p>
                  <StyledDeleteButton
                    variant="contained"
                    fullWidth
                    onClick={deleteCoverHandler}
                  >
                    Delete comment
                  </StyledDeleteButton>
                </StyledDeletePopOverContent>
              </PopOver>
            </StyledMenu>
          </>
        )}
      </StyledCoverWrapper>
    </>
  );
};

export default TaskCover;
