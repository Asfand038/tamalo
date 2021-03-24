import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Card, TextField, TextFieldProps } from '@material-ui/core';

import ButtonContainer from '../ButtonContainer';

const StyledContainer = styled.div`
  background-color: #ebecf0;
  border-radius: 3px;
  height: fit-content;
  margin: 14px 4px 0 8px;
  min-height: 32px;
  width: 272px;
  padding: 4px;
  flex-shrink: 0;
  z-index: 2000;
`;

const StyledCard = styled(Card)`
  && {
    box-shadow: none;
  }
`;

export const StyledListTitleInput = styled(TextField)<TextFieldProps>`
  && {
    width: 100%;
    & fieldset {
      border: none;
    }
    & input {
      background-color: ${({ theme }) => theme.colors.neutral[100]};
      color: #172b4d;
      box-shadow: inset 0 0 0 2px #0079bf;
      padding: 8px 12px;
      border-radius: 3px;
      transition: background-color 200ms ease-in-out,
        border-color 200ms ease-in-out;
      &::placeholder {
        opacity: 0.8 !important;
        color: #172b4d;
      }
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
        <StyledListTitleInput
          placeholder="Enter list title..."
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </StyledCard>
      <ButtonContainer setFormIsOpen={setFormIsOpen} btnText="Add list" />
    </StyledContainer>
  );
};

export default OpenedForm;
