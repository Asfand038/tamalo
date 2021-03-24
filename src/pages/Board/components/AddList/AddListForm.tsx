import React, { useState, useRef, useEffect, useCallback } from 'react';

import { ButtonContainer } from '../ButtonContainer';
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

  const formRef = useRef<HTMLDivElement>(null);

  // Function for closing form if clicked away.

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
    <StyledAddListContainer ref={formRef}>
      <StyledCard>
        <StyledListTitleInput
          placeholder="Enter list title..."
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </StyledCard>
      <ButtonContainer setFormIsOpen={setFormIsOpen} btnText="Add list" />
    </StyledAddListContainer>
  );
};

export default AddListForm;
