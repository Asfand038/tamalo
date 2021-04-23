import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import CloseIcon from '@material-ui/icons/Close';

import { TaskLayout } from '../../layouts';
import { TaskTitle, Sidebar, MainContent, TaskCover } from './components';
import { Loader } from '../../components';
import { getTaskById } from './api';
import { IList, IBoard, getRequiredSizeCoverImg } from './utils';
import { StyledCloseIcon, StyledBody } from './Task.styles';

enum CoverImageSizes {
  thumbnail = 'thumbnail',
  medium = 'medium',
  small = 'small',
}

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
        <Loader color="#e1e1e1" />
      </TaskLayout>
    );

  if (error) return <div>Something went wrong...</div>;

  const { title, comments, cover } = data!;

  const targetList: IList = lists.find((list) =>
    list.tasksOrder.includes(taskId)
  )!;

  return (
    <TaskLayout>
      {!cover && (
        <StyledCloseIcon>
          <CloseIcon onClick={() => history.goBack()} />
        </StyledCloseIcon>
      )}
      {cover && (
        <TaskCover
          imgSrc={getRequiredSizeCoverImg(cover, CoverImageSizes.small)}
        />
      )}
      <TaskTitle taskTitle={title} listTitle={targetList.title} />
      <StyledBody>
        <MainContent comments={comments} />
        <Sidebar />
      </StyledBody>
    </TaskLayout>
  );
};

export default TaskModal;
