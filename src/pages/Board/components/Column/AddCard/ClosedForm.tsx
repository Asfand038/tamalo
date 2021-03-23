import React from 'react';
import styled from 'styled-components';
import {
  AddOutlined as AddOutlinedIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
} from '@material-ui/icons';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
  height: 38px;
  color: inherit;
  background-color: inherit;
  & svg {
    color: #6b778c;
  }
`;

const StyledOpenFormBtn = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  color: #5e6c84;
  flex-grow: 1;
  margin: 2px 0 8px 8px;
  padding: 4px 8px 4px 4px;
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    color: #172b4d;
  }
  & svg {
    color: #6b778c;
  }
  & > div {
    margin: 2px 0 0 2px;
  }
`;

const StyledCreateFromTemplateBtn = styled.div`
  cursor: pointer;
  margin: 0 8px 6px 0;
  border-radius: 3px;
  display: flex;
  width: 28px;
  height: 28px;
  & svg {
    color: #6b778c;
    padding: 4px;
    height: 16px;
    width: 16px;
    margin: auto;
  }
  &:hover {
    background-color: rgba(9, 30, 66, 0.08);
    svg {
      color: #172b4d;
    }
  }
`;

interface IProps {
  setFormIsOpen: (bool: boolean) => void;
}

const ClosedForm: React.FC<IProps> = ({ setFormIsOpen }) => {
  return (
    <StyledContainer>
      <StyledOpenFormBtn onClick={() => setFormIsOpen(true)}>
        <AddOutlinedIcon />
        <div>Add another card</div>
      </StyledOpenFormBtn>
      <StyledCreateFromTemplateBtn>
        <AssignmentOutlinedIcon />
      </StyledCreateFromTemplateBtn>
    </StyledContainer>
  );
};

export default ClosedForm;
