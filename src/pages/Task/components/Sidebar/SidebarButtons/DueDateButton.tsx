import React, { useState } from 'react';
import { WatchLaterOutlined as WatchLaterOutlinedIcon } from '@material-ui/icons';

import { PopOver } from '../../../../../components';
import { StyledListButton } from '../Sidebar.styles';

const DueDateButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  return (
    <>
      <StyledListButton
        variant="contained"
        startIcon={<WatchLaterOutlinedIcon />}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        Due date
      </StyledListButton>
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
