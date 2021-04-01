import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { ClosedForm, OpenedForm } from './AddCard';
import { Tasks } from './Tasks';
import { ListTitle } from './ListTitle';
import { IList, ITask } from '../../../types';
import { getTransformValue } from '../../../../../utils';

import { StyledListContainer, StyledTaskList } from './List.styles';

interface IProps {
  list: IList;
  tasks: ITask[];
  index: number;
}

const List: React.FC<IProps> = ({ list, tasks, index }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <Draggable draggableId={list.id} index={index}>
      {(provided, snapshot) => (
        <StyledListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          id={list.id}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          currentTransform={getTransformValue(list.id)}
        >
          <ListTitle provided={provided} title={list.title} />
          <Droppable droppableId={list.id} type="task">
            {(provided) => (
              <StyledTaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Tasks tasks={tasks} />
                {provided.placeholder}
                {formIsOpen && <OpenedForm setFormIsOpen={setFormIsOpen} />}
              </StyledTaskList>
            )}
          </Droppable>
          {!formIsOpen && <ClosedForm setFormIsOpen={setFormIsOpen} />}
        </StyledListContainer>
      )}
    </Draggable>
  );
};

export default List;
