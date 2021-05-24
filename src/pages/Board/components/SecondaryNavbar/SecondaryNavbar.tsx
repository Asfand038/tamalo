import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import {
  StarBorderRounded as StarBorderRoundedIcon,
  ExpandMore as ExpandMoreIcon,
  BarChart as BarChartIcon,
  PeopleOutlineSharp as PeopleOutlineSharpIcon,
  RoomService as RoomServiceIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';

import { getAvatarFallbackName } from '../../../../utils';
import { OwnerIcon } from '../../../../assets';
import { IUser } from '../../utils';
import { BoardTitle } from './BoardTitle';
import { RealTimeSearchField } from './RealTimeSearchField';
import { BoardMenu } from './BoardMenu';
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

  const ownerDetails = owners.map(
    ({ profileImage, firstName, lastName, username }) => {
      return {
        img: profileImage,
        isOwner: true,
        username,
        avatarFallbackText: getAvatarFallbackName(`${firstName} ${lastName}`),
      };
    }
  );
  const memberDetails = members.map(
    ({ profileImage, firstName, lastName, username }) => {
      return {
        img: profileImage,
        isOwner: false,
        username,
        avatarFallbackText: getAvatarFallbackName(`${firstName} ${lastName}`),
      };
    }
  );

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
          {avatarGroupData.map(
            ({ img, isOwner, avatarFallbackText, username }) => {
              if (isOwner) {
                return (
                  <StyledBadge
                    key={username}
                    badgeContent={<OwnerIcon />}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  >
                    <StyledAvatar src={img}>{avatarFallbackText}</StyledAvatar>
                  </StyledBadge>
                );
              }
              return (
                <StyledAvatar src={img} key={username}>
                  {avatarFallbackText}
                </StyledAvatar>
              );
            }
          )}
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
          <RealTimeSearchField />
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
            const boardContainer = document.getElementById(
              id
            )! as HTMLDivElement;
            boardContainer.style.marginRight = '339px';
          }}
        >
          <span>Show menu</span>
        </StyledIconOnLeftBtn>
        {isMenuOpen && <BoardMenu open={isMenuOpen} setOpen={setIsMenuOpen} />}
      </div>
    </StyledNavbar>
  );
};

export default SecondaryNavbar;
