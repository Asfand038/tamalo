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
    console.log(
      queryClient.setQueryData<IBoard>(['board', id], newBoard),
      'optimistic update'
    );
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
