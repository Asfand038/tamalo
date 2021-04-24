import { ITaskDetails, IUser, IComment } from './types';
import { getRequiredCoverData } from './coverUtils';

const getDesiredDateFormat = (dateString: string) => {
  const dateDetails = new Date(dateString);

  const month = dateDetails.toLocaleString('default', { month: 'short' });
  const date = dateDetails.getDate();
  let hours = dateDetails.getUTCHours();
  let minutes = dateDetails.getUTCMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  let ampm = 'AM';
  if (hours > 12) {
    hours %= 12;
    ampm = 'PM';
  }
  const time = `${hours}:${minutes} ${ampm}`;
  return `${month} ${date} at ${time}`;
};

interface ICommentLessDetails {
  authorId: string;
  taskId: string;
  commentId: string;
  createdAt: string;
  updatedAt: string;
  commentText: string;
}

const getCommentsWithDetails = (
  comments: ICommentLessDetails[],
  users: IUser[]
) => {
  const commentsWithDetails: IComment[] = comments.map(
    ({ authorId, commentText, commentId, createdAt, taskId, updatedAt }) => {
      const user = users.find((el) => el.id === authorId)!;
      const author = {
        id: authorId,
        email: user.email,
        username: user.username,
        profileImg: user.profileImg,
      };
      return {
        commentId,
        commentText,
        createdAt: getDesiredDateFormat(createdAt),
        taskId,
        updatedAt,
        author,
      };
    }
  );
  return commentsWithDetails;
};

const sortCommentsFromLatestToFirst = (
  a: ICommentLessDetails,
  b: ICommentLessDetails
) => {
  if (new Date(a.createdAt).getTime() < new Date(b.createdAt).getTime()) {
    return 1;
  }
  if (new Date(a.createdAt).getTime() > new Date(b.createdAt).getTime()) {
    return -1;
  }
  return 0;
};

export const getRequiredTaskData = (data: any) => {
  const commentsArray: ICommentLessDetails[] = data.comments.map(
    (comment: any) => {
      const { author, id, text, createdAt, task, updatedAt } = comment;
      return {
        commentId: id,
        authorId: author,
        taskId: task,
        commentText: text,
        createdAt,
        updatedAt,
      };
    }
  );

  const sortedCommentsArray: ICommentLessDetails[] = commentsArray.sort(
    sortCommentsFromLatestToFirst
  );

  const commentsDetailedList: IComment[] = getCommentsWithDetails(
    sortedCommentsArray,
    data.users
  );

  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
    cover: getRequiredCoverData(data),
    comments: commentsDetailedList,
  };

  return taskData;
};

export const getRequiredCommentData = (data: any) => {
  const { id, email, username, profileImg } = data.author;
  const author = {
    id,
    email,
    username,
    profileImg,
  };

  const newComment: IComment = {
    commentId: data.id,
    commentText: data.text,
    createdAt: getDesiredDateFormat(data.createdAt),
    taskId: data.task.id,
    updatedAt: data.updatedAt,
    author,
  };

  const commentsArray = [newComment, ...data.comments];

  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
    cover: data.cover,
    comments: commentsArray,
  };

  return taskData;
};
