import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient } from 'react-query';
import {
  Close as CloseIcon,
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
} from '@material-ui/icons';

import { IDashboardData } from '../../utils';
import BoardCategoryList from './BoardCategoryList';
import {
  StyledPopover,
  StyledCloseIconButton,
  StyledPopoverContent,
  StyledSearchInput,
} from './BoardSearch.styles';

interface IProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
}

const BoardSearch: React.FC<IProps> = ({ anchorEl, setAnchorEl }) => {
  const [searchInput, setSearchInput] = useState('');

  const queryClient = useQueryClient();
  const boardsData: IDashboardData = queryClient.getQueryData(['boards'])!;

  const { ownedBoards, memberOfBoards } = boardsData;
  const boardCategories = [
    {
      title: 'PERSONAL BOARDS',
      boardCategory: ownedBoards,
      icon: <PersonOutlineIcon />,
      placeholderText: 'No personal boards yet.',
    },
    {
      title: 'MEMBER OF BOARDS',
      boardCategory: memberOfBoards,
      icon: <PeopleOutlineOutlinedIcon />,
      placeholderText: 'Not a member of any boards yet.',
    },
  ];

  return (
    <StyledPopover
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      marginThreshold={0}
      elevation={5}
    >
      <StyledPopoverContent>
        <div>
          <StyledSearchInput
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            variant="outlined"
            placeholder="Find boards by name..."
          />
          <StyledCloseIconButton onClick={() => setAnchorEl(null)}>
            <CloseIcon />
          </StyledCloseIconButton>
        </div>

        {boardCategories.map(
          ({ title, icon, boardCategory, placeholderText }) => (
            <BoardCategoryList
              key={uuidv4()}
              title={title}
              icon={icon}
              boardCategory={boardCategory}
              placeholderText={placeholderText}
            />
          )
        )}
        <div style={{ height: '2px' }} />
      </StyledPopoverContent>
    </StyledPopover>
  );
};

export default BoardSearch;
