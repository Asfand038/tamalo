import React from 'react';

import { Navbar, Sidebar } from '../../components';
import { StyledDashboard, StyledPage } from './DashboardLayout.styles';

interface IProps {
  profileImg: string;
  avatarFallbackName: string;
}

const DashboardLayout: React.FC<IProps> = ({
  children,
  profileImg,
  avatarFallbackName,
}) => {
  return (
    <StyledDashboard>
      <Navbar profileImg={profileImg} avatarFallbackName={avatarFallbackName} />
      <StyledPage>
        <Sidebar />
        <div>{children}</div>
      </StyledPage>
    </StyledDashboard>
  );
};

export default DashboardLayout;
