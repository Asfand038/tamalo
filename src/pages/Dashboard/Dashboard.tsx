import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import {
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
  StarOutline as StarOutlineIcon,
} from '@material-ui/icons';

import { DashboardLayout } from '../../layouts';
import {
  StyledTitle,
  StyledGridItem,
  StyledBoardsCategory,
} from './Dashboard.styles';

interface BoardSchema {
  title: string;
  id: string;
  owners: string[];
  members: string[];
  background: { [prop: string]: string };
}

const DashboardPage: React.FC = () => {
  const [ownedBoards, setOwnedBoards] = useState<BoardSchema[]>([]);
  const [memberOfBoards, setMemberOfBoards] = useState<BoardSchema[]>([]);
  const [hoverBoard, setHoverBoard] = useState('');

  useEffect(() => {
    getUserData();
  }, []);

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
    console.log(ownedBoards);
    console.log(memberOfBoards);
  };

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
          <Grid container spacing={1}>
            {boardCategory.map(({ id, title, background }: BoardSchema) => {
              return (
                <StyledGridItem
                  item
                  sm={6}
                  md={3}
                  key={id}
                  color={background.color}
                  hovered={hoverBoard === id}
                  onMouseEnter={() => setHoverBoard(id)}
                  onMouseLeave={() => setHoverBoard('')}
                >
                  <div>
                    <div>{title}</div>
                    <StarOutlineIcon />
                  </div>
                </StyledGridItem>
              );
            })}
          </Grid>
        </StyledBoardsCategory>
      ))}
    </DashboardLayout>
  );
};

export default DashboardPage;
