import React from 'react';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';
import {
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
} from '@material-ui/icons';

import { StyledTitle, StyledBoardsCategory } from './Dashboard.styles';
import { DashboardLayout } from '../../layouts';
import { Loader } from '../../components';
import { DashboardCard } from './components';
import { useAuth } from '../../contexts';
import { getBoards } from './api';
import { BoardSchema } from './utils';
import { getAvatarFallbackName } from '../../utils';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { data, isLoading, error } = useQuery(['boards'], () =>
    getBoards(user.id)
  );

  if (isLoading) return <Loader color="#e1e1e1" />;
  if (error) return <div>Something went wrong...</div>;

  const { ownedBoards, memberOfBoards } = data!;

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
    <DashboardLayout
      profileImg={user.profileImg}
      avatarFallbackName={getAvatarFallbackName(user.username)}
    >
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
