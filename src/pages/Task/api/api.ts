import { getRequiredTaskData } from '../utils';

export const getTaskById = async (id: string) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  return getRequiredTaskData(data);
};

export const updateOneTask = async (id: string, title: string) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/tasks/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
  ).json();

  return getRequiredTaskData(data);
};
