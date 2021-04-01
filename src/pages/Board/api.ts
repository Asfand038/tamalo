/* eslint-disable no-restricted-syntax */
import { IList, ITask, IBoard } from './types';

export const getBoardById = async (id: string) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/boards/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  const tasksArray: ITask[] = data.tasks.map((task: ITask) => ({
    id: task.id,
    title: task.title,
  }));

  const listsArray: IList[] = data.lists.map((list: IList) => ({
    id: list.id,
    title: list.title,
    tasksOrder: data.tasksOrder[list.id],
  }));

  const boardData = {
    tasks: tasksArray,
    lists: listsArray,
    listsOrder: data.listsOrder,
  };
  return boardData;
};

interface ITasksOrder {
  [key: string]: string[];
}
export const updateBoard = async ({ id, listsOrder, lists }: IBoard) => {
  const tasksOrder: ITasksOrder = {};
  for (const list of lists) {
    tasksOrder[list.id] = list.tasksOrder;
  }
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/boards/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ listsOrder, tasksOrder }),
    })
  ).json();

  const tasksArray: ITask[] = data.tasks.map((task: ITask) => ({
    id: task.id,
    title: task.title,
  }));
  const listsArray: IList[] = data.lists.map((list: IList) => ({
    id: list.id,
    title: list.title,
    tasksOrder: data.tasksOrder[list.id],
  }));
  const boardData = {
    tasks: tasksArray,
    lists: listsArray,
    listsOrder: data.listsOrder,
  };

  return boardData;
};
