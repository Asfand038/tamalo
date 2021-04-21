import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 24px;
  padding: 0 8px 8px 16px;
  position: relative;
  width: 552px;
`;

export const StyledActivityContainer = styled.div`
  margin-top: 24px;
`;

export const StyledTitleContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 32px;
  padding: 8px 0;
  margin: 0 0 4px 40px;
`;

export const StyledTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.blue[400]};
  font-weight: 600;
  margin-top: 6px;
`;

export const StyledIcon = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  && {
    position: absolute;
    left: -42px;
    color: ${({ theme }) => theme.colors.blue[300]};
    height: 30px;
    line-height: 30px;
    width: 30px;
  }
`;

export const StyledButton = styled(Button)`
  && {
    font-size: 14px;
    font-weight: 400;
    text-transform: none;
    color: ${({ theme }) => theme.colors.blue[400]};
    background-color: ${({ theme }) => theme.colors.darkness[40]};
    box-shadow: none;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    height: 32px;
    margin-left: auto;
    padding: 6px 12px;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[50]};
      box-shadow: none;
      border: none;
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }
`;
