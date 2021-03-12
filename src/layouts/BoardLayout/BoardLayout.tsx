import React from 'react';
import { Navbar } from '../../components';

const BoardLayout: React.FC = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default BoardLayout;
