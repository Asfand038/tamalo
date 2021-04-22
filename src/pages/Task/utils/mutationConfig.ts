import { QueryClient } from 'react-query';
import { ITaskDetails } from './types';

export const optimisticUpdateMutationConfig = (
  taskId: string,
  queryClient: QueryClient
) => ({
  onMutate: async (updatedTask: ITaskDetails) => {
    await queryClient.cancelQueries(['task', taskId]);
    const previousTask = queryClient.getQueryData<ITaskDetails>([
      'task',
      taskId,
    ]);
    queryClient.setQueryData<ITaskDetails>(['task', taskId], updatedTask);

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
