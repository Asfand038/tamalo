export interface ITaskDetails {
  id: string;
  title: string;
}

export const getRequiredTaskData = (data: any) => {
  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
  };

  return taskData;
};
