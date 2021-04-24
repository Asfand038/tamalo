import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import {
  CreateOutlined as CreateOutlinedIcon,
  WatchLaterOutlined as WatchLaterOutlinedIcon,
  ChatBubbleOutlineRounded as ChatBubbleOutlineRoundedIcon,
  AttachmentOutlined as AttachmentOutlinedIcon,
} from '@material-ui/icons';

import {
  desiredDateFormat,
  getTransformValue,
  ITask,
} from '../../../../../utils';
import {
  getRequiredSizeCoverImg,
  getRequiredCoverHeight,
  CoverImageSizes,
} from '../../../../../../../utils';
import {
  StyledTaskContainer,
  StyledEditBtn,
  StyledTaskTitle,
  StyledTaskCover,
  StyledSkeleton,
  StyledBadgesContainer,
  StyledBadge,
} from './Task.styles';

interface IProps {
  task: ITask;
  index: number;
}

interface IRouteParams {
  id: string;
}

const Task: React.FC<IProps> = ({ task, index }) => {
  const { id: taskId, cover, title, dueDate } = task;
  const history = useHistory();
  const { id } = useParams<IRouteParams>();

  return (
    <Draggable
      draggableId={taskId}
      index={index}
      isDragDisabled={taskId.includes('optimistic')}
    >
      {(provided, snapshot) => (
        <StyledTaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={taskId}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          currentTransform={getTransformValue(taskId)}
          isCreated={!taskId.includes('optimistic')}
          onClick={() => history.push(`/boards/${id}/tasks/${taskId}`)}
        >
          {taskId.includes('optimistic') && (
            <StyledSkeleton variant="rect" animation="wave" />
          )}
          {cover && (
            <StyledTaskCover
              imgSrc={getRequiredSizeCoverImg(cover, CoverImageSizes.medium)}
              bgColor={cover.coverBg.color}
              height={getRequiredCoverHeight(cover, CoverImageSizes.medium)}
            />
          )}
          <StyledTaskTitle>{title}</StyledTaskTitle>
          <StyledBadgesContainer>
            {dueDate && (
              <>
                <StyledBadge>
                  <WatchLaterOutlinedIcon />
                  <div>{desiredDateFormat(dueDate)}</div>
                </StyledBadge>
                <StyledBadge>
                  <ChatBubbleOutlineRoundedIcon />
                  <div>1</div>
                </StyledBadge>
                <StyledBadge>
                  <AttachmentOutlinedIcon />
                  <div>1</div>
                </StyledBadge>
              </>
            )}
          </StyledBadgesContainer>
          <StyledEditBtn>
            <CreateOutlinedIcon />
          </StyledEditBtn>
        </StyledTaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
