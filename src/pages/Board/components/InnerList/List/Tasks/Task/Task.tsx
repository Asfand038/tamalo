import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

import { getTransformValue, ITask } from '../../../../../utils';
import {
  StyledTaskContainer,
  StyledEditBtn,
  StyledContent,
} from './Task.styles';

interface IProps {
  task: ITask;
  index: number;
}

interface IRouteParams {
  id: string;
}

const Task: React.FC<IProps> = ({ task, index }) => {
  const history = useHistory();
  const { id } = useParams<IRouteParams>();

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
          onClick={() => history.push(`/boards/${id}/tasks/${task.id}`)}
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
