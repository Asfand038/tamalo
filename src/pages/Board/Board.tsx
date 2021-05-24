import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { useAuth } from '../../contexts';
import BoardDetails from './BoardDetails';
import { Loader, ErrorAlert, ErrorContainer } from '../../components';
import { getBoardById, updateOneBoard } from './api';
import { getBoards } from '../Dashboard/api';
import { mutationConfig, IBoard } from './utils';
import { IError, IDashboardData, errorMessages } from '../../utils';

interface IRouteParams {
  id: string;
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IRouteParams>();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: updateBoard, error: errorUpdatingBoard } = useMutation(
    updateOneBoard,
    mutationConfig(id, queryClient)
  );

  const {
    isLoading: loadingBoardsData,
    error: errorLoadingBoardsData,
  } = useQuery<IDashboardData, IError>(['boards'], () => getBoards(user.id));

  const {
    data,
    isLoading: loadingBoardData,
    error: errorLoadingBoardData,
  } = useQuery<IBoard, IError>(['board', id], () => getBoardById(id));

  if (loadingBoardsData || loadingBoardData) return <Loader color="#e1e1e1" />;
  if (errorLoadingBoardsData)
    return <ErrorContainer message={errorMessages.getBoards} />;
  if (errorLoadingBoardData)
    return <ErrorContainer message={errorMessages.getBoard} />;

  return (
    <BoardDetails data={data!} updateBoard={updateBoard}>
      {errorUpdatingBoard && <ErrorAlert message={errorMessages.updateBoard} />}
    </BoardDetails>
  );
};

export default BoardPage;
