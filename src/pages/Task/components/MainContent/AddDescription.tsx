import React, { useState } from 'react';
import { SubjectRounded as SubjectRoundedIcon } from '@material-ui/icons';

import { ButtonContainer } from '../../../../components';
import {
  StyledTitleContainer,
  StyledTitle,
  StyledIcon,
  StyledTextField,
  StyledBtnWrapper,
  StyledButton,
} from './MainContent.styles';

const AddDescription: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <StyledTitleContainer>
        <StyledIcon component={<SubjectRoundedIcon />} />
        <StyledTitle>Description</StyledTitle>
      </StyledTitleContainer>
      <StyledTextField
        InputProps={{ spellCheck: false }}
        editing={isEditing}
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
