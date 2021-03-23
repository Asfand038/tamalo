import React, { useState } from 'react';

import OpenedForm from './OpenedForm';
import ClosedForm from './ClosedForm';

const AddList: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return formIsOpen ? (
    <OpenedForm setFormIsOpen={setFormIsOpen} />
  ) : (
    <ClosedForm setFormIsOpen={setFormIsOpen} />
  );
};

export default AddList;
