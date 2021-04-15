import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';

import { updateOneTask } from '../../api';
import { ITaskDetails, IBoard } from '../../utils';
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

  const { mutate: updateTaskTitle } = useMutation(
    () => updateOneTask(taskId, title),
    {
      onMutate: async (updatedTask: ITaskDetails) => {
        await queryClient.cancelQueries(['task', taskId]);
        const previousTask = queryClient.getQueryData<ITaskDetails>([
          'task',
          taskId,
        ]);
        queryClient.setQueryData<ITaskDetails>(['task', taskId], updatedTask);

        const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;

        const newTasks = boardData.tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, title };
          }
          return task;
        });

        queryClient.setQueryData<IBoard>(['board', boardId], {
          ...boardData,
          tasks: newTasks,
        });

        return { previousTask, updatedTask };
      },

      onError: (
        error: any,
        variables: ITaskDetails,
        context:
          | {
              previousTask: ITaskDetails | undefined;
              updatedTask: ITaskDetails;
            }
          | undefined
      ) => {
        if (context?.previousTask) {
          queryClient.setQueryData('task', context.previousTask);
        }
      },

      onSettled: () => {
        queryClient.invalidateQueries(['task', taskId]);
      },
    }
  );

  const updateTaskTitleHandler = () => {
    if (title && title.length) {
      updateTaskTitle({ id: taskId, title });
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
