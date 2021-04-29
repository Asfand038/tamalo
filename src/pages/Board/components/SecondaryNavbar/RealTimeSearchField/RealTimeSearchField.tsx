import React, { useState } from 'react';

import { StyledWrapper, StyledButton } from './RealTimeSearchField.styles';
// Make a generic input component later because it is used everywhere
import { StyledInputField } from '../../../../Accounts/Accounts.styles';

const RealTimeSearchField = () => {
  const [username, setUsername] = useState('');

  return (
    <StyledWrapper>
      <StyledInputField
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        variant="outlined"
        placeholder="Email address or name"
        fullWidth
        required
        autoFocus
      />
      <StyledButton variant="contained">Send invitation</StyledButton>
    </StyledWrapper>
  );
};

export default RealTimeSearchField;
