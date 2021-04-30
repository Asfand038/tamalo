import React, { useState } from 'react';
import styled from 'styled-components';
import { Snackbar, Slide, Paper } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

const StyledAlert = styled(Alert)`
  && {
    box-sizing: border-box;
    border: none;
    width: 400px;
    border-radius: 3px;
    color: ${({ theme }) => theme.colors.blue[400]};
    padding: 16px;

    & > div:first-child {
      color: ${({ theme }) => theme.colors.red[100]};
      margin-right: 16px;
      & svg {
        width: 24px;
        height: 24px;
      }
    }
    & > div:nth-of-type(2) {
      font-weight: 600;
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      letter-spacing: 0.5px;
      flex: 1;
      padding: 10px 0 6px;
    }
    & > div:last-child {
      & svg {
        width: 16px;
        height: 16px;
      }
    }
  }
`;

interface IProps {
  message: string;
}

const ErrorAlert: React.FC<IProps> = ({ message }) => {
  const [open, setOpen] = useState(true);

  return (
    <Slide in={open} direction="right">
      <Snackbar open anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <Paper elevation={3}>
          <StyledAlert
            severity="error"
            onClose={() => setOpen(false)}
            variant="outlined"
          >
            {message}
          </StyledAlert>
        </Paper>
      </Snackbar>
    </Slide>
  );
};

export default ErrorAlert;
