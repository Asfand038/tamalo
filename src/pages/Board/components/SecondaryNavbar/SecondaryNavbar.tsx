import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

import {
  StarBorderRounded as StarBorderRoundedIcon,
  ExpandMore as ExpandMoreIcon,
  BarChart as BarChartIcon,
  PeopleOutlineSharp as PeopleOutlineSharpIcon,
  RoomService as RoomServiceIcon,
  MoreHoriz as MoreHorizIcon,
  Close as CloseIcon,
} from '@material-ui/icons';

import { getAvatarFallbackName } from '../../../../utils';
import { OwnerIcon } from '../../../../assets';
import { IUser } from '../../utils';
import { BoardTitle } from './BoardTitle';
import { PopOver } from '../../../../components';
import {
  StyledNavbar,
  StyledNavBtn,
  StyledBoardBtn,
  StyledBoardCategoryBtn,
  StyledIconOnLeftBtn,
  StyledAvatarGroup,
  StyledAvatar,
  StyledBadge,
  StyledDivider,
  StyledDrawer,
  StyledMenuPopupContent,
  StyledCloseIconButton,
} from './SecondaryNavbar.styles';

interface IParams {
  id: string;
}
interface IProps {
  boardTitle: string;
  members: IUser[];
  owners: IUser[];
}

const SecondaryNavbar: React.FC<IProps> = ({ boardTitle, members, owners }) => {
  const [inviteAnchorEl, setInviteAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { id } = useParams<IParams>();
  const boardContainer = document.getElementById(id)! as HTMLDivElement;

  const ownerDetails = owners.map(({ profileImg, username }) => {
    return {
      img: profileImg,
      owner: true,
      avatarFallbackText: getAvatarFallbackName(username),
    };
  });
  const memberDetails = members.map(({ profileImg, username }) => {
    return {
      img: profileImg,
      owner: false,
      avatarFallbackText: getAvatarFallbackName(username),
    };
  });

  const avatarGroupData = [...ownerDetails, ...memberDetails];

  return (
    <StyledNavbar disableGutters>
      <div className="flex-container">
        <StyledBoardBtn
          variant="contained"
          startIcon={<BarChartIcon />}
          endIcon={<ExpandMoreIcon />}
        >
          Board
        </StyledBoardBtn>
        <BoardTitle title={boardTitle} />
        <StyledNavBtn>
          <StarBorderRoundedIcon />
        </StyledNavBtn>
        <StyledDivider orientation="vertical" flexItem />
        <StyledBoardCategoryBtn>
          <span>Individual</span>
          <span>Free</span>
        </StyledBoardCategoryBtn>
        <StyledDivider orientation="vertical" flexItem />
        <StyledIconOnLeftBtn
          variant="contained"
          startIcon={<PeopleOutlineSharpIcon />}
        >
          <span>Team visible</span>
        </StyledIconOnLeftBtn>
        <StyledDivider orientation="vertical" flexItem />
        <StyledAvatarGroup spacing={1}>
          {avatarGroupData.map(({ img, owner, avatarFallbackText }) => {
            if (owner) {
              return (
                <StyledBadge
                  key={uuidv4()}
                  badgeContent={<OwnerIcon />}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                  <StyledAvatar src={img}>{avatarFallbackText}</StyledAvatar>
                </StyledBadge>
              );
            }
            return <StyledAvatar src={img} key={uuidv4()} />;
          })}
        </StyledAvatarGroup>
        <StyledNavBtn
          style={{ width: 'auto' }}
          onClick={(e) => setInviteAnchorEl(e.currentTarget)}
        >
          Invite
        </StyledNavBtn>
        <PopOver
          headingText="Invite to board"
          anchorEl={inviteAnchorEl}
          setAnchorEl={setInviteAnchorEl}
        >
          <div>To be updated</div>
        </PopOver>
      </div>
      <div className="flex-container">
        <StyledIconOnLeftBtn
          variant="contained"
          startIcon={<RoomServiceIcon />}
        >
          <span>Butler</span>
        </StyledIconOnLeftBtn>
        <StyledIconOnLeftBtn
          variant="contained"
          startIcon={<MoreHorizIcon />}
          onClick={() => {
            setIsMenuOpen(true);
            boardContainer.style.marginRight = '339px';
          }}
        >
          <span>Show menu</span>
        </StyledIconOnLeftBtn>
        <StyledDrawer
          variant="persistent"
          anchor="right"
          open={isMenuOpen}
          transitionDuration={100}
        >
          <StyledMenuPopupContent>
            <div>
              <span>Menu</span>
              <StyledCloseIconButton
                onClick={() => {
                  setIsMenuOpen(false);
                  boardContainer.style.marginRight = '0';
                }}
              >
                <CloseIcon />
              </StyledCloseIconButton>
            </div>
          </StyledMenuPopupContent>
        </StyledDrawer>
      </div>
    </StyledNavbar>
  );
};

export default SecondaryNavbar;
