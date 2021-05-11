import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: -4px;
`;

export const StyledBoardContainer = styled.div`
  display: flex;
  height: 86.5vh;
  overflow-y: hidden;
  overflow-x: auto;
  transition: margin 0.1s ease-in;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.24) 0,
    rgba(0, 0, 0, 0.24) 48px,
    transparent 80px,
    transparent
  );
  &::-webkit-scrollbar-track {
    margin-left: 8px;
    margin-right: 8px;
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
