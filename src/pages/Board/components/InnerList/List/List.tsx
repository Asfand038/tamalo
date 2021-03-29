import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { AddCard } from './AddCard';
import { Tasks } from './Tasks';
import { ListTitle } from './ListTitle';
import { IColumn, ITask } from '../types';
import { getTransformValue } from '../../../../../utils';

import { StyledListContainer, StyledTaskList } from './List.styles';

interface IProps {
  column: IColumn;
  tasks: ITask[];
  index: number;
}

const List: React.FC<IProps> = ({ column, tasks, index }) => {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided, snapshot) => (
        <StyledListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          id={column.id}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          currentTransform={getTransformValue(column.id)}
        >
          <ListTitle provided={provided} title={column.title} />
          <Droppable droppableId={column.id} type="task">
            {(provided) => (
              <StyledTaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Tasks tasks={tasks} />
                {provided.placeholder}
              </StyledTaskList>
            )}
          </Droppable>
          <AddCard />
        </StyledListContainer>
      )}
    </Draggable>
  );
};

export default List;
