import styled from 'styled-components';

export const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  height: 32px;
  margin-bottom: 8px;
  & svg {
    width: 26px;
    height: 26px;
    margin-left: 7px;
    color: ${({ theme }) => theme.colors.blue[400]};
  }
  & span {
    margin: 4px 0 0 16px;
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.blue[400]};
  }
`;

export const StyledBoardsCategory = styled.div`
  margin-bottom: 20px;
`;
