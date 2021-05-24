import { baseUrl } from '../../../utils';
import {
  getRequiredBoardData,
  getTasksOrder,
  IBoard,
  IList,
  ITask,
} from '../utils';

export const getBoardById = async (boardId: string) => {
  const data = await (
    await fetch(`${baseUrl}/boards/${boardId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  const requiredBoardData = await getRequiredBoardData(data);

  return requiredBoardData;
};

export const updateOneBoard = async ({
  id,
  listsOrder,
  lists,
  title,
}: IBoard) => {
  const tasksOrder = getTasksOrder(lists);

  const data = await (
    await fetch(`${baseUrl}/boards/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, listsOrder, tasksOrder }),
    })
  ).json();

  return getRequiredBoardData(data);
};

export const addOneList = async (id: string, title: string) => {
  const data = await (
    await fetch(`${baseUrl}/boards/${id}/new/list`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
  ).json();

  return getRequiredBoardData(data);
};

export const addOneTask = async (id: string, listId: string, title: string) => {
  const data = await (
    await fetch(`${baseUrl}/boards/${id}/lists/${listId}/new/task`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
  ).json();

  return getRequiredBoardData(data);
};

export const updateOneList = async (
  listId: string,
  title: string,
  lists: IList[],
  tasks: ITask[]
) => {
  const data = await (
    await fetch(`${baseUrl}/lists/${listId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
  ).json();

  return getRequiredBoardData({ ...data.board, lists, tasks });
};
