import React, { useState } from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

import { AddCard } from './AddCard';
import { Task } from './Task';

import {
  Container,
  ListTitleInput,
  TaskList,
  StyledListTitle,
} from './List.styles';

interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}
interface ITask {
  id: string;
  content: string;
}
interface Props {
  column: IColumn;
  tasks: (ITask | undefined)[];
  index: number;
}

const List: React.FC<Props> = ({ column, tasks, index }) => {
  const [title, setTitle] = useState(column.title);
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <StyledListTitle>
            <ListTitleInput
              variant="outlined"
              value={title}
              multiline
              rowsMax="12"
              onChange={(e) => setTitle(e.target.value)}
              {...provided.dragHandleProps}
            />
            <span>
              <MoreHorizIcon />
            </span>
          </StyledListTitle>
          <Droppable droppableId={column.id} type="task">
            {(provided) => (
              <TaskList ref={provided.innerRef} {...provided.droppableProps}>
                {tasks.map((task, index) => (
                  <Task
                    key={task?.id}
                    task={task || { id: '', content: '' }}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
          <AddCard />
        </Container>
      )}
    </Draggable>
  );
};

export default List;
