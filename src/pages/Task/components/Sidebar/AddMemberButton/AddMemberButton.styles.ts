import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { StyledListButton } from '../Sidebar.styles';

export const StyledAddMemberButton = styled(StyledListButton)``;

export const StyledPopOverContent = styled.div`
  padding: 0 12px 12px;
  & > div:first-child {
    color: ${({ theme }) => theme.colors.neutral[550]};
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 10px;
    letter-spacing: 0.5px;
    word-spacing: 2px;
  }
`;

export const StyledPopOverButton = styled(Button)`
  && {
    box-shadow: none;
    margin-bottom: 8px;
    padding: 4px;
    height: 40px;
    justify-content: flex-start;
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue[400]};
    & div {
      margin: 4px 8px 4px 0;
    }
    & > span {
      position: relative;
    }
    & svg {
      position: absolute;
      right: 11px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.blue[300]};
    }
  }
`;
