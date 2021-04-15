import styled from 'styled-components';
import { Modal, Backdrop } from '@material-ui/core';

export const StyledModal = styled(Modal)`
  && {
    overflow-y: auto;
  }
`;

export const StyledBackdrop = styled(Backdrop)`
  && {
    margin-right: 16px;
  }
`;

export const StyledTaskContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 2px;
  margin: 48px auto 80px;
  overflow: hidden;
  position: relative;
  width: 768px;
  &:focus {
    outline: none;
  }
  min-height: 900px;
`;
