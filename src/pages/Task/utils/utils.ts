import { ITaskDetails, IUser, IComment } from './types';

const getAvatarName = (username: string) => {
  const blankspaceIndex = username.indexOf(' ');
  if (blankspaceIndex === -1) {
    return username.slice(0, 2).toUpperCase();
  }
  return `${username[0]}${username[blankspaceIndex + 1]}`.toUpperCase();
};

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

export interface ICommentLessDetails {
  authorId: string;
  taskId: string;
  commentId: string;
  createdAt: string;
  updatedAt: string;
  commentText: string;
}

export const getCommentsWithDetails = (
  comments: ICommentLessDetails[],
  users: IUser[]
) => {
  const commentsWithDetails: IComment[] = comments.map(
    ({ authorId, commentText, commentId, createdAt, taskId, updatedAt }) => {
      const user = users.find((el) => el.id === authorId)!;
      const author = {
        id: authorId,
        username: user.username,
        image: user.profileImg,
        avatarName: getAvatarName(user.username),
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

export const getRequiredTaskData = (data: any) => {
  const commentsArray = data.comments.map((comment: any) => {
    const { author, id, text, createdAt, task, updatedAt } = comment;
    return {
      commentId: id,
      authorId: author,
      taskId: task,
      commentText: text,
      createdAt,
      updatedAt,
    };
  });

  const commentsDetailedList: IComment[] = getCommentsWithDetails(
    commentsArray,
    data.users
  );

  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
    comments: commentsDetailedList,
  };

  return taskData;
};
