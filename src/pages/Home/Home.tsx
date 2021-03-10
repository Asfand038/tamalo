import React, { useEffect } from 'react';
import styled from 'styled-components';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';

import Sidebar from '../../components/Sidebar/Sidebar';

const getData = () => {
  fetch('./fakeData/boards.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

const StyledHomePage = styled.div`
  display: flex;
  margin-left: 12%;
  height: 90vh;
  .home-page {
    width: 100%;
  }
`;
const HomePage: React.FC = () => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <StyledHomePage>
      <Sidebar />
      <div className="home-page">
        <div>
          <PersonOutlineIcon />
          <span>Personal Boards</span>
        </div>
        <div>
          <PeopleOutlineOutlinedIcon />
          <span>Member Of</span>
        </div>
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
