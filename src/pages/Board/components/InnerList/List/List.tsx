import React, { useState, useEffect, memo } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import { ClosedAddTaskForm, OpenedAddTaskForm } from './AddCard';
import { ListTitle } from './ListTitle';
import { Task } from './Task';
import { getTransformValue, IList, ITask } from '../../../utils';

import {
  StyledListContainer,
  StyledTaskList,
  StyledSkeleton,
} from './List.styles';

interface ITasksProps {
  tasks: ITask[];
}

// eslint-disable-next-line react/display-name
const Tasks: React.FC<ITasksProps> = memo(({ tasks }) => (
  <>
    {tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ))}
  </>
));

interface IProps {
  list: IList;
  tasks: ITask[];
  index: number;
}

const List: React.FC<IProps> = ({ list, tasks, index }) => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  useEffect(() => {
    const listContainer = document.getElementById(list.id)! as HTMLDivElement;
    listContainer.addEventListener('wheel', (e) => {
      e.stopPropagation();
    });
    return listContainer.removeEventListener('wheel', (e) => {
      e.stopPropagation();
    });
  }, [list.id]);

  return (
    <Draggable
      draggableId={list.id}
      index={index}
      isDragDisabled={list.id.includes('optimistic')}
    >
      {(provided, snapshot) => (
        <StyledListContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          id={list.id}
          isDragging={snapshot.isDragging && !snapshot.isDropAnimating}
          currentTransform={getTransformValue(list.id)}
          isCreated={!list.id.includes('optimistic')}
        >
          {list.id.includes('optimistic') && (
            <StyledSkeleton variant="rect" animation="wave" />
          )}
          <ListTitle provided={provided} title={list.title} listId={list.id} />
          <Droppable droppableId={list.id} type="task">
            {(provided) => (
              <StyledTaskList
                id={list.id}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <Tasks tasks={tasks} />
                {provided.placeholder}
                {formIsOpen && (
                  <OpenedAddTaskForm
                    setFormIsOpen={setFormIsOpen}
                    listId={list.id}
                  />
                )}
              </StyledTaskList>
            )}
          </Droppable>
          {!formIsOpen && <ClosedAddTaskForm setFormIsOpen={setFormIsOpen} />}
        </StyledListContainer>
      )}
    </Draggable>
  );
};

export default List;
