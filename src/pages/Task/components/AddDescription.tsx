import React, { useState } from 'react';
import styled from 'styled-components';
import { SubjectRounded as SubjectRoundedIcon } from '@material-ui/icons';
import { Button, TextField } from '@material-ui/core';

import { ButtonContainer } from '../../../components';

const StyledTitleContainer = styled.div`
  position: relative;
  display: flex;
  min-height: 32px;
  padding: 8px 0;
  margin: 0 0 4px 40px;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #172b4d;
  font-weight: 600;
  margin-top: 6px;
`;

const StyledIcon = styled(SubjectRoundedIcon)`
  && {
    position: absolute;
    left: -42px;
    color: #42526e;
    height: 30px;
    line-height: 30px;
    width: 30px;
  }
`;

interface ITextField {
  isEditing: boolean;
}

const StyledTextField = styled(TextField)<ITextField>`
  && {
    width: 100%;
    & > div {
      padding: 0;
      margin-left: 40px;
    }
    & fieldset {
      border: none;
    }
    & textarea {
      font-size: 14px;
      background-color: rgba(9, 30, 66, 0.04);
      color: ${({ theme }) => theme.colors.blue[400]};
      padding: 10px 12px 8px 12px;
      border-radius: 3px;
      box-shadow: none;
      transition: background-color 200ms ease, box-shadow 200ms ease;
      cursor: ${({ isEditing }) => (isEditing ? 'text' : 'pointer')};
      &:hover {
        background-color: rgba(9, 30, 66, 0.08);
      }
      &:focus {
        background-color: ${({ theme }) => theme.colors.neutral[100]};
        box-shadow: ${({ theme }) =>
          `inset 0 0 0 2px ${theme.colors.blue[100]}`};
      }
      &::placeholder {
        color: ${({ isEditing }) => (isEditing ? 'inherit' : '#172b4d')};
        opacity: ${({ isEditing }) =>
          isEditing ? '0.8 !important' : '1 !important'};
      }
    }
  }
`;

const StyledBtnWrapper = styled.div`
  margin-left: 40px;
`;

const StyledButton = styled(Button)`
  && {
    font-size: 14px;
    font-weight: 400;
    text-transform: none;
    color: #172b4d;
    background-color: rgba(9, 30, 66, 0.04);
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
      background-color: rgba(9, 30, 66, 0.08);
      box-shadow: none;
      border: none;
      color: #091e42;
    }
  }
`;

const AddDescription: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <StyledTitleContainer>
        <StyledIcon />
        <StyledTitle>Description</StyledTitle>
      </StyledTitleContainer>
      <StyledTextField
        isEditing={isEditing}
        variant="outlined"
        multiline
        rows={isEditing ? '4' : '2'}
        rowsMax={100}
        placeholder="Add a more detailed description..."
        onFocus={() => setIsEditing(true)}
        onBlur={() => setIsEditing(false)}
      />
      {isEditing && (
        <StyledBtnWrapper>
          <ButtonContainer btnText="Save" setFormIsOpen={setIsEditing}>
            <StyledButton variant="contained">Formatting help</StyledButton>
          </ButtonContainer>
        </StyledBtnWrapper>
      )}
    </>
  );
};

export default AddDescription;
