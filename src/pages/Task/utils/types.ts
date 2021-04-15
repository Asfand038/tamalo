export interface ITask {
  id: string;
  title: string;
}

export interface IList {
  id: string;
  title: string;
  tasksOrder: string[];
}

export interface IBoard {
  id: string;
  title: string;
  tasks: ITask[];
  lists: IList[];
  listsOrder: string[];
}

export interface ITaskDetails {
  id: string;
  title: string;
}
