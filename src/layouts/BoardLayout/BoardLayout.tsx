import React from 'react';

import { Navbar } from '../../components';
import { Wrapper, StyledImage } from './BoardLayout.styles';

interface IProps {
  bgColor?: string;
  bgImage?: string;
}

const BoardLayout: React.FC<IProps> = ({ children, bgColor, bgImage }) => {
  return (
    <Wrapper bgColor={bgColor} bgImage={bgImage}>
      {bgImage && (
        <StyledImage src={`https://tamalo.herokuapp.com${bgImage}`} alt="" />
      )}
      <Navbar bgColor="rgba(0, 0, 0, 0.15)" />
      <div>{children}</div>
    </Wrapper>
  );
};

export default BoardLayout;
