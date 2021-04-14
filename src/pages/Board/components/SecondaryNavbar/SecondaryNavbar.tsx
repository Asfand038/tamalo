import React from 'react';

import {
  StarBorderRounded as StarBorderRoundedIcon,
  ExpandMore as ExpandMoreIcon,
  BarChart as BarChartIcon,
  PeopleOutlineSharp as PeopleOutlineSharpIcon,
  RoomService as RoomServiceIcon,
  MoreHoriz as MoreHorizIcon,
} from '@material-ui/icons';

import { BoardTitle } from './BoardTitle';
import {
  StyledNavbar,
  StyledNavBtn,
  StyledBoardBtn,
  StyledBoardCategoryBtn,
  StyledIconOnLeftBtn,
  StyledInviteBtn,
  StyledAvatar,
  StyledDivider,
} from './SecondaryNavbar.styles';

interface IProps {
  boardTitle: string;
}

const SecondaryNavbar: React.FC<IProps> = ({ boardTitle }) => {
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
        <StyledAvatar>AJ</StyledAvatar>
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
