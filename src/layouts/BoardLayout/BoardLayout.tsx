import React from 'react';

import { Navbar } from '../../components';
import { Wrapper } from './BoardLayout.styles';

interface IProps {
  profileImg: string;
  avatarFallbackName: string;
  bgColor: string;
}

const BoardLayout: React.FC<IProps> = ({
  children,
  profileImg,
  avatarFallbackName,
  bgColor,
}) => (
  <Wrapper bgColor={bgColor}>
    <Navbar profileImg={profileImg} avatarFallbackName={avatarFallbackName} />
    <div>{children}</div>
  </Wrapper>
);

export default BoardLayout;
