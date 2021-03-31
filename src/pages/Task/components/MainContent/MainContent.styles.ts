import React from 'react';
import styled from 'styled-components';
import { Button, TextField, Avatar } from '@material-ui/core';

export const StyledContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 24px;
  padding: 0 8px 8px 16px;
  position: relative;
  width: 552px;
`;

// Styles for Activity

export const StyledWrapper = styled.div`
  margin-top: 24px;
  & .d-flex {
    display: flex;
  }
`;

export const StyledAvatar = styled(Avatar)`
  && {
    height: 28px;
    width: 28px;
    display: inline-flex;
    background-color: ${({ theme }) => theme.colors.red[100]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;

// Styles for Add Description

interface ITextField {
  editing: boolean;
}

export const StyledTextField = styled(TextField)<ITextField>`
  && {
    width: 100%;
    & > div {
      padding: 0;
      margin-left: 40px;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      font-size: 14px;
      background-color: rgba(9, 30, 66, 0.04);
      color: ${({ theme }) => theme.colors.blue[400]};
      padding: 10px 12px 8px 12px;
      border-radius: 3px;
      box-shadow: none;
      transition: background-color 200ms ease, box-shadow 200ms ease;
      cursor: ${({ editing }) => (editing ? 'text' : 'pointer')};
      &:hover {
        background-color: rgba(9, 30, 66, 0.08);
      }
      &:focus {
        background-color: ${({ theme }) => theme.colors.neutral[100]};
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      }
      &::placeholder {
        color: ${({ editing }) => (editing ? 'inherit' : '#172b4d')};
        opacity: ${({ editing }) =>
          editing ? '0.8 !important' : '1 !important'};
      }
    }
  }
`;

export const StyledBtnWrapper = styled.div`
  margin-left: 40px;
`;

// Styles for both(Add description and activity)

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
  color: #172b4d;
  font-weight: 600;
  margin-top: 6px;
`;

export const StyledIcon = styled(({ component, ...props }) =>
  React.cloneElement(component, props)
)`
  && {
    position: absolute;
    left: -42px;
    color: #42526e;
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
    color: #172b4d;
    background-color: rgba(9, 30, 66, 0.04);
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
      background-color: rgba(9, 30, 66, 0.08);
      box-shadow: none;
      border: none;
      color: #091e42;
    }
  }
`;
