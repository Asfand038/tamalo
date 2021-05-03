import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Route } from 'react-router-dom';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { Helmet } from 'react-helmet';

import { TaskPage } from '../Task';
import { BoardLayout } from '../../layouts';
import { SecondaryNavbar, AddList, InnerList } from './components';
import { StyledBoardContainer } from './Board.styles';
import { IBoard } from './utils';

interface IProps {
  data: IBoard;
  updateBoard: Function;
}

const BoardDetails: React.FC<IProps> = ({ data, updateBoard, children }) => {
  const {
    listsOrder,
    lists,
    tasks,
    title,
    id,
    members,
    owners,
    bgImage,
    bgColor,
  } = data;

  const queryClient = useQueryClient();
  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;

  useEffect(() => {
    document.title = `${title} | Tamalo`;
  }, [title]);

  useEffect(() => {
    const boardContainer = document.getElementById(id)! as HTMLDivElement;
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY > 0) boardContainer.scrollLeft += 30;
      else boardContainer.scrollLeft -= 30;
    };
    boardContainer.addEventListener('wheel', handleScroll);
    return boardContainer.removeEventListener('wheel', handleScroll, true);
  }, [id]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'list') {
      const newListsOrder = [...listsOrder];
      newListsOrder.splice(source.index, 1);
      newListsOrder.splice(destination.index, 0, draggableId);
      updateBoard({ ...boardData, listsOrder: newListsOrder });
      return;
    }

    const start = lists.find((el) => el.id === source.droppableId)!;
    const finish = lists.find((el) => el.id === destination.droppableId)!;

    if (start === finish) {
      const newTasksOrder = [...start.tasksOrder];
      newTasksOrder.splice(source.index, 1);
      newTasksOrder.splice(destination.index, 0, draggableId);
      const newList = {
        ...start,
        tasksOrder: newTasksOrder,
      };
      const newLists = lists.filter((list) => list.id !== source.droppableId);
      updateBoard({ ...boardData, lists: [...newLists, newList] });
      return;
    }

    const startTasksOrder = [...start.tasksOrder];
    startTasksOrder.splice(source.index, 1);
    const newStartList = {
      ...start,
      tasksOrder: startTasksOrder,
    };
    const finishTasksOrder = [...finish.tasksOrder];
    finishTasksOrder.splice(destination.index, 0, draggableId);
    const newFinishList = {
      ...finish,
      tasksOrder: finishTasksOrder,
    };
    const newLists = lists.filter(
      (list) =>
        list.id !== source.droppableId && list.id !== destination.droppableId
    );
    updateBoard({
      ...boardData,
      lists: [...newLists, newStartList, newFinishList],
    });
  };

  const imgSrc = bgImage || '';

  return (
    <>
      <Helmet>
        <link
          rel="icon"
          href={`data:image/svg+xml,%3Csvg%20enable-background%3D%22new%200%200%2024%2024%22%20height%3D%2232%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m21%200h-18c-1.657%200-3%201.343-3%203v18c0%201.656%201.343%203%203%203h18c1.656%200%203-1.344%203-3v-18c0-1.657-1.344-3-3-3zm-10.56%2018.18c0%20.795-.645%201.44-1.44%201.44h-4.44c-.795%200-1.44-.646-1.44-1.44v-13.62c0-.795.645-1.44%201.44-1.44h4.44c.795%200%201.44.645%201.44%201.44zm10.44-6c0%20.794-.645%201.44-1.44%201.44h-4.44c-.795%200-1.44-.646-1.44-1.44v-7.62c0-.795.646-1.44%201.44-1.44h4.44c.795%200%201.44.645%201.44%201.44z%22%20fill%3D%22%23${bgColor.slice(
            1
          )}%22%2F%3E%3C%2Fsvg%3E`}
        />
      </Helmet>
      <BoardLayout bgImage={imgSrc}>
        {children}
        <SecondaryNavbar boardTitle={title} members={members} owners={owners} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <StyledBoardContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
                id={id}
              >
                {listsOrder.map((listId, index) => {
                  const list = lists.find((el) => el.id === listId)!;
                  return (
                    <InnerList
                      key={list.id}
                      list={list}
                      tasks={tasks}
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
      <Route path="/boards/:boardId/tasks/:taskId" component={TaskPage} />
    </>
  );
};

export default BoardDetails;
