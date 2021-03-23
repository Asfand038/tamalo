import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import { Card, TextField, Button } from '@material-ui/core';
import {
  Close as CloseIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';

const StyledContainer = styled.div`
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  margin: 0 8px;
`;

const StyledTextArea = styled(TextField)`
  && {
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgb(9 30 66 / 25%);
    width: 100%;
    min-height: 20px;
    position: relative;
    text-decoration: none;
    z-index: 0;
    border: none;
    & > div {
      padding: 8px 8px 28px;
      min-height: 54px;
      display: block;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      color: #172b4d;
      &::placeholder {
        color: #172b4d !important;
        opacity: 0.8 !important;
      }
    }
  }
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const StyledButton = styled(Button)`
  && {
    color: ${({ theme }) => theme.colors.neutral[100]};
    background-color: ${({ theme }) => theme.colors.green[100]};
    font-weight: bold;
    box-shadow: none;
    transition: background-color 85ms ease;
    text-transform: none;
    padding: 4px 14px;
    font-size: ${({ theme }) => theme.typeScale.paragraph};
    font-weight: 400;
    &:hover {
      box-shadow: none;
      background-color: ${({ theme }) => theme.colors.green[200]};
    }
  }
`;

const StyledCloseIcon = styled.div`
  margin: 2px 0 0 5px;
  & svg {
    color: #6b778c;
    width: 25px;
    height: 25px;
  }
  &:hover {
    cursor: pointer;
    & svg {
      color: #172b4d;
    }
  }
`;

const StyledOptionsIcon = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  border-radius: 3px;
  margin: 0 8px 0 auto;
  & svg {
    color: #6b778c;
    width: 25px;
    height: 25px;
    margin: auto;
  }
  &:hover {
    cursor: pointer;
    background-color: rgba(9, 30, 66, 0.08);
    & svg {
      color: #172b4d;
    }
  }
`;

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

const OpenedForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  const [title, setTitle] = useState('');

  const formRef = useRef<HTMLDivElement>(null);

  const closeForm = useCallback(
    (e: MouseEvent) => {
      const { current } = formRef;
      if (current && !current.contains(e.target as HTMLElement)) {
        setFormIsOpen(false);
      }
    },
    [setFormIsOpen]
  );

  useEffect(() => {
    document.addEventListener('mousedown', closeForm);
    return () => {
      document.removeEventListener('mousedown', closeForm);
    };
  }, [closeForm]);

  return (
    <StyledContainer ref={formRef}>
      <StyledCard>
        <StyledTextArea
          placeholder="Enter a title for this card..."
          variant="outlined"
          value={title}
          multiline
          autoFocus
          rowsMax="8"
          onChange={(e) => setTitle(e.target.value)}
        />
      </StyledCard>
      <ButtonContainer>
        <StyledButton variant="contained">Add card</StyledButton>
        <StyledCloseIcon>
          <CloseIcon onClick={() => setFormIsOpen(false)} />
        </StyledCloseIcon>
        <StyledOptionsIcon>
          <MoreHorizIcon />
        </StyledOptionsIcon>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default OpenedForm;
