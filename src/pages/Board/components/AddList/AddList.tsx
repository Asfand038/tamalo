import React, { useState } from 'react';
import { AddOutlined as AddOutlinedIcon } from '@material-ui/icons';

import AddListForm from './AddListForm';
import {
  StyledContainer,
  StyledOpenFormBtn,
  StyledCollapse,
} from './AddList.styles';

const AddList: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <StyledContainer>
      <StyledOpenFormBtn onClick={() => setFormIsOpen(true)}>
        <AddOutlinedIcon />
        <div>Add another list</div>
      </StyledOpenFormBtn>
      <StyledCollapse
        in={formIsOpen}
        timeout={{ enter: 200, exit: 200 }}
        unmountOnExit
      >
        <AddListForm setFormIsOpen={setFormIsOpen} />
      </StyledCollapse>
    </StyledContainer>
  );
};

export default React.memo(AddList);
