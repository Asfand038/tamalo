import {
  IUser,
  IComment,
  getRequiredTaskData,
  getRequiredCommentData,
} from '../utils';

export const getTaskById = async (id: string, users: IUser[]) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/tasks/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  return getRequiredTaskData({ ...data, users });
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

export const addOneComment = async (
  commentText: string,
  author: IUser,
  taskId: string,
  comments: IComment[]
) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: commentText,
        author: author.id,
        task: taskId,
      }),
    })
  ).json();

  return getRequiredCommentData({
    ...data,
    comments,
    author: { ...data.author, profileImg: author.profileImg },
  });
};
