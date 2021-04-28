import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import { useAuth } from '../../contexts';
import BoardDetails from './BoardDetails';
import { Loader } from '../../components';
import { getBoardById, updateOneBoard } from './api';
import { getBoards } from '../Dashboard/api';
import { mutationConfig } from './utils';

interface IRouteParams {
  id: string;
}

const BoardPage: React.FC = () => {
  const { id } = useParams<IRouteParams>();
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const { mutate: updateBoard } = useMutation(
    updateOneBoard,
    mutationConfig(id, queryClient)
  );

  const {
    isLoading: loadingBoardsData,
    isError: errorLoadingBoardsData,
  } = useQuery(['boards'], () => getBoards(user.id));

  const {
    data,
    isLoading: loadingBoardData,
    isError: errorLoadingBoardData,
  } = useQuery(['board', id], () => getBoardById(id, user.id, user.profileImg));

  if (loadingBoardsData || loadingBoardData) return <Loader color="#e1e1e1" />;
  if (errorLoadingBoardsData || errorLoadingBoardData)
    return <div>Something went wrong...</div>;

  return <BoardDetails data={data!} updateBoard={updateBoard} />;
};

export default BoardPage;
