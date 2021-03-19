import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import {
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
} from '@material-ui/icons';

import { DashboardLayout } from '../../layouts';
import { StyledTitle, StyledBoardsCategory } from './Dashboard.styles';
import { BoardSchema, DashboardCard } from './components';

const DashboardPage: React.FC = () => {
  const [ownedBoards, setOwnedBoards] = useState<BoardSchema[]>([]);
  const [memberOfBoards, setMemberOfBoards] = useState<BoardSchema[]>([]);

  const getUserData = async () => {
    const userId = 'test-user-1';
    const data = await (
      await fetch('./fakeData/boards.json', {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
    ).json();
    const ownedBoards = data.boards.filter((board: BoardSchema) =>
      board.owners.includes(userId)
    );
    const memberOfBoards = data.boards.filter((board: BoardSchema) =>
      board.members.includes(userId)
    );
    setOwnedBoards(ownedBoards);
    setMemberOfBoards(memberOfBoards);
  };

  useEffect(() => {
    getUserData();
  }, []);

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
