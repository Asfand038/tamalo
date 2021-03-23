import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';

interface IContainer {
  isDragging: boolean;
}
const Container = styled.div<IContainer>`
  && {
    position: relative;
    display: flex;
    justify-content: space-between;
    border-radius: 3px;
    padding: 6px 8px 2px;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 22px;
    box-shadow: ${({ isDragging }) =>
      isDragging ? '0 0 3px rgb(9 30 66 / 25%)' : '0 1px 0 rgb(9 30 66 / 25%)'};
    font-weight: 400;
    line-height: 20px;
    color: #172b4d;
    background-color: #fff;
    &:hover {
      background-color: #f4f5f7;
    }
  }
`;

const EditBtn = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  height: 26px;
  width: 26px;
  border-radius: 3px;
  display: none;
  opacity: 0.8;
  ${Container}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & svg {
    color: #42526e;
    height: 16px;
    width: 16px;
  }
  &:hover {
    background-color: #ebecf0;
    opacity: 1;
  }
`;

interface ITask {
  id: string;
  content: string;
}

interface Props {
  task: ITask;
  index: number;
}

const Task: React.FC<Props> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
          <EditBtn>
            <CreateOutlinedIcon />
          </EditBtn>
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
