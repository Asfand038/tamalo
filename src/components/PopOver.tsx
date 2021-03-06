import React from 'react';
import styled from 'styled-components';
import { Paper, Popover, IconButton } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';

export const StyledPopupContent = styled.div`
  border-radius: 3px;
  width: 304px;
  & > div:first-child {
    position: relative;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.colors.neutral[550]};
    & > span {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      border-bottom: ${({ theme }) =>
        `1px solid ${theme.colors.darkness[100]}`};
      margin: 0 12px;
    }
  }
`;

export const StyledCloseIconButton = styled(IconButton)`
  && {
    position: absolute;
    top: 11px;
    right: 8px;
    padding: 0;
    & svg {
      font-size: 17px;
      color: ${({ theme }) => theme.colors.neutral[500]};
    }
    &:hover {
      background-color: inherit;
      & svg {
        color: ${({ theme }) => theme.colors.blue[400]};
      }
    }
  }
`;

interface IProps {
  headingText: string;
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
}

export const PopOver: React.FC<IProps> = ({
  children,
  headingText,
  anchorEl,
  setAnchorEl,
}) => {
  return (
    <Paper>
      <Popover
        id={anchorEl ? 'popover' : undefined}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        elevation={2}
        style={{ inset: '6px 0 0 0' }}
      >
        <StyledPopupContent>
          <div>
            <span>{headingText}</span>
            <StyledCloseIconButton onClick={() => setAnchorEl(null)}>
              <CloseIcon />
            </StyledCloseIconButton>
          </div>
          {children}
        </StyledPopupContent>
      </Popover>
    </Paper>
  );
};
