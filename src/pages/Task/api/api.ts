import FastAverageColor from 'fast-average-color';
import { ICover } from '../../../utils';
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

export const updateTaskTitle = async (
  id: string,
  title: string,
  users: IUser[]
) => {
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

  return getRequiredTaskData({ ...data, users });
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

export const addCover = async (file: File, taskId: string, users: IUser[]) => {
  const fileData = new FormData();
  fileData.append('files', file);
  const coverData = await (
    await fetch(`https://tamalo.herokuapp.com/upload`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: fileData,
    })
  ).json();

  const coverId = coverData[0].id;
  const coverImageUrl = coverData[0].formats.thumbnail.url;
  const fac = new FastAverageColor();

  const bgColorDetails = await fac.getColorAsync(
    `https://tamalo.herokuapp.com${coverImageUrl}`
  );
  const coverBg = {
    color: bgColorDetails.rgb,
    isDark: bgColorDetails.isDark,
  };

  const taskData = await (
    await fetch(`https://tamalo.herokuapp.com/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cover: coverId, metaData: { coverBg } }),
    })
  ).json();

  return getRequiredTaskData({ ...taskData, users });
};

export const deleteCover = async (id: string, users: IUser[]) => {
  const coverData = await (
    await fetch(`https://tamalo.herokuapp.com/upload/files/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();

  const taskId = coverData.related[0].id;
  const taskData = await getTaskById(taskId, users);
  return taskData;
};

export const updateTaskMembers = async (
  userId: string,
  taskId: string,
  taskMembers: IUser[] | [],
  users: IUser[]
) => {
  const memberIds = taskMembers.map((member: IUser) => member.id);
  const member = taskMembers.find((member: IUser) => member.id === userId);
  let updatedMemberIds: string[];
  if (member) {
    updatedMemberIds = memberIds.filter((memberId) => memberId !== userId);
  } else {
    updatedMemberIds = [...memberIds, userId];
  }
  const data = await (
    await fetch(`https://tamalo.herokuapp.com/tasks/${taskId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ members: updatedMemberIds }),
    })
  ).json();
  console.log('request completed[raw data]', { ...data, users });
  return getRequiredTaskData({ ...data, users });
};
