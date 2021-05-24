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
import { PopOver } from '../PopOver';
import { BoardSearch } from '../BoardSearch';
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

interface IProps {
  bgColor?: string;
}

const Navbar: React.FC<IProps> = ({ bgColor }) => {
  const { logout, user } = useAuth();
  const { profileImg, email, firstName, lastName } = user;
  const avatarFallbackName = getAvatarFallbackName(`${firstName} ${lastName}`);

  const [searchFocus, setSearchFocus] = useState(false);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [
    boardSearchAnchorEl,
    setBoardSearchAnchorEl,
  ] = useState<HTMLElement | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  return (
    <StyledNavbar disableGutters bgcolor={bgColor}>
      <div className="d-flex">
        <StyledNavBtn size="small">
          <AppsSharpIcon />
        </StyledNavBtn>
        <StyledNavBtn onClick={() => history.push('/boards')}>
          <HomeOutlinedIcon />
        </StyledNavBtn>
        <StyledBoardBtn
          variant="contained"
          startIcon={<TableChartOutlinedIcon />}
          onClick={(e) => setBoardSearchAnchorEl(e.currentTarget)}
        >
          <span>Boards</span>
        </StyledBoardBtn>
        {boardSearchAnchorEl && (
          <BoardSearch
            anchorEl={boardSearchAnchorEl}
            setAnchorEl={setBoardSearchAnchorEl}
          />
        )}
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
          onClick={(e) => setAvatarAnchorEl(e.currentTarget)}
        >
          {avatarFallbackName}
        </StyledAvatar>
        <PopOver
          headingText="Account"
          anchorEl={avatarAnchorEl}
          setAnchorEl={setAvatarAnchorEl}
        >
          <StyledPopOverContent>
            <StyledUserInfo>
              <StyledAvatar src={profileImg} width="40px" height="40px">
                {avatarFallbackName}
              </StyledAvatar>
              <div>
                <div>{`${firstName} ${lastName}`}</div>
                <div>{email}</div>
              </div>
            </StyledUserInfo>
            <Divider />
            <StyledPopOverButton
              onClick={() => {
                history.push('/accounts');
                setAvatarAnchorEl(null);
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
