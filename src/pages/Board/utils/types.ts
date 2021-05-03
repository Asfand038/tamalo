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
  profileImg: string;
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
