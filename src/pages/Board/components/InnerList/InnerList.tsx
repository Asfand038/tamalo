import React from 'react';

import { List } from './List';
import { IList, ITask } from '../../utils';

interface IProps {
  list: IList;
  tasks: ITask[];
  index: number;
}

const InnerList: React.FC<IProps> = ({ list, tasks, index }) => {
  let listTasks: ITask[] = [];
  if (list.tasksOrder) {
    listTasks = list.tasksOrder.map((taskId) => {
      const task = tasks.find((el) => el.id === taskId)!;
      return task;
    });
  }

  return <List key={list.id} list={list} tasks={listTasks} index={index} />;
};

export default React.memo(InnerList);
