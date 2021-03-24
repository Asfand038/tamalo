import React from 'react';
import {
  AddOutlined as AddOutlinedIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
} from '@material-ui/icons';

import {
  StyledClosedFormContainer,
  StyledOpenFormBtn,
  StyledCreateFromTemplateBtn,
} from './AddCard.styles';

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

const ClosedForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  return (
    <StyledClosedFormContainer>
      <StyledOpenFormBtn onClick={() => setFormIsOpen(true)}>
        <AddOutlinedIcon />
        <div>Add another card</div>
      </StyledOpenFormBtn>
      <StyledCreateFromTemplateBtn>
        <AssignmentOutlinedIcon />
      </StyledCreateFromTemplateBtn>
    </StyledClosedFormContainer>
  );
};

export default ClosedForm;
