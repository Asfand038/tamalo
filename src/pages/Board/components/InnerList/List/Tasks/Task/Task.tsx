import React from 'react';
import { useHistory } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import {
  StyledTaskContainer,
  StyledEditBtn,
  StyledContent,
} from './Task.styles';
import { ITask } from '../../../../../types';
import { getTransformValue } from '../../../../../../../utils';

interface IProps {
  task: ITask;
  index: number;
}

const Task: React.FC<IProps> = ({ task, index }) => {
  const history = useHistory();
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
          onClick={() => history.push('/boards/abc/tasks/123')}
        >
          <StyledContent>{task.title}</StyledContent>
          <StyledEditBtn>
            <CreateOutlinedIcon />
          </StyledEditBtn>
        </StyledTaskContainer>
      )}
    </Draggable>
  );
};

export default Task;
