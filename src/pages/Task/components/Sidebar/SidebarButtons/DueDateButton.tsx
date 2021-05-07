import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { WatchLaterOutlined as WatchLaterOutlinedIcon } from '@material-ui/icons';

import { PopOver } from '../../../../../components';
import { StyledListButton } from '../Sidebar.styles';

const DueDateButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedDueDate, setSelectedDueDate] = useState<any>(new Date());

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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            value={selectedDueDate}
            onChange={(date) => setSelectedDueDate(date)}
          />
        </MuiPickersUtilsProvider>
      </PopOver>
    </>
  );
};

export default DueDateButton;
