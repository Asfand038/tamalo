import React from 'react';

import { Navbar, Sidebar } from '../../components';
import { StyledPage } from './DashboardLayout.styles';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <StyledPage>
        <Sidebar />
        <div>{children}</div>
      </StyledPage>
    </>
  );
};

export default DashboardLayout;
