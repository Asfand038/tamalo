import React from 'react';

import { Navbar, Sidebar } from '../../components';
import { StyledDashboard, StyledPage } from './DashboardLayout.styles';

interface IProps {
  profileImg: string;
}

const DashboardLayout: React.FC<IProps> = ({ children, profileImg }) => {
  return (
    <StyledDashboard>
      <Navbar profileImg={profileImg} />
      <StyledPage>
        <Sidebar />
        <div>{children}</div>
      </StyledPage>
    </StyledDashboard>
  );
};

export default DashboardLayout;
