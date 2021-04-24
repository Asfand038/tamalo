import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MenuItem } from '@material-ui/core';
import {
  Close as CloseIcon,
  VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

import {
  StyledCloseIcon,
  StyledCoverWrapper,
  StyledButton,
  StyledMenu,
} from './TaskCover.styles';

interface IProps {
  imgSrc: string;
  coverBg: {
    color: string;
    isDark: boolean;
  };
}

const TaskCover: React.FC<IProps> = ({ imgSrc, coverBg }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const history = useHistory();

  return (
    <>
      <StyledCloseIcon dark={+coverBg.isDark}>
        <CloseIcon onClick={() => history.goBack()} />
      </StyledCloseIcon>
      <StyledCoverWrapper imgSrc={imgSrc} bgColor={coverBg.color}>
        <StyledButton
          dark={+coverBg.isDark}
          variant="contained"
          aria-controls="cover-menu"
          startIcon={<VideoLabelIcon />}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Cover
        </StyledButton>
        <StyledMenu
          id="cover-menu"
          anchorEl={anchorEl}
          getContentAnchorEl={null}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <MenuItem>Change Cover</MenuItem>
          <MenuItem>Remove Cover</MenuItem>
        </StyledMenu>
      </StyledCoverWrapper>
    </>
  );
};

export default TaskCover;
