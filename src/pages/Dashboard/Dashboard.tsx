import React from 'react';
import { useQuery } from 'react-query';
import { Grid } from '@material-ui/core';
import {
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
} from '@material-ui/icons';

import {
  StyledTitle,
  StyledBoardsCategory,
  StyledAddBoard,
} from './Dashboard.styles';
import { DashboardLayout } from '../../layouts';
import { Loader } from '../../components';
import { DashboardCard, AddBoardModal } from './components';
import { useAuth } from '../../contexts';
import { getBoards } from './api';
import { IBoardLessDetails } from './utils';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [isAddBoardModalOpen, setIsAddBoardModalOpen] = React.useState(false);

  const { data, isLoading, error } = useQuery(
    ['boards'],
    () => getBoards(user.id),
    { refetchOnWindowFocus: false }
  );

  if (isLoading) return <Loader color="#e1e1e1" />;
  if (error) return <div>Something went wrong...</div>;

  const { ownedBoards, memberOfBoards } = data!;

  const boardCategories = [
    {
      key: 'PERSONAL',
      title: 'Personal Boards',
      boardCategory: ownedBoards,
      icon: <PersonOutlineIcon />,
    },
    {
      key: 'MEMBER',
      title: 'Member Of',
      boardCategory: memberOfBoards,
      icon: <PeopleOutlineOutlinedIcon />,
    },
  ];

  return (
    <DashboardLayout>
      {boardCategories.map(({ title, boardCategory, icon, key }) => (
        <StyledBoardsCategory key={key}>
          <StyledTitle>
            {icon}
            <span>{title}</span>
          </StyledTitle>
          <Grid container spacing={2}>
            {boardCategory.map((boardDetails: IBoardLessDetails) => (
              <DashboardCard key={boardDetails.id} details={boardDetails} />
            ))}
            {key === 'PERSONAL' && (
              <>
                <StyledAddBoard
                  item
                  sm={6}
                  md={3}
                  onClick={() => setIsAddBoardModalOpen(true)}
                >
                  <div>Create new board</div>
                </StyledAddBoard>
                <AddBoardModal
                  open={isAddBoardModalOpen}
                  setOpen={setIsAddBoardModalOpen}
                />
              </>
            )}
            {key === 'MEMBER' && !boardCategory.length && (
              <StyledAddBoard item sm={6} md={3}>
                <div>No boards yet</div>
              </StyledAddBoard>
            )}
          </Grid>
        </StyledBoardsCategory>
      ))}
    </DashboardLayout>
  );
};

export default DashboardPage;
