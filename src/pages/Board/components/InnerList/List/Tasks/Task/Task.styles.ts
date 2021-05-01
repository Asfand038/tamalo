import { Skeleton } from '@material-ui/lab';
import styled from 'styled-components';

interface ITaskContainer {
  isDragging: boolean;
  isCreated: boolean;
  currentTransform: string;
}

export const StyledTaskContainer = styled.div<ITaskContainer>`
  && {
    position: relative;
    cursor: pointer;
    pointer-events: ${({ isCreated }) => (isCreated ? 'auto' : 'none')};
    border-radius: 3px;
    margin-bottom: 8px;
    max-width: 300px;
    min-height: 22px;
    box-shadow: ${({ isDragging, theme }) =>
      isDragging
        ? `0 0 3px ${theme.colors.boxShadow[200]}`
        : `0 1px 0 ${theme.colors.boxShadow[200]}`};
    font-weight: 400;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.blue[400]};
    background-color: ${({ theme }) => theme.colors.neutral[100]};
    transform: ${({ isDragging, currentTransform }) =>
      isDragging ? `${currentTransform} rotate(3deg) !important` : null};
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
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

interface ITaskCover {
  imgSrc: string;
  bgColor: string;
  height: string;
}

export const StyledTaskCover = styled.div<ITaskCover>`
  width: 100%;
  height: ${({ height }) => `${height}px`};
  border-radius: 3px 3px 0 0;
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ imgSrc }) =>
    `url('https://tamalo.herokuapp.com${imgSrc}')`};
  background-size: contain;
  background-origin: content-box;
  box-sizing: border-box;
  background-position: center center;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTaskTitle = styled.div`
  word-break: break-word;
  padding: 8px 8px 6px;
`;

export const StyledEditBtn = styled.span`
  position: absolute;
  top: 4px;
  right: 4px;
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

export const StyledBadgesContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const StyledBadge = styled.div`
  color: ${({ theme }) => theme.colors.neutral[550]};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.typeScale.subtitle};
  padding-bottom: 8px;
  margin-right: 12px;
  & svg {
    color: ${({ theme }) => theme.colors.neutral[500]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
  }
  & div {
    margin-left: 4px;
  }
`;
