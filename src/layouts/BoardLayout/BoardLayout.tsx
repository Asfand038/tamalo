import React from 'react';

import { Navbar } from '../../components';
import { Wrapper } from './BoardLayout.styles';

interface IProps {
  profileImg: string;
}

const BoardLayout: React.FC<IProps> = ({ children, profileImg }) => (
  <Wrapper>
    <Navbar profileImg={profileImg} />
    <div>{children}</div>
  </Wrapper>
);

export default BoardLayout;
