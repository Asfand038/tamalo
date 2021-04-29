import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient } from 'react-query';
import {
  Close as CloseIcon,
  PersonOutline as PersonOutlineIcon,
  PeopleOutlineOutlined as PeopleOutlineOutlinedIcon,
  StarBorderRounded as StarBorderRoundedIcon,
} from '@material-ui/icons';

import { IDashboardData, IBoardLessDetails } from '../../utils';
import BoardCategoryList from './BoardCategoryList';
import {
  StyledPopover,
  StyledCloseIconButton,
  StyledPopoverContent,
  StyledSearchInput,
  StyledBoardCard,
  StyledCreateNewBoardButton,
} from './BoardSearch.styles';

interface IProps {
  anchorEl: HTMLElement | null;
  setAnchorEl: Function;
  setShowCreateBoardModal: Function;
  setCreateBoardModalText: Function;
}

const BoardSearch: React.FC<IProps> = ({
  anchorEl,
  setAnchorEl,
  setShowCreateBoardModal,
  setCreateBoardModalText,
}) => {
  const [searchInput, setSearchInput] = useState('');

  const history = useHistory();
  const queryClient = useQueryClient();
  const boardsData: IDashboardData = queryClient.getQueryData(['boards'])!;

  const { ownedBoards, memberOfBoards } = boardsData;
  const allBoards = [...ownedBoards, ...memberOfBoards];
  const filteredBoards = allBoards.filter(({ title }) => {
    return title.toLowerCase().includes(searchInput.toLowerCase());
  });

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

  const openCreateBoardModalHandler = () => {
    setCreateBoardModalText(searchInput);
    setShowCreateBoardModal(true);
    setAnchorEl(null);
  };

  return (
    <>
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
              autoFocus
            />
            <StyledCloseIconButton onClick={() => setAnchorEl(null)}>
              <CloseIcon />
            </StyledCloseIconButton>
          </div>
          {!searchInput.length && (
            <>
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
              <StyledCreateNewBoardButton
                variant="text"
                disableRipple
                onClick={openCreateBoardModalHandler}
              >
                Create new board...
              </StyledCreateNewBoardButton>
            </>
          )}
          {!!searchInput.length && !!filteredBoards.length && (
            <>
              {filteredBoards.map(({ id, title }: IBoardLessDetails) => (
                <StyledBoardCard
                  key={id}
                  onClick={() => history.push(`/boards/${id}`)}
                >
                  <div />
                  <div>
                    <div>{title}</div>
                    <StarBorderRoundedIcon className="animate-icon" />
                  </div>
                </StyledBoardCard>
              ))}
            </>
          )}
          {!!searchInput.length && (
            <StyledCreateNewBoardButton
              variant="text"
              disableRipple
              onClick={openCreateBoardModalHandler}
            >
              Create board named &quot;{searchInput}&quot;
            </StyledCreateNewBoardButton>
          )}
        </StyledPopoverContent>
      </StyledPopover>
    </>
  );
};

export default BoardSearch;
