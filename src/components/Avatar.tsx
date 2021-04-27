import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';

const StyledAvatar = styled(Avatar)<{
  width: string;
  height: string;
}>`
  && {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.red[200]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;

interface IProps {
  width: string;
  height: string;
  profileImg: string;
  avatarFallbackName: string;
}

const UserAvatar: React.FC<IProps> = ({
  width,
  profileImg,
  height,
  avatarFallbackName,
}) => (
  <StyledAvatar src={profileImg} width={width} height={height}>
    {avatarFallbackName}
  </StyledAvatar>
);

export default UserAvatar;
