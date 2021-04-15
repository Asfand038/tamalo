import styled from 'styled-components';

export const StyledBoardContainer = styled.div`
  display: flex;
  height: 86.5vh;
  overflow-y: hidden;
  overflow-x: auto;
  margin: 0 8px;
  &::-webkit-scrollbar-track {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.darkness[200]};
  }
  &::-webkit-scrollbar {
    height: 11px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${({ theme }) => theme.colors.transparency[500]};
  }
`;
