import React, { useState } from 'react';
import styled from 'styled-components';
import { Collapse } from '@material-ui/core';

import OpenedForm from './OpenedForm';
import ClosedForm from './ClosedForm';

const StyledCollapse = styled(Collapse)`
  && {
    margin-top: -54px;
  }
`;

const AddList: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);
  return (
    <div>
      <ClosedForm setFormIsOpen={setFormIsOpen} />
      <StyledCollapse in={formIsOpen} timeout={{ enter: 200, exit: 150 }}>
        <OpenedForm setFormIsOpen={setFormIsOpen} />
      </StyledCollapse>
    </div>
  );
};

export default AddList;
