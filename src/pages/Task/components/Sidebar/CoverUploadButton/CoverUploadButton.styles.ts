import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { StyledListButton } from '../Sidebar.styles';

export const StyledCoverButton = styled(StyledListButton)``;

export const StyledCoverPopOverContent = styled.div`
  padding: 0 12px 12px;
  & > div:first-child {
    color: ${({ theme }) => theme.colors.neutral[550]};
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
    letter-spacing: 1px;
  }
`;

export const StyledPopOverButton = styled(Button)`
  && {
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    background-color: rgba(9, 30, 66, 0.04);
    color: ${({ theme }) => theme.colors.blue[400]};
    text-transform: none;
    margin: 8px 4px 0 0;
    box-shadow: none;
    &:hover {
      box-shadow: none;
      background-color: rgba(9, 30, 66, 0.08);
    }
  }
`;

export const StyledLoaderWrapper = styled.div`
  && {
    position: relative;
    width: 100%;
    height: 40px;
    & > div:first-child {
      font-size: 4px;
      &::before {
        left: -6px;
      }
      &::after {
        left: 6px;
      }
    }
  }
`;
