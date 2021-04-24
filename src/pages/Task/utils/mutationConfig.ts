import { QueryClient } from 'react-query';
import { ITaskDetails, IBoard } from './types';

export const taskMutationKeys = {
  updateTitle: 'UPDATE_TITLE',
  addComment: 'ADD_COMMENT',
  editComment: 'EDIT_COMMENT',
  deleteComment: 'DELETE_COMMENT',
};

interface IConfig {
  key: string;
  boardId?: string;
  title?: string;
}

export const taskTitleMutationConfig = (
  taskId: string,
  queryClient: QueryClient,
  boardId: string,
  title: string
) => {
  const boardData = queryClient.getQueryData<IBoard>(['board', boardId])!;
  const newTasks = boardData.tasks.map((task) => {
    if (task.id === taskId) {
      return { ...task, title };
    }
    return task;
  });
  queryClient.setQueryData<IBoard>(['board', boardId], {
    ...boardData,
    tasks: newTasks,
  });
};

export const taskMutationConfig = (
  taskId: string,
  queryClient: QueryClient,
  config: IConfig
) => ({
  onMutate: async (updatedTask: ITaskDetails) => {
    await queryClient.cancelQueries(['task', taskId]);
    const previousTask = queryClient.getQueryData<ITaskDetails>([
      'task',
      taskId,
    ]);
    queryClient.setQueryData<ITaskDetails>(['task', taskId], updatedTask);

    if (config.key === taskMutationKeys.updateTitle) {
      taskTitleMutationConfig(
        taskId,
        queryClient,
        config.boardId!,
        config.title!
      );
    }
    return { previousTask, updatedTask };
  },

  onError: (
    error: any,
    variables: ITaskDetails,
    context:
      | {
          previousTask: ITaskDetails | undefined;
          updatedTask: ITaskDetails;
        }
      | undefined
  ) => {
    if (context?.previousTask) {
      queryClient.setQueryData('task', context.previousTask);
    }
  },

  onSettled: () => {
    queryClient.invalidateQueries(['task', taskId]);
  },
});
