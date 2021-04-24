import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

import { updateOneTask } from '../../api';
import {
  ITaskDetails,
  taskMutationConfig,
  taskMutationKeys,
  IBoard,
} from '../../utils';
import {
  StyledContainer,
  StyledIcon,
  StyledTaskTitle,
  StyledTaskTitleInput,
} from './TaskTitle.styles';

interface IProps {
  taskTitle: string;
  listTitle: string;
}

interface IRouteParams {
  boardId: string;
  taskId: string;
}

const Title: React.FC<IProps> = ({ taskTitle, listTitle }) => {
  const [title, setTitle] = useState(taskTitle);

  const inputRef = useRef<HTMLInputElement>(null);
  const { taskId, boardId } = useParams<IRouteParams>();

  const queryClient = useQueryClient();
  const taskData = queryClient.getQueryData<ITaskDetails>(['task', taskId])!;
  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members } = boardData;
  const users = [...owners, ...members];

  const { mutate: updateTaskTitle } = useMutation(
    () => updateOneTask(taskId, title, users),
    taskMutationConfig(taskId, queryClient, {
      key: taskMutationKeys.updateTitle,
      boardId,
      title,
    })
  );

  const updateTaskTitleHandler = () => {
    if (title && title.length) {
      updateTaskTitle({ ...taskData, title });
    } else {
      setTitle(taskTitle);
    }
  };

  return (
    <StyledContainer>
      <StyledIcon>
        <VideoLabelIcon />
      </StyledIcon>
      <StyledTaskTitle>
        <StyledTaskTitleInput
          inputRef={inputRef}
          InputProps={{ spellCheck: false }}
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          multiline
          onBlur={updateTaskTitleHandler}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              updateTaskTitleHandler();
              inputRef.current?.blur();
            }
          }}
        />
        <div>
          in list <span>{listTitle}</span>
        </div>
      </StyledTaskTitle>
    </StyledContainer>
  );
};

export default Title;
