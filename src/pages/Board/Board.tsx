import React, { useState } from 'react';
import { Route, useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { TaskPage } from '../Task';
import { BoardLayout } from '../../layouts';
import { Loader } from '../../components';
import { SecondaryNavbar, AddList, InnerList } from './components';
import { StyledBoardContainer } from './Board.styles';
import { IList, ITask, IBoard } from './types';
import { getBoardById, updateBoard } from './api';

interface IRouteParams {
  id: string;
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IRouteParams>();
  const [listsOrder, setListsOrder] = useState<string[]>([]);
  const [lists, setLists] = useState<IList[]>([]);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const queryClient = useQueryClient();

  const { mutate } = useMutation(updateBoard, {
    // When mutate is called:
    onMutate: async (newBoard: IBoard) => {
      // Cancel any outgoing refetches
      // (so they don't overwrite our optimistic update)
      await queryClient.cancelQueries(['board', id]);

      // Snapshot the previous value
      const previousBoard = queryClient.getQueryData<IBoard>(['board', id]);

      // Optimistically update to the new value
      queryClient.setQueryData<IBoard>(['board', id], newBoard);

      // Return a context with the previous and new board
      return { previousBoard, newBoard };
    },
    // If the mutation fails, use the context we returned above
    onError: (err, newBoard, context) => {
      if (context?.previousBoard) {
        queryClient.setQueryData('board', context.previousBoard);
      }
    },

    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries(['board', id]);
    },
  });

  const { isLoading, error } = useQuery(['board', id], () => getBoardById(id), {
    onSuccess: ({ lists, tasks, listsOrder }) => {
      setListsOrder(listsOrder);
      setLists(lists);
      setTasks(tasks);
    },
  });

  if (isLoading) return <Loader />;
  if (error) return <div>Something went wrong...</div>;

  const onDragEnd = (result: DropResult) => {
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

    if (type === 'list') {
      const newListsOrder = [...listsOrder];
      newListsOrder.splice(source.index, 1);
      newListsOrder.splice(destination.index, 0, draggableId);
      setListsOrder(newListsOrder);
      mutate({ id, tasks, lists, listsOrder: newListsOrder });
      return;
    }
    // Updating state if card dropped somewhere else which is valid destination.
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
      setLists([...newLists, newList]);
      mutate({ id, lists: [...newLists, newList], listsOrder, tasks });
      return;
    }
    // Moving from one list to another
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
    setLists([...newLists, newStartList, newFinishList]);
    mutate({
      id,
      lists: [...newLists, newStartList, newFinishList],
      listsOrder,
      tasks,
    });
  };

  return (
    <>
      <BoardLayout>
        <SecondaryNavbar />
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
