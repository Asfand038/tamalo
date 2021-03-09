import React, { useState } from 'react';

// Components imported from material-ui
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

// Icons imported from material-ui
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import CloseIcon from '@material-ui/icons/Close';

import { StyledNavbar, SearchField, AppLogo } from './Navbar.styles';

const Navbar: React.FC = () => {
  /**
   * State for focus on SeachField so that it can be passed
   * to other components to change their styles.
   */
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <StyledNavbar disableGutters={true}>
      <div className="d-flex">
        <Button className="nav-btn" size="small" aria-label="open drawer">
          <MenuIcon />
        </Button>
        <Button className="nav-btn" aria-label="open drawer">
          <HomeIcon />
        </Button>
        <Button
          className="nav-btn"
          variant="contained"
          startIcon={<DeveloperBoardIcon />}
        >
          Boards
        </Button>
        <SearchField searchFocus={searchFocus}>
          <InputBase
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            className="search-input"
            placeholder={searchFocus ? 'Search...' : 'Jump to…'}
            inputProps={{ 'aria-label': 'search' }}
          />
          {!searchFocus && <SearchIcon className="search-icon" />}
          {searchFocus && (
            <CloseIcon className="search-icon" fontSize="small" />
          )}
        </SearchField>
      </div>
      <AppLogo>
        <Button
          className="logo-btn"
          variant="text"
          startIcon={<DeveloperBoardIcon fontSize="large" />}
        >
          <span className="logo-name">Tamalo</span>
        </Button>
      </AppLogo>
      <div className="d-flex">
        <Button className="nav-btn" color="inherit" aria-label="create">
          <AddIcon />
        </Button>
        <Button className="nav-btn" color="inherit" aria-label="information">
          <InfoOutlinedIcon />
        </Button>
        <Button className="nav-btn" color="inherit" aria-label="notifications">
          <NotificationsNoneOutlinedIcon />
        </Button>
        <Avatar className="user-logo">AJ</Avatar>
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
