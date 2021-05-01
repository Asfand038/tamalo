import styled from 'styled-components';

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
    `0 4px 8px -2px ${theme.colors.boxShadow[200]}, 0 0 0 1px ${theme.colors.boxShadow[100]}`};
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
    background-color: ${({ isTextFieldEmpty, theme }) =>
      isTextFieldEmpty && theme.colors.darkness[40]};
    color: ${({ isTextFieldEmpty, theme }) =>
      isTextFieldEmpty && theme.colors.darkness[300]};
  }
`;

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.blue[400]};
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
    color: ${({ theme }) => theme.colors.neutral[550]};
    font-size: ${({ theme }) => theme.typeScale.subtitle};
    margin-left: 10px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }
`;

export const StyledCommentText = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  border-radius: 3px;
  box-shadow: ${({ theme }) =>
    `0 1px 2px -1px ${theme.colors.boxShadow[200]}, 0 0 0 1px ${theme.colors.boxShadow[100]}`};
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
  color: ${({ theme }) => theme.colors.neutral[500]};
  & svg {
    height: 16px;
    width: 16px;
    color: ${({ theme }) => theme.colors.neutral[500]};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }
  & > div {
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    margin: 2.4px 0 0 3px;
    & button {
      border: none;
      background-color: inherit;
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.neutral[500]};
      cursor: pointer;
      padding: 0 3px;
      &:hover {
        color: ${({ theme }) => theme.colors.blue[400]};
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
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      color: ${({ theme }) => theme.colors.neutral[500]};
      margin: 8px 0 0 30px;
    }
  }
`;
