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
  color: #5e6c84;
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
    color: #172b4d;
    background-color: rgba(9, 30, 66, 0.04);
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
      background-color: rgba(9, 30, 66, 0.08);
      box-shadow: none;
      border: none;
      color: #091e42;
    }
    & svg {
      color: #42526e;
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
