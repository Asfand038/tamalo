import React from 'react';

import { Navbar, Sidebar } from '../../components';
import { StyledWrapper } from './DashboardLayout.styles';

const DashboardLayout: React.FC = ({ children }) => {
  return (
    <StyledWrapper>
      <Navbar />
      <div className="main-page">
        <Sidebar />
        <div>{children}</div>
      </div>
    </StyledWrapper>
  );
};

export default DashboardLayout;
