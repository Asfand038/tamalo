import { IBoard } from '../types';
import { getRequiredBoardData, getTasksOrder } from './utils';

export const getBoardById = async (id: string) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/boards/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  return getRequiredBoardData(data);
};

export const updateBoard = async ({ id, listsOrder, lists }: IBoard) => {
  const tasksOrder = getTasksOrder(lists);
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

  return getRequiredBoardData(data);
};
