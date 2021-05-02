import React, { useEffect, useState } from 'react';
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
import { Loader, AddBoardModal, ErrorContainer } from '../../components';
import { DashboardCard } from './components';
import { useAuth } from '../../contexts';
import { getBoards } from './api';
import { IDashboardData, IError, errorMessages } from '../../utils';
import { IBoardLessDetails } from './utils';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const [isAddBoardModalOpen, setIsAddBoardModalOpen] = useState(false);

  const { data, isLoading, error } = useQuery<IDashboardData, IError>(
    ['boards'],
    () => getBoards(user.id)
  );

  useEffect(() => {
    document.title = 'Tamalo | Boards';
  }, []);

  if (isLoading) return <Loader color="#e1e1e1" />;
  if (error) return <ErrorContainer message={errorMessages.getBoards} />;

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
                {isAddBoardModalOpen && (
                  <AddBoardModal
                    initialInputValue=""
                    open={isAddBoardModalOpen}
                    setOpen={setIsAddBoardModalOpen}
                  />
                )}
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
