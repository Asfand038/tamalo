import React from 'react';
import styled from 'styled-components';
import { AddOutlined as AddOutlinedIcon } from '@material-ui/icons';

const StyledOpenFormBtn = styled.div`
  display: flex;
  align-items: center;
  background-color: hsla(0, 0%, 100%, 0.24);
  cursor: pointer;
  border-radius: 3px;
  height: fit-content;
  min-height: 32px;
  padding: 4px;
  margin: 14px 4px 0 8px;
  transition: background-color 85ms ease-in, opacity 40ms ease-in,
    border-color 85ms ease-in;
  color: #fff;
  width: 272px;
  flex-shrink: 0;
  &:hover {
    background-color: hsla(0, 0%, 100%, 0.32);
  }
  & svg {
    color: #fff;
  }
  & > div {
    margin: 2px 0 0 2px;
  }
`;

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

const ClosedForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  return (
    <StyledOpenFormBtn onClick={() => setFormIsOpen(true)}>
      <AddOutlinedIcon />
      <div>Add another list</div>
    </StyledOpenFormBtn>
  );
};

export default ClosedForm;
