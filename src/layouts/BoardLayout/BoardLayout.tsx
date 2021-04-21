import React from 'react';

import { Navbar } from '../../components';
import { Wrapper } from './BoardLayout.styles';

interface IProps {
  profileImg: string;
  avatarFallbackName: string;
}

const BoardLayout: React.FC<IProps> = ({
  children,
  profileImg,
  avatarFallbackName,
}) => (
  <Wrapper>
    <Navbar profileImg={profileImg} avatarFallbackName={avatarFallbackName} />
    <div>{children}</div>
  </Wrapper>
);

export default BoardLayout;
