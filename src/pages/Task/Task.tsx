import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import CloseIcon from '@material-ui/icons/Close';

import { TaskLayout } from '../../layouts';
import { TaskTitle, Sidebar, MainContent } from './components';
import { Loader } from '../../components';
import { getTaskById } from './api';
import { IList, IBoard } from './utils';
import { StyledCloseIcon, StyledBody } from './Task.styles';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

const TaskModal: React.FC = () => {
  const { boardId, taskId } = useParams<IRouteParams>();
  const history = useHistory();

  const queryClient = useQueryClient();

  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;

  const { data, isLoading, error } = useQuery(['task', taskId], () =>
    getTaskById(taskId)
  );

  if (isLoading)
    return (
      <TaskLayout>
        <Loader />
      </TaskLayout>
    );

  if (error) return <div>Something went wrong...</div>;

  const { title } = data!;

  const targetList: IList = boardData.lists.find((list) =>
    list.tasksOrder.includes(taskId)
  )!;

  return (
    <TaskLayout>
      <StyledCloseIcon>
        <CloseIcon onClick={() => history.goBack()} />
      </StyledCloseIcon>
      <TaskTitle taskTitle={title} listTitle={targetList.title} />
      <StyledBody>
        <MainContent />
        <Sidebar />
      </StyledBody>
    </TaskLayout>
  );
};

export default TaskModal;
