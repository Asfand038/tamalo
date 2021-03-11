import React, { useState } from 'react';

import { InputBase } from '@material-ui/core';
import {
  Home as HomeIcon,
  Menu as MenuIcon,
  DeveloperBoard as DeveloperBoardIcon,
  Search as SearchIcon,
  Add as AddIcon,
  InfoOutlined as InfoOutlinedIcon,
  NotificationsNoneOutlined as NotificationsNoneOutlinedIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

import {
  StyledNavbar,
  StyledSearchField,
  AppLogo,
  StyledNavBtn,
  StyledAvatar,
} from './Navbar.styles';

const Navbar: React.FC = () => {
  // State for focus on SeachField so that it can be passed
  // to other components to change their styles.

  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <StyledNavbar disableGutters={true}>
      <div className="d-flex">
        <StyledNavBtn size="small" aria-label="open drawer">
          <MenuIcon />
        </StyledNavBtn>
        <StyledNavBtn aria-label="open drawer">
          <HomeIcon />
        </StyledNavBtn>
        <StyledNavBtn variant="contained" startIcon={<DeveloperBoardIcon />}>
          Boards
        </StyledNavBtn>
        <StyledSearchField searchFocus={searchFocus}>
          <InputBase
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            placeholder={searchFocus ? 'Search...' : 'Jump to…'}
            inputProps={{ 'aria-label': 'search' }}
          />
          {!searchFocus && <SearchIcon />}
          {searchFocus && <CloseIcon fontSize="small" />}
        </StyledSearchField>
      </div>
      <AppLogo
        variant="text"
        startIcon={<DeveloperBoardIcon fontSize="large" />}
      >
        Tamalo
      </AppLogo>
      <div className="d-flex">
        <StyledNavBtn color="inherit" aria-label="create">
          <AddIcon />
        </StyledNavBtn>
        <StyledNavBtn color="inherit" aria-label="information">
          <InfoOutlinedIcon />
        </StyledNavBtn>
        <StyledNavBtn color="inherit" aria-label="notifications">
          <NotificationsNoneOutlinedIcon />
        </StyledNavBtn>
        <StyledAvatar>AJ</StyledAvatar>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
