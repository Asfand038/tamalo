import React from 'react';
import styled from 'styled-components';

interface IWrapper {
  bgColor: string;
}

export const Wrapper = React.memo(styled.div<IWrapper>`
  overflow: hidden;
  height: 100vh;
  background-color: ${({ bgColor, theme }) =>
    bgColor || theme.colors.neutral[100]};
  & > div:last-child {
    position: relative;
    margin-top: 44px;
  }
`);

export const StyledImage = styled.img<IWrapper>`
  width: 100%;
  position: absolute;
  height: 100vh;
  object-fit: cover;
  object-position: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;
