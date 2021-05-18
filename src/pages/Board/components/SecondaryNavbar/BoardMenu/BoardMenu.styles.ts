import styled from 'styled-components';
import {
  Drawer,
  IconButton,
  Button,
  TextField,
  Avatar,
} from '@material-ui/core';

export const StyledDrawer = styled(Drawer)`
  && {
    & > div {
      top: 40px;
      width: 339px;
      background-color: ${({ theme }) => theme.colors.neutral[200]};
    }
  }
`;

export const StyledMenuHeader = styled.div`
  position: relative;
  width: 100%;
  padding: 0 6px 0 12px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.blue[400]};
  & > span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    border-bottom: 1px solid rgba(9, 30, 66, 0.13);
    font-size: 16px;
    font-weight: 600;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    position: absolute;
    padding: 0;
    & svg {
      color: ${({ theme }) => theme.colors.blue[300]};
    }
    &:hover {
      background-color: inherit;
      & svg {
        color: ${({ theme }) => theme.colors.blue[500]};
      }
    }
  }
`;

export const StyledGoBackIconButton = styled(StyledIconButton)`
  && {
    top: 15px;
    left: 20px;
    & svg {
      font-size: 18px;
    }
  }
`;

export const StyledCloseIconButton = styled(StyledIconButton)`
  && {
    top: 15px;
    right: 10px;
    & svg {
      font-size: 20px;
    }
  }
`;

export const StyledMenuContent = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 12px 6px 12px 12px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.blue[400]};
`;

export const StyledMenuButton = styled(Button)`
  && {
    padding: 6px 12px;
    text-transform: none;
    color: ${({ theme }) => theme.colors.blue[400]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 600;
    & svg {
      color: ${({ theme }) => theme.colors.blue[300]};
    }
    & > span {
      justify-content: flex-start;
      align-items: flex-start;
    }
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[50]};
    }
  }
`;

export const StyledDescriptionBtn = styled.div`
  width: 100%;
  text-align: start;
  margin: -2px 0 0 10px;
  & > div:last-child {
    font-weight: 400;
    color: ${({ theme }) => theme.colors.neutral[550]};
  }
`;

export const StyledBoardBgColorIcon = styled.img<{ bgColor: string }>`
  height: 20px;
  width: 20px;
  margin: 0 8px 0 2px;
  border-radius: 3px;
  background-color: ${({ bgColor }) => bgColor};
`;

export const StyledSubMenuTitle = styled.div`
  position: relative;
  padding: 8px 0;
  margin: 0 0 4px 40px;
  font-size: 16px;
  font-weight: 600;
  & svg {
    position: absolute;
    top: 4px;
    left: -40px;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.blue[300]};
  }
`;

interface ITextField {
  editing: number;
}

export const StyledAddDescriptionContent = styled.div`
  margin: 10px 0 0 4px;
`;

export const StyledDescriptionTextField = styled(TextField)<ITextField>`
  && {
    width: 100%;
    & > div {
      padding: 0;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      font-size: ${({ theme }) => theme.typeScale.paragraph};
      background-color: ${({ theme }) => theme.colors.darkness[40]};
      color: ${({ theme }) => theme.colors.blue[400]};
      padding: 10px 12px 8px 12px;
      border-radius: 3px;
      box-shadow: none;
      transition: background-color 200ms ease, box-shadow 200ms ease;
      cursor: ${({ editing }) => (editing ? 'text' : 'pointer')};
      &:hover {
        background-color: ${({ theme }) => theme.colors.darkness[50]};
      }
      &:focus {
        background-color: ${({ theme }) => theme.colors.neutral[100]};
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      }
      &::placeholder {
        color: ${({ editing, theme }) =>
          editing ? 'inherit' : theme.colors.blue[400]};
        opacity: ${({ editing }) =>
          editing ? '0.7 !important' : '1 !important'};
      }
    }
  }
`;

export const StyledDescriptionButton = styled(Button)`
  && {
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    text-transform: none;
    color: ${({ theme }) => theme.colors.blue[400]};
    background-color: ${({ theme }) => theme.colors.darkness[40]};
    box-shadow: none;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    height: 32px;
    margin-left: auto;
    padding: 6px 12px;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    &:hover {
      background-color: ${({ theme }) => theme.colors.darkness[50]};
      box-shadow: none;
      border: none;
      color: ${({ theme }) => theme.colors.blue[500]};
    }
  }
`;

export const StyledChangeBgContent = styled.div<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  color: #172b4d;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(9, 30, 66, 0.13);
  & > div {
    cursor: pointer;
    padding: 0 4px;
    text-align: center;
    width: 50%;
  }
  & img {
    background-color: #dfe1e6;
    object-fit: cover;
    object-position: 10%;
    border-radius: 8px;
    height: 96px;
    margin-bottom: 8px;
    width: 100%;
    &:hover {
      opacity: 0.7;
    }
  }
`;

export const StyledUserInfo = styled.div`
  display: flex;
  margin: 8px 0 8px 4px;
  & > div:first-child {
    margin: 4px 8px 4px 0;
  }
  & > div:nth-of-type(2) {
    line-height: 20px;
    margin-left: 2px;
    & > div:first-child {
      margin-top: 6px;
      max-width: 230px;
      font-size: 16px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.blue[400]};
    }
    & > div:last-child {
      font-size: ${({ theme }) => theme.typeScale.subtitle};
      color: ${({ theme }) => theme.colors.neutral[380]};
      text-overflow: ellipsis;
      max-width: 230px;
    }
  }
`;

interface IAvatar {
  width: string;
  height: string;
}

export const StyledAvatar = styled(Avatar)<IAvatar>`
  && {
    height: ${({ height }) => height};
    width: ${({ width }) => width};
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.red[200]};
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledUserImage = styled.img`
  display: block;
  width: 128px;
  height: 128px;
  margin: 8px auto 20px auto;
`;

export const StyledSubMenuContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div,
  img {
    cursor: pointer;
    padding: 0 4px;
    width: 47%;
    border-radius: 8px;
    height: 96px;
    margin: 0 4px 8px;
    &:hover {
      opacity: 0.7;
    }
  }
  & > img {
    object-fit: cover;
    object-position: 50%;
  }
`;
