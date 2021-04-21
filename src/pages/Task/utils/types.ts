export interface ITask {
  id: string;
  title: string;
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
}

export interface IComment {
  commentId: string;
  commentText: string;
  createdAt: string;
  taskId: string;
  updatedAt: string;
  author: IUser;
}

export interface ITaskDetails {
  id: string;
  title: string;
  comments: IComment[];
}
