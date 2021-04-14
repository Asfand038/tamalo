import { Modal, Backdrop } from '@material-ui/core';
import styled from 'styled-components';

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

export const StyledCloseIcon = styled.span`
  color: ${({ theme }) => theme.colors.blue[300]};
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  height: 32px;
  padding: 4px;
  margin: 4px;
  width: 32px;
  z-index: 2;
  transition: background-color 85ms;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    cursor: pointer;
  }
  & svg {
    margin: 6px;
  }
`;

export const StyledBody = styled.div`
  display: flex;
  margin-top: 16px;
`;
