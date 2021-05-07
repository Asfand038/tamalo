import { Button, Divider } from '@material-ui/core';
import styled from 'styled-components';

export const StyledSidebar = styled.div`
  padding: 0 16px 8px 8px;
  width: 168px;
  overflow: hidden;

  && .small-icon {
    font-size: 14px;
    margin-left: 2px;
  }

  && .large-icon {
    font-size: 20px;
    margin-bottom: 3px;
  }
`;

export const StyledList = styled.div`
  margin-bottom: 24px;
`;

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.colors.neutral[550]};
  font-size: 12px;
  font-weight: 500;
  margin-top: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

export const StyledListButton = styled(Button)`
  && {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    text-transform: none;
    color: ${({ theme }) => theme.colors.blue[400]};
    background-color: ${({ theme }) => theme.colors.darkness[40]};
    box-shadow: none;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    height: 32px;
    margin-top: 8px;
    max-width: 300px;
    padding: 6px 12px;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    & > span {
      justify-content: flex-start;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[50]};
      box-shadow: none;
      border: none;
      color: ${({ theme }) => theme.colors.blue[500]};
    }
    & svg {
      color: ${({ theme }) => theme.colors.blue[300]};
      font-size: 16px;
    }
  }
`;

export const StyledButton = styled(StyledListButton)`
  && {
    background-color: inherit;
  }
`;

export const StyledDivider = styled(Divider)`
  && {
    margin-top: 8px;
  }
`;

export const StyledPopOverContent = styled.div`
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
