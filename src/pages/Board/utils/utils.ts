import { QueryClient } from 'react-query';
import { getDesiredDateFormat, getRequiredCoverData } from '../../../utils';

import { IBoard, IList, ITask, IUser } from './types';

export const getRequiredBoardData = async (data: any) => {
  const tasksArray: ITask[] = data.tasks.map((el: ITask) => {
    const task: ITask = {
      id: el.id,
      title: el.title,
      cover: null,
    };
    if (el.cover) {
      task.cover = getRequiredCoverData(el);
    }
    if (el.dueDate) {
      task.dueDate = getDesiredDateFormat(el.dueDate);
    }
    return task;
  });

  const listsArray: IList[] = data.lists.map((list: IList) => ({
    id: list.id,
    title: list.title,
    tasksOrder: data.tasksOrder[list.id],
  }));

  const ownersArray: IUser[] = data.owners.map(
    ({ id, email, username, firstName, lastName, profileImg }: IUser) => ({
      id,
      email,
      username,
      profileImg,
      firstName,
      lastName,
    })
  );

  const membersArray: IUser[] = data.members.map(
    ({ id, email, username, firstName, lastName, profileImg }: IUser) => ({
      id,
      email,
      username,
      profileImg,
      firstName,
      lastName,
    })
  );

  const { bgColor } = data.meta;

  const boardData: IBoard = {
    id: data.id,
    title: data.title,
    tasks: tasksArray,
    lists: listsArray,
    listsOrder: data.listsOrder,
    owners: ownersArray,
    members: membersArray,
    bgColor,
  };

  if (data.backgroundImage) {
    boardData.bgImage = data.backgroundImage.url;
  }
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

export const getTransformValue = (id: string) => {
  const draggedItem = document.getElementById(id);
  if (draggedItem) {
    const currentTransform = (draggedItem as HTMLElement).style.transform;
    return currentTransform;
  }
  return '';
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

export const desiredDateFormat = (date: string) => {
  const index = date.indexOf('at') - 1;
  return date.slice(0, index);
};
