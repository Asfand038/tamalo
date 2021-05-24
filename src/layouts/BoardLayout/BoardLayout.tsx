import React from 'react';

import { baseUrl } from '../../utils';
import { Navbar } from '../../components';
import { Wrapper, StyledImage } from './BoardLayout.styles';

interface IProps {
  bgColor: string;
  bgImage?: string;
  navbarColor?: string;
}

const BoardLayout: React.FC<IProps> = ({
  children,
  bgColor,
  bgImage,
  navbarColor,
}) => {
  return (
    <Wrapper bgColor={bgColor}>
      {bgImage && (
        <StyledImage src={`${baseUrl}${bgImage}`} alt="" bgColor={bgColor} />
      )}
      <Navbar bgColor={navbarColor || 'rgba(0, 0, 0, 0.15)'} />
      <div>{children}</div>
    </Wrapper>
  );
};

export default BoardLayout;
