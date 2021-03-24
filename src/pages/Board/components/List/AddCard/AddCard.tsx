import React, { useState } from 'react';

import OpenedForm from './OpenedForm';
import ClosedForm from './ClosedForm';

const AddCard: React.FC = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  return (
    <>
      {!formIsOpen && <ClosedForm setFormIsOpen={setFormIsOpen} />}
      {formIsOpen && <OpenedForm setFormIsOpen={setFormIsOpen} />}
    </>
  );
};

export default AddCard;
