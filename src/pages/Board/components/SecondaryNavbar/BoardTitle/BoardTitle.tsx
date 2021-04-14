import React, { useState, useRef } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

import { IBoard } from '../../../types';
import { mutationConfig } from '../../../utils';
import { updateOneBoard } from '../../../api';
import { StyledInput } from './BoardTitle.styles';

interface IProps {
  title: string;
}

interface IRouteParams {
  id: string;
}

const BoardTitle: React.FC<IProps> = ({ title }) => {
  const [boardTitle, setBoardTitle] = useState(title);

  const { id } = useParams<IRouteParams>();
  const inputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;

  const { mutate: updateBoardTitle } = useMutation(
    updateOneBoard,
    mutationConfig(id, queryClient)
  );

  const updateBoardTitleHandler = () => {
    if (boardTitle && boardTitle.length) {
      updateBoardTitle({ ...boardData, title: boardTitle });
    } else {
      setBoardTitle(title);
    }
  };

  return (
    <StyledInput
      ref={inputRef}
      type="text"
      value={boardTitle}
      onChange={(e) => setBoardTitle(e.target.value)}
      onFocus={(e) => e.target.select()}
      onBlur={updateBoardTitleHandler}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          updateBoardTitleHandler();
          inputRef.current?.blur();
        }
      }}
    />
  );
};

export default BoardTitle;
