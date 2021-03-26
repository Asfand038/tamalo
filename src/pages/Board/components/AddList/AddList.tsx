import React, { useState } from 'react';
import { AddOutlined as AddOutlinedIcon } from '@material-ui/icons';

import AddListForm from './AddListForm';
import { StyledCollapse, StyledOpenFormBtn } from './AddList.styles';

const AddList: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <div>
      <StyledOpenFormBtn onClick={() => setFormIsOpen(true)}>
        <AddOutlinedIcon />
        <div>Add another list</div>
      </StyledOpenFormBtn>
      <StyledCollapse in={formIsOpen} timeout={{ enter: 200, exit: 150 }}>
        <AddListForm setFormIsOpen={setFormIsOpen} />
      </StyledCollapse>
    </div>
  );
};

export default React.memo(AddList);
