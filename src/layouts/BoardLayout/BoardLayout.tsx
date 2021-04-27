import React from 'react';

import { Navbar } from '../../components';
import { Wrapper } from './BoardLayout.styles';

interface IProps {
  bgColor: string;
}

const BoardLayout: React.FC<IProps> = ({ children, bgColor }) => {
  return (
    <Wrapper bgColor={bgColor}>
      <Navbar />
      <div>{children}</div>
    </Wrapper>
  );
};

export default BoardLayout;
