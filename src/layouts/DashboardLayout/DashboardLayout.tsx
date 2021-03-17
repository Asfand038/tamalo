import React from 'react';

import { Navbar, Sidebar } from '../../components';
import { StyledPage, StyledDashboard } from './DashboardLayout.styles';

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
