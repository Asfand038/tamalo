import React, { useState, useRef } from 'react';
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

import UserAvatar from '../Avatar';
import {
  StyledNavbar,
  StyledSearchField,
  AppLogo,
  StyledNavBtn,
  StyledBoardBtn,
} from './Navbar.styles';

interface IProps {
  profileImg: string;
  avatarFallbackName: string;
}

const Navbar: React.FC<IProps> = ({ profileImg, avatarFallbackName }) => {
  // State for focus on SeachField so that it can be passed
  // to other components to change their styles.
  const [searchFocus, setSearchFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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
        <UserAvatar
          profileImg={profileImg}
          avatarFallbackName={avatarFallbackName}
          width="32px"
          height="32px"
          onClick={() => console.log('hi')}
        />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;
