import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';

import TaskDetails from './TaskDetails';
import { TaskLayout } from '../../layouts';
import { ErrorContainer, Loader } from '../../components';
import { getTaskById } from './api';
import { IBoard, ITaskDetails } from './utils';
import { IError, errorMessages } from '../../utils';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

const TaskModal: React.FC = () => {
  const { boardId, taskId } = useParams<IRouteParams>();

  const queryClient = useQueryClient();

  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members } = boardData;
  const users = [...owners, ...members];

  const { data, isLoading, error } = useQuery<ITaskDetails, IError>(
    ['task', taskId],
    () => getTaskById(taskId, users)
  );

  if (isLoading)
    return (
      <TaskLayout>
        <Loader color="#e1e1e1" />
      </TaskLayout>
    );

  if (error)
    return (
      <TaskLayout>
        <ErrorContainer message={errorMessages.getTask} />
      </TaskLayout>
    );

  return <TaskDetails data={data!} />;
};

export default TaskModal;
