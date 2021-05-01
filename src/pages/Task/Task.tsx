import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQuery, useQueryClient } from 'react-query';
import CloseIcon from '@material-ui/icons/Close';

import { TaskLayout } from '../../layouts';
import { TaskTitle, Sidebar, MainContent, TaskCover } from './components';
import { ErrorContainer, Loader } from '../../components';
import { getTaskById } from './api';
import { IList, IBoard, ITaskDetails } from './utils';
import {
  getRequiredSizeCoverImg,
  CoverImageSizes,
  IError,
  errorMessages,
} from '../../utils';
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

  const {
    title,
    comments,
    cover,
    dueDate,
    members: taskMembers,
    attachments,
  } = data!;

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
          coverId={cover.id}
          imgSrc={getRequiredSizeCoverImg(cover, CoverImageSizes.medium)}
          coverBg={cover.coverBg}
        />
      )}
      <TaskTitle taskTitle={title} listTitle={targetList.title} />
      <StyledBody>
        <MainContent
          comments={comments}
          dueDate={dueDate}
          taskMembers={taskMembers}
          attachments={attachments}
        />
        <Sidebar cover={cover} taskMembers={taskMembers} boardMembers={users} />
      </StyledBody>
    </TaskLayout>
  );
};

export default TaskModal;
