import styled from 'styled-components';
import { Skeleton } from '@material-ui/lab';

interface IListContainer {
  isDragging: boolean;
  currentTransform: string;
  isCreated: boolean;
}

export const StyledListContainer = styled.div<IListContainer>`
  position: relative;
  pointer-events: ${({ isCreated }) => (isCreated ? 'auto' : 'none')};
  box-sizing: border-box;
  padding-right: 4px;
  margin: 14px 4px 0 8px;
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

export const StyledSkeleton = styled(Skeleton)`
  && {
    position: absolute;
    width: inherit;
    height: -webkit-fill-available;
  }
`;

export const StyledTaskList = styled.div`
  padding: 0 8px;
  flex-grow: 1;
  min-height: 2px;
  height: fit-content;
  overflow-y: auto;
  overflow-x: hidden;
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
