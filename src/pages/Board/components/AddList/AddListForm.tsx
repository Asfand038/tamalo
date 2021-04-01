import React, { useState } from 'react';
import { ClickAwayListener } from '@material-ui/core';

import { ButtonContainer } from '../../../../components';
import {
  StyledCard,
  StyledAddListContainer,
  StyledListTitleInput,
} from './AddList.styles';

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

const AddListForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  const [title, setTitle] = useState('');

  return (
    <ClickAwayListener onClickAway={() => setFormIsOpen(false)}>
      <StyledAddListContainer>
        <StyledCard>
          <StyledListTitleInput
            placeholder="Enter list title..."
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </StyledCard>
        <ButtonContainer setFormIsOpen={setFormIsOpen} btnText="Add list" />
      </StyledAddListContainer>
    </ClickAwayListener>
  );
};

export default AddListForm;
