import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { BoardLayout } from '../../layouts';
import { SecondaryNavbar, Column, initialData, AddList } from './components';
import { StyledBoardContainer } from './Board.styles';

const BoardPage: React.FC = () => {
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);
  const [columns, setColumns] = useState(initialData.columns);
  const [tasks] = useState(initialData.tasks);

  const onDragEnd = (result: DropResult) => {
    document.body.style.backgroundColor = 'inherit';
    const { destination, source, draggableId, type } = result;

    // Checks if an object is dropped not within a valid destination
    if (!destination) {
      return;
    }
    // Checking if an object is dropped at the same place.
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
      const newColumnOrder = [...columnOrder];
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);
      setColumnOrder(newColumnOrder);
      return;
    }
    // Updating state if card dropped somewhere else which is valid destination.
    const start = columns.find((el) => el.id === source.droppableId)!;
    const finish = columns.find((el) => el.id === destination.droppableId)!;

    if (start === finish) {
      const newTaskIds = [...start.taskIds];
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newColumns = columns.filter(
        (column) => column.id !== source.droppableId
      );
      setColumns([...newColumns, newColumn]);
      return;
    }
    // Moving from one list to another
    const startTaskIds = [...start.taskIds];
    startTaskIds.splice(source.index, 1);
    const newStartColumn = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = [...finish.taskIds];
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finish,
      taskIds: finishTaskIds,
    };
    const newColumns = columns.filter(
      (column) =>
        column.id !== source.droppableId &&
        column.id !== destination.droppableId
    );
    setColumns([...newColumns, newStartColumn, newFinishColumn]);
  };

  return (
    <BoardLayout>
      <SecondaryNavbar />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <StyledBoardContainer
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnOrder.map((columnId, index) => {
                const column = columns.find((el) => el.id === columnId)!;
                const columnTasks = column.taskIds.map((taskId) =>
                  tasks.find((el) => el.id === taskId)
                );
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={columnTasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
              <AddList />
            </StyledBoardContainer>
          )}
        </Droppable>
      </DragDropContext>
    </BoardLayout>
  );
};

export default BoardPage;
