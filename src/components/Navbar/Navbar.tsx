import React, { useState } from 'react';

import { InputBase } from '@material-ui/core';
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

import {
  StyledNavbar,
  StyledSearchField,
  AppLogo,
  StyledNavBtn,
  StyledBoardBtn,
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
          <AppsSharpIcon />
        </StyledNavBtn>
        <StyledNavBtn aria-label="open drawer">
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
          />
          {!searchFocus && <SearchIcon onClick={() => setSearchFocus(true)} />}
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
