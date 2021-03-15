import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Grid } from '@material-ui/core';

import {
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
} from '@material-ui/icons';

import { DashboardLayout } from '../layouts';

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  & svg {
    width: 25px;
    height: 42px;
    color: #172b4d;
  }
  & span {
    margin-left: 15px;
    font-size: 1.2rem;
    font-weight: 700;
    color: #172b4d;
  }
`;

interface TProps {
  color: string;
}

const StyledGridItem = styled(Grid)<TProps>`
  && {
    background-color: ${({ color }) => (color ? color : 'inherit')};
    background-clip: content-box;
    border-radius: 9px;
    max-width: 200px;

    & > div {
      border-radius: inherit;
      height: 110px;
      display: flex;
      flex-direction: column;
      &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.colors.darkness[200]};
      }
      & > div {
        padding: 13px 0 0 13px;
        font-size: ${({ theme }) => theme.typeScale.header5};
        color: ${({ theme }) => theme.colors.neutral[100]};
        font-weight: 700;
      }
    }
  }
`;

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

  return (
    <DashboardLayout>
      <StyledTitle>
        <PersonOutlineIcon />
        <span>Personal Boards</span>
      </StyledTitle>
      <Grid container spacing={1}>
        {ownedBoards.map(({ id, title, background }: BoardSchema) => {
          return (
            <StyledGridItem
              item
              sm={6}
              md={3}
              key={id}
              color={background.color}
            >
              <div>
                <div>{title}</div>
              </div>
            </StyledGridItem>
          );
        })}
      </Grid>
      <StyledTitle>
        <PeopleOutlineOutlinedIcon />
        <span>Member Of</span>
      </StyledTitle>
      <Grid container spacing={1}>
        {memberOfBoards.map(({ id, title, background }: BoardSchema) => {
          return (
            <StyledGridItem
              item
              sm={6}
              md={3}
              key={id}
              color={background.color}
            >
              <div>
                <div>{title}</div>
              </div>
            </StyledGridItem>
          );
        })}
      </Grid>
    </DashboardLayout>
  );
};

export default DashboardPage;
