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
  const { owners, members, lists } = boardData;
  const users = [...owners, ...members];

  const { data, isLoading, error } = useQuery(['task', taskId], () =>
    getTaskById(taskId, users)
  );

  if (isLoading)
    return (
      <TaskLayout>
        <Loader />
      </TaskLayout>
    );

  if (error) return <div>Something went wrong...</div>;

  const { title, comments } = data!;

  const targetList: IList = lists.find((list) =>
    list.tasksOrder.includes(taskId)
  )!;

  return (
    <TaskLayout>
      <StyledCloseIcon>
        <CloseIcon onClick={() => history.goBack()} />
      </StyledCloseIcon>
      <TaskTitle taskTitle={title} listTitle={targetList.title} />
      <StyledBody>
        <MainContent comments={comments} />
        <Sidebar />
      </StyledBody>
    </TaskLayout>
  );
};

export default TaskModal;
