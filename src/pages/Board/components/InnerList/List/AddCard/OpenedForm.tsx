import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MoreHoriz as MoreHorizIcon } from '@material-ui/icons';

import { ButtonContainer } from '../../../ButtonContainer';
import {
  StyledBtnWrapper,
  StyledCard,
  StyledOpenedFormContainer,
  StyledOptionsIcon,
  StyledTextArea,
} from './AddCard.styles';

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
    <StyledOpenedFormContainer ref={formRef}>
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
      <StyledBtnWrapper>
        <ButtonContainer btnText="Add Card" setFormIsOpen={setFormIsOpen}>
          <StyledOptionsIcon>
            <MoreHorizIcon />
          </StyledOptionsIcon>
        </ButtonContainer>
      </StyledBtnWrapper>
    </StyledOpenedFormContainer>
  );
};

export default OpenedForm;
