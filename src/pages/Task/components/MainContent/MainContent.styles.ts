import React from 'react';
import styled from 'styled-components';
import { Button, IconButton } from '@material-ui/core';

export const StyledContainer = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 24px;
  padding: 0 8px 8px 16px;
  position: relative;
  width: 552px;
`;

export const StyledWrapper = styled.div`
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

export const StyledDeleteLink = styled.div`
  color: ${({ theme }) => theme.colors.blue[300]};
  margin: 8px 0 8px 4px;
  display: inline-block;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.blue[400]};
  }
`;

export const StyledAttachment = styled.div`
  margin-left: 40px;
  cursor: pointer;
  display: flex;
  margin-bottom: 8px;
  border-radius: 3px;
  & a {
    display: none;
  }
  & > div:nth-of-type(2) {
    flex: 1;
    padding: 8px 8px 8px 16px;
    & > div:first-child {
      color: ${({ theme }) => theme.colors.blue[400]};
      font-weight: 700;
      word-break: break-word;
    }
    & > div:nth-of-type(2) {
      color: ${({ theme }) => theme.colors.blue[300]};
      margin: 8px 0;
      display: inline-block;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.darkness[40]};
  }
`;

interface IAttachmentImg {
  imgSrc: string;
  isImg: boolean;
}
export const StyledAttachmentImg = styled.div<IAttachmentImg>`
  background-position: 50%;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 3px;
  height: 80px;
  text-align: center;
  width: 112px;
  background-image: ${({ imgSrc, isImg }) =>
    isImg ? `url('https://tamalo.herokuapp.com${imgSrc}')` : 'none'};
  background-color: ${({ theme }) => theme.colors.darkness[40]};
  margin: auto 0;
  color: ${({ theme }) => theme.colors.neutral[550]};
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
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

export const StyledTasksDetailsContainer = styled.div`
  margin: 8px 0 0 40px;
  display: flex;
`;

export const StyledTaskDetailItem = styled.div`
  margin: 0 8px 8px 0;
  & > div:first-child {
    color: #5e6c84;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  }
  & > div:nth-of-type(2) {
    display: flex;
    & div {
      margin-right: 4px;
    }
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

export const StyledAddMemberButton = styled(IconButton)`
  && {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.darkness[40]};
    width: 32px;
    height: 32px;
    & svg {
      color: ${({ theme }) => theme.colors.blue[300]};
      margin: 0 1px 0.5px 0;
    }
  }
`;
