export interface ITask {
  id: string;
  title: string;
}

export interface IList {
  id: string;
  title: string;
  tasksOrder: string[];
}
