import styled from 'styled-components';
import {
  Grid,
  IconButton,
  TextField,
  Button,
  Backdrop,
} from '@material-ui/core';

export const StyledBackdrop = styled(Backdrop)`
  && {
    background-color: ${({ theme }) => theme.colors.darkness[700]};
  }
`;

interface IModalContent {
  empty: number;
  bgcolor: string | null;
  bgimage: string | null;
}

export const StyledModalContent = styled(Grid)<IModalContent>`
  && {
    width: 404px;
    margin: 44px auto;
    &:focus {
      outline: none;
    }
    & > div:first-child {
      position: relative;
      background-size: cover;
      background-position: 50%;
      border-radius: 3px;
      box-sizing: border-box;
      color: ${({ theme }) => theme.colors.neutral[100]};
      height: 96px;
      padding: 10px;
      background-image: ${({ bgimage }) =>
        bgimage ? `url(${bgimage})` : 'none'};
      background-color: ${({ bgcolor, theme }) =>
        bgcolor || theme.colors.darkness[400]};
      &::before {
        position: absolute;
        bottom: 0;
        content: '';
        display: block;
        left: 0;
        right: 0;
        top: 0;
        background-color: ${({ theme }) => theme.colors.darkness[300]};
        border-radius: 3px;
      }
    }
    & > div:last-child {
      cursor: ${({ empty }) => empty && 'not-allowed'};
    }
  }
`;

export const StyledCloseIcon = styled(IconButton)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    position: absolute;
    right: 8px;
    top: 8px;
    padding: 0;
    &:hover {
      background-color: unset;
    }
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    width: calc(100% - 44px);
    & > div {
      background-color: transparent;
      &::before,
      &::after {
        border-bottom: none;
      }
      & input {
        font-size: ${({ theme }) => theme.typeScale.header4};
        font-weight: 700;
        padding: 6px 8px;
        border-radius: 3px;
        color: ${({ theme }) => theme.colors.neutral[100]};
        &::placeholder {
          color: ${({ theme }) => theme.colors.neutral[100]};
          opacity: 0.8 !important;
        }
        &:focus {
          background-color: ${({ theme }) => theme.colors.transparency[300]};
        }
        &:hover {
          background-color: ${({ theme }) => theme.colors.transparency[200]};
        }
      }
    }
  }
`;

export const StyledBgOptionsGrid = styled(Grid)`
  &&& {
    height: 96px;
    padding: 8px 25px 0 8px;
  }
`;

interface IGridItem {
  bgcolor?: string;
  imgsrc?: string;
}

export const StyledGridItem = styled(Grid)<IGridItem>`
  &&& {
    padding: 0 0 6px 8px;
    position: relative;
    & > div:first-child {
      background-color: ${({ bgcolor }) => bgcolor || 'inherit'};
      width: 28px;
      height: 28px;
      border-radius: 3px;
      background-position: 50%;
      background-size: cover;
      background-image: ${({ imgsrc }) => (imgsrc ? `url(${imgsrc})` : 'none')};
      cursor: pointer;
      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const StyledSelectedIcon = styled.div`
  position: absolute;
  top: 4px;
  left: 12px;
  & svg {
    font-size: ${({ theme }) => theme.typeScale.header3};
    color: ${({ theme }) => theme.colors.neutral[100]};
  }
`;

export const StyledButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    box-shadow: none;
    transition: none;
    background-color: ${({ theme }) => theme.colors.green[100]};
    text-transform: none;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    padding: 6px 12px;
    border-radius: 3px;
    margin-left: -8px;
    width: 96.3%;
    &:hover {
      background-color: ${({ theme }) => theme.colors.green[200]};
      box-shadow: none;
    }
    &:disabled {
      background-color: ${({ theme }) => theme.colors.neutral[200]};
      color: ${({ theme }) => theme.colors.darkness[300]};
    }
  }
`;
