import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

interface IContainer {
  isDragging: boolean;
}
const Container = styled.div<IContainer>`
  border: 1px solid lightgray;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  background-color: ${({ isDragging }) =>
    isDragging ? 'lightgreen' : 'white'};
`;

interface ITask {
  id: string;
  content: string;
}

interface Props {
  task: ITask;
  index: number;
}

const Task: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;