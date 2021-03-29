import React, { useState } from 'react';
import {
  AddOutlined as AddOutlinedIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
} from '@material-ui/icons';

import OpenedForm from './OpenedForm';
import {
  StyledClosedFormContainer,
  StyledOpenFormBtn,
  StyledCreateFromTemplateBtn,
} from './AddCard.styles';

const AddCard: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      {!formIsOpen && (
        <StyledClosedFormContainer>
          <StyledOpenFormBtn onClick={() => setFormIsOpen(true)}>
            <AddOutlinedIcon />
            <div>Add another card</div>
          </StyledOpenFormBtn>
          <StyledCreateFromTemplateBtn>
            <AssignmentOutlinedIcon />
          </StyledCreateFromTemplateBtn>
        </StyledClosedFormContainer>
      )}
      {formIsOpen && <OpenedForm setFormIsOpen={setFormIsOpen} />}
    </>
  );
};

export default AddCard;
