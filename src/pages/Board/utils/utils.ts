import { QueryClient } from 'react-query';
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
    title: data.title,
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

export const mutationConfig = (id: string, queryClient: QueryClient) => ({
  onMutate: async (newBoard: IBoard) => {
    await queryClient.cancelQueries(['board', id]);
    const previousBoard = queryClient.getQueryData<IBoard>(['board', id]);
    queryClient.setQueryData<IBoard>(['board', id], newBoard);
    return { previousBoard, newBoard };
  },

  onError: (
    error: any,
    variables: IBoard,
    context: { previousBoard: IBoard | undefined; newBoard: IBoard } | undefined
  ) => {
    if (context?.previousBoard) {
      queryClient.setQueryData('board', context.previousBoard);
    }
  },

  onSettled: () => {
    queryClient.invalidateQueries(['board', id]);
  },
});

export const getTransformValue = (id: string) => {
  const draggedItem = document.getElementById(id);
  if (draggedItem) {
    const currentTransform = (draggedItem as HTMLElement).style.transform;
    return currentTransform;
  }
  return '';
};
