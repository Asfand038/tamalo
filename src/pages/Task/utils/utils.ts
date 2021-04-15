import { ITaskDetails } from './types';

export const getRequiredTaskData = (data: any) => {
  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
  };

  return taskData;
};
