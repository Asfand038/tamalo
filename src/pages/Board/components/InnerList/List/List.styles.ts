import styled from 'styled-components';

interface IListContainer {
  isDragging: boolean;
  currentTransform: string;
}

export const StyledListContainer = styled.div<IListContainer>`
  box-sizing: border-box;
  padding-right: 4px;
  margin: 14px 8px 0 0;
  background-color: ${({ theme }) => theme.colors.neutral[250]};
  border-radius: 3px;
  width: 272px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  max-height: 524px;
  flex-shrink: 0;
  transform: ${({ isDragging, currentTransform }) =>
    isDragging ? `${currentTransform} rotate(3deg) !important` : null};
`;

export const StyledTaskList = styled.div`
  padding: 0 8px;
  flex-grow: 1;
  min-height: 2px;
  height: fit-content;
  overflow-y: auto;
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.darkness[100]};
  }
  &::-webkit-scrollbar {
    width: 8px;
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.darkness[100]};
  }
`;
