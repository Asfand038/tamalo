import React from 'react';
import { useQuery } from 'react-query';

import { Grid } from '@material-ui/core';
import {
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
} from '@material-ui/icons';

import { DashboardLayout } from '../../layouts';
import { StyledTitle, StyledBoardsCategory } from './Dashboard.styles';
import { Loader } from '../../components';
import { BoardSchema, DashboardCard } from './components';
import { useAuth } from '../../context';

const getBoards = async () => {
  const data = await (
    await fetch('https://tamalo.herokuapp.com/boards', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  ).json();
  return data;
};

const DashboardPage: React.FC = () => {
  const { userId } = useAuth();
  const { data, isLoading, error } = useQuery('boards', getBoards);

  if (isLoading) return <Loader />;
  if (error) return <div>Something went wrong...</div>;

  const ownedBoards = data.filter((board: BoardSchema) =>
    board.owners.includes(userId)
  );

  const memberOfBoards = data.filter((board: BoardSchema) =>
    board.members.includes(userId)
  );

  const boardCategories = [
    {
      title: 'Personal Boards',
      boardCategory: ownedBoards,
      icon: <PersonOutlineIcon />,
    },
    {
      title: 'Member Of',
      boardCategory: memberOfBoards,
      icon: <PeopleOutlineOutlinedIcon />,
    },
  ];

  return (
    <DashboardLayout>
      {boardCategories.map(({ title, boardCategory, icon }) => (
        <StyledBoardsCategory key={title}>
          <StyledTitle>
            {icon}
            <span>{title}</span>
          </StyledTitle>
          <Grid container spacing={2}>
            {boardCategory.map((boardDetails: BoardSchema) => (
              <DashboardCard key={boardDetails.id} details={boardDetails} />
            ))}
          </Grid>
        </StyledBoardsCategory>
      ))}
    </DashboardLayout>
  );
};

export default DashboardPage;
