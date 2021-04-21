import { QueryClient } from 'react-query';
import { ITaskDetails, IUser, IComment, IBoard } from './types';

const getDesiredDateFormat = (dateString: string) => {
  const dateDetails = new Date(dateString);

  const month = dateDetails.toLocaleString('default', { month: 'short' });
  const date = dateDetails.getDate();
  let hours = dateDetails.getUTCHours();
  let minutes = dateDetails.getUTCMinutes().toString();
  if (minutes.length === 1) {
    minutes = `0${minutes}`;
  }
  let ampm = 'AM';
  if (hours > 12) {
    hours %= 12;
    ampm = 'PM';
  }
  const time = `${hours}:${minutes} ${ampm}`;
  return `${month} ${date} at ${time}`;
};

export interface ICommentLessDetails {
  authorId: string;
  taskId: string;
  commentId: string;
  createdAt: string;
  updatedAt: string;
  commentText: string;
}

export const getCommentsWithDetails = (
  comments: ICommentLessDetails[],
  users: IUser[]
) => {
  const commentsWithDetails: IComment[] = comments.map(
    ({ authorId, commentText, commentId, createdAt, taskId, updatedAt }) => {
      const user = users.find((el) => el.id === authorId)!;
      const author = {
        id: authorId,
        email: user.email,
        username: user.username,
        profileImg: user.profileImg,
      };
      return {
        commentId,
        commentText,
        createdAt: getDesiredDateFormat(createdAt),
        taskId,
        updatedAt,
        author,
      };
    }
  );
  return commentsWithDetails;
};

export const getRequiredTaskData = (data: any) => {
  const commentsArray = data.comments.map((comment: any) => {
    const { author, id, text, createdAt, task, updatedAt } = comment;
    return {
      commentId: id,
      authorId: author,
      taskId: task,
      commentText: text,
      createdAt,
      updatedAt,
    };
  });

  const commentsDetailedList: IComment[] = getCommentsWithDetails(
    commentsArray,
    data.users
  );

  const taskData: ITaskDetails = {
    id: data.id,
    title: data.title,
    comments: commentsDetailedList,
  };

  return taskData;
};

export const taskMutationConfig = (
  boardId: string,
  taskId: string,
  title: string,
  queryClient: QueryClient
) => ({
  onMutate: async (updatedTask: ITaskDetails) => {
    await queryClient.cancelQueries(['task', taskId]);
    const previousTask = queryClient.getQueryData<ITaskDetails>([
      'task',
      taskId,
    ]);
    queryClient.setQueryData<ITaskDetails>(['task', taskId], updatedTask);

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
