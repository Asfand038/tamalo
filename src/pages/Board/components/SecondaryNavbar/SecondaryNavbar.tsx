import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
import {
  StyledNavbar,
  StyledNavBtn,
  StyledBoardBtn,
  StyledBoardCategoryBtn,
  StyledIconOnLeftBtn,
  StyledInviteBtn,
  StyledAvatarGroup,
  StyledAvatar,
  StyledBadge,
  StyledDivider,
} from './SecondaryNavbar.styles';

interface IProps {
  boardTitle: string;
  members: IUser[];
  owners: IUser[];
}

const SecondaryNavbar: React.FC<IProps> = ({ boardTitle, members, owners }) => {
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
      <div className="d-flex">
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
        <StyledAvatarGroup spacing={2}>
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
        <StyledInviteBtn>Invite</StyledInviteBtn>
      </div>
      <div className="d-flex">
        <StyledIconOnLeftBtn
          variant="contained"
          startIcon={<RoomServiceIcon />}
        >
          <span>Butler</span>
        </StyledIconOnLeftBtn>
        <StyledIconOnLeftBtn variant="contained" startIcon={<MoreHorizIcon />}>
          <span>Show menu</span>
        </StyledIconOnLeftBtn>
      </div>
    </StyledNavbar>
  );
};

export default SecondaryNavbar;
