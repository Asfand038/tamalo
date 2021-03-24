import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import { StyledTaskContainer, StyledEditBtn } from './Task.styles';

interface ITask {
  id: string;
  content: string;
}

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
          isDragging={snapshot.isDragging}
        >
          {task.content}
          <StyledEditBtn>
            <CreateOutlinedIcon />
          </StyledEditBtn>
        </StyledTaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
