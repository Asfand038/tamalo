import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FastAverageColor from 'fast-average-color';
import { MenuItem } from '@material-ui/core';
import {
  Close as CloseIcon,
  VideoLabel as VideoLabelIcon,
} from '@material-ui/icons';

import {
  StyledCloseIcon,
  StyledWrapper,
  StyledButton,
  StyledMenu,
} from './TaskCover.styles';

interface IProps {
  imgSrc: string;
}

const TaskCover: React.FC<IProps> = ({ imgSrc }) => {
  const [bgIsDark, setBgIsDark] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const coverRef = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    const coverContainer = coverRef.current;

    const fac = new FastAverageColor();
    fac
      .getColorAsync(`https://tamalo.herokuapp.com${imgSrc}`)
      .then((color) => {
        coverContainer!.style.backgroundColor = color.rgba;
        setBgIsDark(color.isDark);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [imgSrc]);

  return (
    <>
      <StyledCloseIcon isDark={bgIsDark}>
        <CloseIcon onClick={() => history.goBack()} />
      </StyledCloseIcon>
      <StyledWrapper imgSrc={imgSrc} ref={coverRef}>
        <StyledButton
          isDark={bgIsDark}
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
      </StyledWrapper>
    </>
  );
};

export default TaskCover;
