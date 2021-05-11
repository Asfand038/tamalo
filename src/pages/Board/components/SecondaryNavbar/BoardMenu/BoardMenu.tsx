import React from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import {
  Close as CloseIcon,
  TableChartOutlined as TableChartOutlinedIcon,
} from '@material-ui/icons';

import { IBoard } from '../../../utils';
import { baseUrl } from '../../../../../utils';
import {
  StyledDrawer,
  StyledMenuHeader,
  StyledMenuContent,
  StyledMenuButton,
  StyledCloseIconButton,
  StyledDescriptionBtn,
  StyledBoardBgColorIcon,
} from './BoardMenu.styles';

interface IBgColorIcon {
  bgImage?: string;
  bgColor: string;
}

const BgColorIcon: React.FC<IBgColorIcon> = ({ bgImage, bgColor }) => {
  return (
    <StyledBoardBgColorIcon
      src={`${baseUrl}${bgImage}`}
      alt=""
      bgColor={bgColor}
    />
  );
};

interface IParams {
  id: string;
}

interface IProps {
  open: boolean;
  setOpen: Function;
}

const BoardMenu: React.FC<IProps> = ({ open, setOpen }) => {
  const { id } = useParams<IParams>();

  const queryClient = useQueryClient();
  const { bgImage, bgColor } = queryClient.getQueryData<IBoard>(['board', id])!;

  return (
    <StyledDrawer
      variant="persistent"
      anchor="right"
      open={open}
      transitionDuration={100}
    >
      <StyledMenuHeader>
        <span>Menu</span>
        <StyledCloseIconButton
          onClick={() => {
            setOpen(false);
            const boardContainer = document.getElementById(
              id
            )! as HTMLDivElement;
            boardContainer.style.marginRight = '0';
          }}
        >
          <CloseIcon />
        </StyledCloseIconButton>
      </StyledMenuHeader>
      <StyledMenuContent>
        <StyledMenuButton startIcon={<TableChartOutlinedIcon />}>
          <StyledDescriptionBtn>
            <div>About this board</div>
            <div>Add a description to your board</div>
          </StyledDescriptionBtn>
        </StyledMenuButton>
        <StyledMenuButton
          startIcon={<BgColorIcon bgImage={bgImage} bgColor={bgColor} />}
        >
          <div style={{ marginTop: '-1px' }}>Change Background</div>
        </StyledMenuButton>
      </StyledMenuContent>
    </StyledDrawer>
  );
};

export default BoardMenu;
