import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Card, TextField, TextFieldProps } from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

import ButtonContainer from '../../ButtonContainer';

const StyledContainer = styled.div`
  margin-bottom: 8px;
`;

const StyledCard = styled(Card)`
  margin: 0 8px;
`;

const StyledTextArea = styled(TextField)<TextFieldProps>`
  && {
    background-color: ${({ theme }) => theme.colors.neutral[100]};
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
      color: ${({ theme }) => theme.colors.blue[400]};
      &::placeholder {
        color: ${({ theme }) => theme.colors.blue[400]} !important;
        opacity: 0.8 !important;
      }
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
    color: ${({ theme }) => theme.colors.neutral[500]};
    width: 25px;
    height: 25px;
    margin: auto;
  }
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.darkness[100]};
    & svg {
      color: ${({ theme }) => theme.colors.blue[400]};
    }
  }
`;

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

const OpenedForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  const [cardTitle, setCardTitle] = useState('');

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
          value={cardTitle}
          multiline
          autoFocus
          rowsMax="8"
          onChange={(e) => setCardTitle(e.target.value)}
        />
      </StyledCard>
      <ButtonContainer btnText="Add Card" setFormIsOpen={setFormIsOpen}>
        <StyledOptionsIcon>
          <MoreHorizIcon />
        </StyledOptionsIcon>
      </ButtonContainer>
    </StyledContainer>
  );
};

export default OpenedForm;
