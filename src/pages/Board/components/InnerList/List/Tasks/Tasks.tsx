import React from 'react';

import { Task } from './Task';
import { ITask } from '../../../../types';

interface IProps {
  tasks: ITask[];
}

const Tasks: React.FC<IProps> = ({ tasks }) => (
  <>
    {tasks.map((task, index) => (
      <Task key={task.id} task={task} index={index} />
    ))}
  </>
);

export default React.memo(Tasks);
