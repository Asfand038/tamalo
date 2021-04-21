import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  padding: 8px 0;
`;

export const StyledCommentEditor = styled.div`
  flex: 1;
  border: none;
  transition: none;
  background-color: white;
  border-radius: 3px;
  margin: 0;
  margin-left: 14px;
  box-shadow: ${({ theme }) =>
    `0 4px 8px -2px ${theme.colors.boxShadow}, 0 0 0 1px rgb(9 30 66 / 8%)`};
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledComment = styled.div`
  display: flex;
  flex-direction: column;
  color: #172b4d;
  flex: 1;
  margin-left: 14px;

  & > div:first-child {
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
      }
    }
  }
  & > div:last-child {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px -1px rgb(9 30 66 / 25%), 0 0 0 1px rgb(9 30 66 / 8%);
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    padding: 8px 12px;
    width: fit-content;
  }
`;
