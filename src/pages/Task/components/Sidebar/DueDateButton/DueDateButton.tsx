import React, { useState } from 'react';
import { WatchLaterOutlined as WatchLaterOutlinedIcon } from '@material-ui/icons';

import { PopOver } from '../../../../../components';
import { StyledDueDateButton } from './DueDateButton.styles';

const DueDateButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <StyledDueDateButton
        variant="contained"
        startIcon={<WatchLaterOutlinedIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Due date
      </StyledDueDateButton>
      <PopOver
        headingText="Change due date"
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      >
        <div>hey there</div>
      </PopOver>
    </>
  );
};

export default DueDateButton;
