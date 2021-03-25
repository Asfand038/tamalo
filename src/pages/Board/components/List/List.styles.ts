import styled from 'styled-components';

interface IContainer {
  isDragging: boolean;
}

export const Container = styled.div<IContainer>`
  box-sizing: border-box;
  padding-right: 4px;
  margin: 14px 8px 0 0;
  /* background-color: ${({ theme }) => theme.colors.neutral[250]}; */
  border-radius: 3px;
  width: 272px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  flex-shrink: 0;
`;

export const StyledTaskList = styled.div`
  padding: 0 8px;
  flex-grow: 1;
  min-height: 2px;
  max-height: 442px;
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

export const StyledTiltWrapper = styled.div<IContainer>`
  background-color: ${({ theme }) => theme.colors.neutral[250]};
  border-radius: 3px;
  transform: ${({ isDragging }) =>
    isDragging ? 'rotate(3deg)' : 'rotate(0deg)'};
`;
