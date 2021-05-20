import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { Helmet } from 'react-helmet';
import CloseIcon from '@material-ui/icons/Close';

import { TaskTitle, Sidebar, MainContent, TaskCover } from './components';
import { ITaskDetails, IList, IBoard } from './utils';
import { TaskLayout } from '../../layouts';
import {
  getRequiredSizeCoverImg,
  CoverImageSizes,
  getAppIcon,
} from '../../utils';
import { StyledCloseIcon, StyledBody } from './Task.styles';

interface IRouteParams {
  boardId: string;
  taskId: string;
}

interface IProps {
  data: ITaskDetails;
}

const TaskDetails: React.FC<IProps> = ({ data }) => {
  const {
    title,
    comments,
    cover,
    dueDate,
    members: taskMembers,
    attachments,
  } = data;

  const history = useHistory();
  const { boardId, taskId } = useParams<IRouteParams>();
  const queryClient = useQueryClient();

  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const { owners, members, lists, bgColor } = boardData;
  const users = [...owners, ...members];

  const targetList: IList = lists.find((list) =>
    list.tasksOrder.includes(taskId)
  )!;

  return (
    <>
      <Helmet>
        <title>
          {title} on {targetList.title} | Tamalo
        </title>
        <link rel="icon" href={getAppIcon(bgColor)} />
      </Helmet>
      <TaskLayout>
        {!cover && (
          <StyledCloseIcon>
            <CloseIcon onClick={() => history.push(`/boards/${boardId}`)} />
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
          <Sidebar
            cover={cover}
            taskMembers={taskMembers}
            boardMembers={users}
          />
        </StyledBody>
      </TaskLayout>
    </>
  );
};

export default TaskDetails;
