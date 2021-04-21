import React, { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import { Route } from 'react-router-dom';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { TaskPage } from '../Task';
import { BoardLayout } from '../../layouts';
import { SecondaryNavbar, AddList, InnerList } from './components';
import { StyledBoardContainer } from './Board.styles';
import { IBoard } from './utils';
import { UserSchema } from '../../utils';

interface IProps {
  data: IBoard;
  updateBoard: Function;
}

const BoardDetails: React.FC<IProps> = ({ data, updateBoard }) => {
  const { listsOrder, lists, tasks, title, id, members, owners } = data;

  const queryClient = useQueryClient();
  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;
  // Change it in future
  const userData = queryClient.getQueryData<UserSchema>(['boards']);
  let userProfileImg = '';
  if (userData) {
    userProfileImg = userData.userProfileImg;
  }

  useEffect(() => {
    const boardContainer = document.getElementById(id)! as HTMLDivElement;
    window.addEventListener('wheel', (e) => {
      if (e.deltaY > 0) boardContainer.scrollLeft += 100;
      else boardContainer.scrollLeft -= 100;
    });
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

  return (
    <>
      <BoardLayout profileImg={userProfileImg}>
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
