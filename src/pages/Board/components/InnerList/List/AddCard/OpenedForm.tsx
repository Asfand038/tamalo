import React, { useState } from 'react';
import { Card, ClickAwayListener } from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

import { ButtonContainer } from '../../../../../../components';
import {
  StyledOpenedFormContainer,
  StyledOptionsIcon,
  StyledTextArea,
} from './AddCard.styles';

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

const OpenedForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  const [cardTitle, setCardTitle] = useState('');

  return (
    <ClickAwayListener onClickAway={() => setFormIsOpen(false)}>
      <StyledOpenedFormContainer>
        <Card>
          <StyledTextArea
            placeholder="Enter a title for this card..."
            variant="outlined"
            value={cardTitle}
            multiline
            autoFocus
            rowsMax="8"
            onChange={(e) => setCardTitle(e.target.value)}
          />
        </Card>
        <ButtonContainer btnText="Add Card" setFormIsOpen={setFormIsOpen}>
          <StyledOptionsIcon>
            <MoreHorizIcon />
          </StyledOptionsIcon>
        </ButtonContainer>
      </StyledOpenedFormContainer>
    </ClickAwayListener>
  );
};

export default OpenedForm;
