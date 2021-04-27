import React from 'react';

import { Navbar, Sidebar } from '../../components';
import { StyledDashboard, StyledPage } from './DashboardLayout.styles';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <StyledDashboard>
      <Navbar />
      <StyledPage>
        <Sidebar />
        <div>{children}</div>
      </StyledPage>
    </StyledDashboard>
  );
};

export default DashboardLayout;
