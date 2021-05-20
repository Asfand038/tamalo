import { ICover } from '../../../utils';

export interface ITask {
  id: string;
  title: string;
  cover: ICover | null;
  dueDate?: string;
}

export interface IList {
  id: string;
  title: string;
  tasksOrder: string[];
}

export interface IUser {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  profileImg?: string;
}

export interface IBoard {
  id: string;
  title: string;
  tasks: ITask[];
  lists: IList[];
  listsOrder: string[];
  owners: IUser[];
  members: IUser[];
  bgImage?: string;
  bgColor: string;
}

export interface IComment {
  commentId: string;
  commentText: string;
  createdAt: string;
  taskId: string;
  updatedAt: string;
  author: IUser;
}

export interface IAttachment {
  id: string;
  name: string;
  ext: string;
  url: string;
  createdAt: string;
}

export interface ITaskDetails {
  id: string;
  title: string;
  dueDate?: string;
  cover: ICover | null;
  comments: IComment[];
  members: [] | IUser[];
  attachments: [] | IAttachment[];
}
