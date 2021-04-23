import {
  IUser,
  IComment,
  ICover,
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
  comments: IComment[],
  cover: ICover | null
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
    cover,
  });
};

export const updateOneComment = async (
  commentId: string,
  commentText: string,
  author: IUser,
  comments: IComment[],
  cover: ICover | null
) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: commentText,
      }),
    })
  ).json();

  return getRequiredCommentData({
    ...data,
    comments,
    author: { ...data.author, profileImg: author.profileImg, cover },
  });
};

export const deleteOneComment = async (
  commentId: string,
  author: IUser,
  comments: IComment[],
  cover: ICover | null
) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
  ).json();

  return getRequiredCommentData({
    ...data,
    comments,
    author: { ...data.author, profileImg: author.profileImg, cover },
  });
};

export const addOneCover = async (file: File) => {
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: file,
    })
  ).json();

  return data;
};
