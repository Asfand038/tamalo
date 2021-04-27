import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Divider, InputBase } from '@material-ui/core';
import {
  HomeOutlined as HomeOutlinedIcon,
  AppsSharp as AppsSharpIcon,
  DeveloperBoard as DeveloperBoardIcon,
  Search as SearchIcon,
  Add as AddIcon,
  InfoOutlined as InfoOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  Close as CloseIcon,
  TableChartOutlined as TableChartOutlinedIcon,
} from '@material-ui/icons';

import { useAuth } from '../../contexts';
import { getAvatarFallbackName } from '../../utils';
import PopOver from '../PopOver';
import {
  StyledNavbar,
  StyledSearchField,
  AppLogo,
  StyledNavBtn,
  StyledBoardBtn,
  StyledAvatar,
  StyledPopOverContent,
  StyledUserInfo,
  StyledPopOverButton,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  const { logout, user } = useAuth();
  const { username, profileImg, email } = user;
  const avatarFallbackName = getAvatarFallbackName(username);

  const [searchFocus, setSearchFocus] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  return (
    <StyledNavbar disableGutters>
      <div className="d-flex">
        <StyledNavBtn size="small">
          <AppsSharpIcon />
        </StyledNavBtn>
        <StyledNavBtn>
          <HomeOutlinedIcon />
        </StyledNavBtn>
        <StyledBoardBtn
          variant="contained"
          startIcon={<TableChartOutlinedIcon />}
        >
          <span>Boards</span>
        </StyledBoardBtn>
        <StyledSearchField searchFocus={searchFocus}>
          <InputBase
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            placeholder={searchFocus ? 'Search...' : 'Jump to…'}
            inputProps={{ 'aria-label': 'search' }}
            inputRef={inputRef}
          />
          {!searchFocus && (
            <SearchIcon
              onClick={() => {
                setSearchFocus(true);
                inputRef?.current?.focus();
              }}
            />
          )}
          {searchFocus && <CloseIcon fontSize="small" />}
        </StyledSearchField>
      </div>
      <AppLogo
        variant="text"
        startIcon={<DeveloperBoardIcon fontSize="large" />}
      >
        <span>Tamalo</span>
      </AppLogo>
      <div className="d-flex">
        <StyledNavBtn color="inherit">
          <AddIcon />
        </StyledNavBtn>
        <StyledNavBtn color="inherit">
          <InfoOutlinedIcon />
        </StyledNavBtn>
        <StyledNavBtn color="inherit">
          <NotificationsNoneOutlinedIcon />
        </StyledNavBtn>
        <StyledAvatar
          src={profileImg}
          width="32px"
          height="32px"
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          {avatarFallbackName}
        </StyledAvatar>
        <PopOver
          headingText="Account"
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        >
          <StyledPopOverContent>
            <StyledUserInfo>
              <StyledAvatar src={profileImg} width="40px" height="40px">
                {avatarFallbackName}
              </StyledAvatar>
              <div>
                <div>{username}</div>
                <div>{email}</div>
              </div>
            </StyledUserInfo>
            <Divider />
            <StyledPopOverButton
              onClick={() => {
                history.push('/accounts');
                setAnchorEl(null);
              }}
            >
              Settings
            </StyledPopOverButton>
            <StyledPopOverButton
              onClick={() => {
                logout();
                history.push('/login');
              }}
            >
              Log out
            </StyledPopOverButton>
          </StyledPopOverContent>
        </PopOver>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
