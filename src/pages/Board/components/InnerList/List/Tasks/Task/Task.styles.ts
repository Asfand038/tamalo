import { Skeleton } from '@material-ui/lab';
import styled from 'styled-components';

interface ITaskContainer {
  isDragging: boolean;
  isCreated: boolean;
  currentTransform: string;
}

export const StyledTaskContainer = styled.div<ITaskContainer>`
  position: relative;
  pointer-events: ${({ isCreated }) => (isCreated ? 'auto' : 'none')};
  display: flex;
  justify-content: space-between;
  border-radius: 3px;
  padding: 6px 8px 2px;
  margin-bottom: 8px;
  max-width: 300px;
  min-height: 22px;
  box-shadow: ${({ isDragging, theme }) =>
    isDragging
      ? `0 0 3px ${theme.colors.boxShadow}`
      : `0 1px 0 ${theme.colors.boxShadow}`};
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.blue[400]};
  background-color: ${({ theme }) => theme.colors.neutral[100]};
  transform: ${({ isDragging, currentTransform }) =>
    isDragging ? `${currentTransform} rotate(3deg) !important` : null};
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

export const StyledSkeleton = styled(Skeleton)`
  && {
    position: absolute;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    left: 0;
    top: 0;
    border-radius: 3px;
  }
`;

export const StyledContent = styled.span`
  width: 100%;
  word-break: break-word;
`;

export const StyledEditBtn = styled.span`
  position: absolute;
  top: 2px;
  right: 2px;
  height: 26px;
  width: 26px;
  border-radius: 3px;
  display: none;
  opacity: 0.8;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  ${StyledTaskContainer}:hover & {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & svg {
    color: ${({ theme }) => theme.colors.blue[300]};
    height: 16px;
    width: 16px;
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[250]};
    opacity: 1;
  }
`;
