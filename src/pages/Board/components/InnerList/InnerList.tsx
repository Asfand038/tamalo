import React from 'react';

import { List } from './List';
import { IColumn, ITask } from './schemas';

interface IProps {
  column: IColumn;
  tasks: ITask[];
  index: number;
}

const InnerList: React.FC<IProps> = ({ column, tasks, index }) => {
  const columnTasks = column.taskIds.map((taskId) => {
    const task = tasks.find((el) => el.id === taskId)!;
    return task;
  });

  return (
    <List key={column.id} column={column} tasks={columnTasks} index={index} />
  );
};

export default React.memo(InnerList);
