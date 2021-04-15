import React from 'react';

import { Navbar } from '../../components';
import { Wrapper } from './BoardLayout.styles';

const BoardLayout: React.FC = ({ children }) => (
  <Wrapper>
    <Navbar />
    <div>{children}</div>
  </Wrapper>
);

export default BoardLayout;
