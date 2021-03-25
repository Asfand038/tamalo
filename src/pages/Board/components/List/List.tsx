import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { AddCard } from './AddCard';
import { Task } from './Task';
import { ListTitle } from './ListTitle';

import { Container, StyledTaskList, StyledTiltWrapper } from './List.styles';

interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}
interface ITask {
  id: string;
  content: string;
}
interface IProps {
  column: IColumn;
  tasks: (ITask | undefined)[];
  index: number;
}

const List: React.FC<IProps> = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <StyledTiltWrapper
            isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          >
            <ListTitle provided={provided} title={column.title} />
            <Droppable droppableId={column.id} type="task">
              {(provided) => (
                <StyledTaskList
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {tasks.map((task, index) => (
                    <Task
                      key={task?.id}
                      task={task || { id: '', content: '' }}
                      index={index}
                    />
                  ))}
                  {provided.placeholder}
                </StyledTaskList>
              )}
            </Droppable>
            <AddCard />
          </StyledTiltWrapper>
        </Container>
      )}
    </Draggable>
  );
};

export default List;
