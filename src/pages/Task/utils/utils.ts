import { ITaskDetails, IUser, IComment } from './types';
import { getRequiredCoverData, getDesiredDateFormat } from '../../../utils';

interface ICommentLessDetails {
  authorId: string;
  taskId: string;
  commentId: string;
  createdAt: string;
  updatedAt: string;
  commentText: string;
}

const getDesiredMembersData = (members: string[], users: IUser[]) => {
  if (!members.length) {
    return [];
  }
  const membersArray: IUser[] = members.map((memberId: string) => {
    const user = users.find((el) => el.id === memberId)!;
    return {
      id: user.id,
      email: user.email,
      username: user.username,
      profileImg: user.profileImg,
    };
  });
  return membersArray;
};

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

  const boolArray: boolean[] = data.members.map((member: string | object) => {
    if (typeof member === 'string') {
      return true;
    }
    return false;
  });
  const isStringArray = boolArray.every((el) => el);
  let members = [...data.members];
  if (!isStringArray) {
    members = data.members.map((member: any) => member.id);
  }

  const membersArray = getDesiredMembersData(members, data.users);

  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
    cover: getRequiredCoverData(data),
    comments: commentsDetailedList,
    members: membersArray,
  };

  if (data.dueDate) {
    taskData.dueDate = getDesiredDateFormat(data.dueDate);
  }

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
  const membersArray = getDesiredMembersData(data.members, data.users);

  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
    cover: data.cover,
    comments: commentsArray,
    members: membersArray,
  };

  return taskData;
};
