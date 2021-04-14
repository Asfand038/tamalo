import React from 'react';
import { Route, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { TaskPage } from '../Task';
import { BoardLayout } from '../../layouts';
import { Loader } from '../../components';
import { SecondaryNavbar, AddList, InnerList } from './components';
import { StyledBoardContainer } from './Board.styles';
import { getBoardById, updateOneBoard } from './api';
import { mutationConfig } from './utils';
import { IBoard } from './types';

interface IRouteParams {
  id: string;
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IRouteParams>();

  const queryClient = useQueryClient();

  const { mutate: updateBoard } = useMutation(
    updateOneBoard,
    mutationConfig(id, queryClient)
  );

  const { data, isLoading, error } = useQuery(['board', id], () =>
    getBoardById(id)
  );

  if (isLoading) return <Loader />;
  if (error) return <div>Something went wrong...</div>;

  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;

  const { listsOrder, lists, tasks, title } = data!;

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

  return (
    <>
      <BoardLayout>
        <SecondaryNavbar boardTitle={title} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <StyledBoardContainer
                {...provided.droppableProps}
                ref={provided.innerRef}
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
      <Route path="/boards/:id/tasks/:id" component={TaskPage} />
    </>
  );
};

export default BoardPage;
