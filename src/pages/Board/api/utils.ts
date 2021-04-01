import { IBoard, IList, ITask } from '../types';

export const getRequiredBoardData = (data: any) => {
  const tasksArray: ITask[] = data.tasks.map((task: ITask) => ({
    id: task.id,
    title: task.title,
  }));

  const listsArray: IList[] = data.lists.map((list: IList) => ({
    id: list.id,
    title: list.title,
    tasksOrder: data.tasksOrder[list.id],
  }));

  const boardData: IBoard = {
    id: data.id,
    tasks: tasksArray,
    lists: listsArray,
    listsOrder: data.listsOrder,
  };

  return boardData;
};

interface ITasksOrder {
  [key: string]: string[];
}

export const getTasksOrder = (lists: IList[]) => {
  const tasksOrder: ITasksOrder = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const list of lists) {
    tasksOrder[list.id] = list.tasksOrder;
  }
  return tasksOrder;
};
