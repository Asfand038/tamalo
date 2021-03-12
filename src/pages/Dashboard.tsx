import React, { useEffect } from 'react';

import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import PeopleOutlineOutlinedIcon from '@material-ui/icons/PeopleOutlineOutlined';

import { DashboardLayout } from '../layouts';

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

const DashboardPage: React.FC = () => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <DashboardLayout>
      <div>
        <PersonOutlineIcon />
        <span>Personal Boards</span>
      </div>
      <div>
        <PeopleOutlineOutlinedIcon />
        <span>Member Of</span>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
