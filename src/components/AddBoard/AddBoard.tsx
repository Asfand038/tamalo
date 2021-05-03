/* eslint-disable @typescript-eslint/no-unused-vars */
// api issue update this component
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Modal, Fade } from '@material-ui/core';
import { Close as CloseIcon, Done as DoneIcon } from '@material-ui/icons';

import { useAuth } from '../../contexts';
import { createOneBoard } from './api';
import {
  StyledBackdrop,
  StyledModalContent,
  StyledCloseIcon,
  StyledSelectedIcon,
  StyledTextField,
  StyledBgOptionsGrid,
  StyledGridImage,
  StyledGridItem,
  StyledButton,
} from './AddBoard.styles';
import { IBoardLessDetails, IDashboardData } from '../../utils';

interface IProps {
  open: boolean;
  setOpen: Function;
  setPopoverAnchorEl?: Function;
  initialInputValue: string;
}

const baseUrl = 'https://tamalo.herokuapp.com';

const boardBgColors = ['#0079bf', '#d29034', '#b04632', '#89609e', '#4bbf6b'];

const boardBgImages = [
  {
    imgId: '608fb1c58f1bec0015f62cf5',
    imgSrc: `${baseUrl}/uploads/kees_streefkerk_Adl90_a_X_Yw_A_unsplash_616f7a5a4e.jpg`,
    bgColor: '#70b7d3',
  },
  {
    imgId: '608fb1da8f1bec0015f62cf6',
    imgSrc: `${baseUrl}/uploads/nasa_Q1p7bh3_S_Hj8_unsplash_dcfd89f63e.jpg`,
    bgColor: '#000309',
  },
  {
    imgId: '608fb1ee8f1bec0015f62cf7',
    imgSrc: `${baseUrl}/uploads/patrick_tomasso_5hvn_2_WW_6r_Y_unsplash_1e1729a220.jpg`,
    bgColor: '#cc7e2a',
  },
  {
    imgId: '608fb1fd8f1bec0015f62cf8',
    imgSrc: `${baseUrl}/uploads/pawel_czerwinski_XL_Uu_Aay_Dy_Hs_unsplash_813d3e7b90.jpg`,
    bgColor: '#8cbafd',
  },
];

interface IImageProps {
  imgId: string;
  imgSrc: string;
  bgColor: string;
}

const AddBoardModal: React.FC<IProps> = ({
  open,
  setOpen,
  setPopoverAnchorEl,
  initialInputValue,
}) => {
  const [title, setTitle] = useState(initialInputValue);
  const [isCreatingBoard, setIsCreatingBoard] = useState(false);
  const [boardBgColor, setBoardBgColor] = useState<string | null>(null);
  const [boardBgImage, setBoardBgImage] = useState<IImageProps | undefined>(
    boardBgImages[0]
  );

  const { user } = useAuth();
  const queryClient = useQueryClient();
  const dashboardData = queryClient.getQueryData<IDashboardData>(['boards'])!;

  const handleCloseModal = () => {
    if (setPopoverAnchorEl) {
      setPopoverAnchorEl(null);
    }
    setOpen(false);
    setBoardBgColor(null);
    setBoardBgImage(boardBgImages[0]);
    setTitle('');
  };

  const createBoardHandler = async () => {
    setIsCreatingBoard(true);
    if (boardBgImage) {
      try {
        const data = await createOneBoard(
          title,
          boardBgImage.imgId,
          boardBgImage.bgColor,
          user.id
        );
        setIsCreatingBoard(false);
        const { id, title: boardTitle, backgroundImage, meta } = data;
        const newBoard: IBoardLessDetails = {
          title: boardTitle,
          id,
          owners: [user.id],
          members: [],
          background: {
            imgSrc: backgroundImage.url,
            bgColor: meta.bgColor,
          },
        };
        queryClient.setQueryData<IDashboardData>(['boards'], {
          ...dashboardData,
          ownedBoards: [...dashboardData.ownedBoards, newBoard],
        });
      } catch (err) {
        setIsCreatingBoard(false);
      }
    }
    setBoardBgColor(null);
    setBoardBgImage(boardBgImages[0]);
    setTitle('');
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      BackdropComponent={StyledBackdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <StyledModalContent
          container
          spacing={2}
          empty={+!title.length}
          bgcolor={boardBgColor}
          bgimage={boardBgImage?.imgSrc}
        >
          <Grid item xs={8}>
            <StyledTextField
              variant="filled"
              placeholder="Add board title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
            />
            <StyledCloseIcon onClick={handleCloseModal}>
              <CloseIcon />
            </StyledCloseIcon>
          </Grid>
          <StyledBgOptionsGrid container item spacing={2} xs={4}>
            {boardBgImages.map((img) => (
              <StyledGridItem item xs={4} key={img.imgId}>
                <StyledGridImage
                  src={img.imgSrc}
                  alt=""
                  aria-hidden
                  onClick={() => {
                    setBoardBgColor(null);
                    setBoardBgImage(img);
                  }}
                />
                {img === boardBgImage && (
                  <StyledSelectedIcon>
                    <DoneIcon />
                  </StyledSelectedIcon>
                )}
              </StyledGridItem>
            ))}
            {boardBgColors.map((bgColor) => (
              <StyledGridItem item key={uuidv4()} xs={4} bgcolor={bgColor}>
                <div
                  aria-hidden
                  onClick={() => {
                    setBoardBgImage(undefined);
                    setBoardBgColor(bgColor);
                  }}
                />
                {bgColor === boardBgColor && (
                  <StyledSelectedIcon>
                    <DoneIcon />
                  </StyledSelectedIcon>
                )}
              </StyledGridItem>
            ))}
          </StyledBgOptionsGrid>
          <Grid item xs={12}>
            <div>
              <StyledButton
                variant="contained"
                fullWidth
                disabled={Boolean(!title.length)}
                onClick={createBoardHandler}
              >
                Create Board
              </StyledButton>
            </div>
          </Grid>
        </StyledModalContent>
      </Fade>
    </Modal>
  );
};

export default AddBoardModal;
