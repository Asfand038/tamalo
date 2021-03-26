import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import {
  StyledTaskContainer,
  StyledEditBtn,
  StyledContent,
} from './Task.styles';
import { ITask } from '../../../schemas';
import { getTransformValue } from '../../../../../../../utils';

interface IProps {
  task: ITask;
  index: number;
}

const Task: React.FC<IProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <StyledTaskContainer
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          id={task.id}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          currentTransform={getTransformValue(task.id)}
        >
          <StyledContent>{task.content}</StyledContent>
          <StyledEditBtn>
            <CreateOutlinedIcon />
          </StyledEditBtn>
        </StyledTaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
