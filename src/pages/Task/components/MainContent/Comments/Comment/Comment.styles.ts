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
    `0 4px 8px -2px ${theme.colors.boxShadow}, 0 0 0 1px rgb(9 30 66 / 8%)`};
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 12px 8px;
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
  color: #6b778c;
  margin-top: 10px;
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
    & span:nth-child(even) {
      cursor: pointer;
      text-decoration: underline;
      margin: 0 2px;
      &:hover {
        color: #172b4d;
      }
    }
  }
`;