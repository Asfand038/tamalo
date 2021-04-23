import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const StyledWrapper = styled.div`
  display: flex;
  padding: 8px 0 16px;
`;

export const StyledCommentEditor = styled.form`
  flex: 1;
  border: none;
  transition: none;
  background-color: white;
  border-radius: 3px;
  box-shadow: ${({ theme }) =>
    `0 4px 8px -2px ${theme.colors.boxShadow}, 0 0 0 1px rgb(9 30 66 / 8%)`};
`;

interface IBtnContainer {
  isTextFieldEmpty: boolean;
}

export const StyledBtnContainer = styled.div<IBtnContainer>`
  display: flex;
  justify-content: space-between;
  margin: 12px 12px 8px;
  & button:first-of-type {
    pointer-events: ${({ isTextFieldEmpty }) => isTextFieldEmpty && 'none'};
    background-color: ${({ isTextFieldEmpty }) =>
      isTextFieldEmpty && 'rgba(9, 30, 66, 0.04)'};
    color: ${({ isTextFieldEmpty }) => isTextFieldEmpty && '#a5adba'};
  }
`;

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  color: #172b4d;
  flex: 1;
  margin-left: 14px;
`;

export const StyledCommentDetails = styled.div`
  margin-bottom: 6px;
  & > span:first-child {
    font-weight: 700;
    cursor: pointer;
  }
  & > span:last-child {
    color: #5e6c84;
    font-size: 12px;
    margin-left: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: #172b4d;
    }
  }
`;

export const StyledCommentText = styled.div`
  background-color: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 2px -1px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  padding: 8px 12px;
  width: fit-content;
`;

export const StyledCommentUpdateBtns = styled.div`
  display: flex;
  margin-top: 10px;
  color: #6b778c;
  & svg {
    height: 16px;
    width: 16px;
    color: #6b778c;
    &:hover {
      cursor: pointer;
      color: #172b4d;
    }
  }
  & > div {
    font-size: 12px;
    margin: 2.4px 0 0 3px;
    & button {
      border: none;
      background-color: inherit;
      text-decoration: underline;
      color: #6b778c;
      cursor: pointer;
      padding: 0 3px;
      &:hover {
        color: #172b4d;
      }
    }
  }
`;

export const StyledLoaderWrapper = styled.div`
  && {
    position: relative;
    width: 30px;
    height: 26px;
    & > div:first-child {
      font-size: 2px;
      &::before {
        left: -4px;
      }
      &::after {
        left: 4px;
      }
    }
    & > div:last-child {
      font-size: 12px;
      color: #6b778c;
      margin: 8px 0 0 30px;
    }
  }
`;

export const StyledDeleteButton = styled(Button)`
  && {
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    background-color: ${({ theme }) => theme.colors.red[200]};
    color: ${({ theme }) => theme.colors.neutral[100]};
    text-transform: none;
    margin: 8px 4px 0 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.red[100]};
    }
  }
`;

export const StyledPopOverContent = styled.div`
  padding: 0 12px 12px;
  & p {
    margin-bottom: 8px;
    color: #172b4d;
  }
`;
