import React from 'react';
import { Close as CloseIcon } from '@material-ui/icons';

import {
  StyledButtonContainer,
  StyledButton,
  StyledCloseIcon,
} from './ButtonContainer.styles';

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
  btnText: string;
}

const ButtonContainer: React.FC<IProps> = ({
  children,
  setFormIsOpen,
  btnText,
}) => {
  return (
    <StyledButtonContainer>
      <StyledButton variant="contained" type="submit">
        {btnText}
      </StyledButton>
      <StyledCloseIcon>
        <CloseIcon onClick={() => setFormIsOpen(false)} />
      </StyledCloseIcon>
      {children}
    </StyledButtonContainer>
  );
};

export default ButtonContainer;
