import React, { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import { useParams } from 'react-router-dom';

import { ErrorAlert } from '../../../../../components';
import { errorMessages } from '../../../../../utils';
import { mutationConfig, IBoard } from '../../../utils';
import { updateOneBoard } from '../../../api';
import { StyledAutoSizeInput } from './BoardTitle.styles';

interface IProps {
  title: string;
}

interface IRouteParams {
  id: string;
}

const BoardTitle: React.FC<IProps> = ({ title }) => {
  const [boardTitle, setBoardTitle] = useState(title);

  const { id } = useParams<IRouteParams>();

  const queryClient = useQueryClient();
  const boardData = queryClient.getQueryData<IBoard>(['board', id])!;

  const { mutate: updateBoardTitle, error } = useMutation(
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
    <>
      {error && <ErrorAlert message={errorMessages.updateBoard} />}
      <StyledAutoSizeInput
        id={`title-${id}`}
        value={boardTitle}
        onChange={(e) => setBoardTitle(e.target.value)}
        onFocus={(e) => e.target.select()}
        onBlur={updateBoardTitleHandler}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            updateBoardTitleHandler();
            const input = document.getElementById(
              `title-${id}`
            )! as HTMLInputElement;
            input.blur();
          }
        }}
      />
    </>
  );
};

export default BoardTitle;
