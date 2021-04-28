import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Grid, Modal, Fade } from '@material-ui/core';
import { Close as CloseIcon, Done as DoneIcon } from '@material-ui/icons';

import {
  StyledBackdrop,
  StyledModalContent,
  StyledCloseIcon,
  StyledSelectedIcon,
  StyledTextField,
  StyledBgOptionsGrid,
  StyledGridItem,
  StyledButton,
} from './AddBoard.styles';

interface IProps {
  open: boolean;
  setOpen: Function;
}

const boardBgColors = [
  '#0079bf',
  '#d29034',
  '#b04632',
  '#cd5a91',
  '#89609e',
  '#4bbf6b',
];

const boardBgImages = [
  'https://images.unsplash.com/photo-1619233651146-7364c945c3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjE5NDkzMzI3&ixlib=rb-1.2.1&q=80&w=400',
  'https://images.unsplash.com/photo-1619265023713-30c89c0f2505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjE5NDkzMzI3&ixlib=rb-1.2.1&q=80&w=400',
  'https://images.unsplash.com/photo-1619256267591-25a069f9b55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjE5NDkzMzI3&ixlib=rb-1.2.1&q=80&w=400',
];

const AddBoardModal: React.FC<IProps> = ({ open, setOpen }) => {
  const [title, setTitle] = useState('');
  const [boardBgColor, setBoardBgColor] = useState<string | null>(null);
  const [boardBgImage, setBoardBgImage] = useState<string | null>(
    boardBgImages[0]
  );

  const handleCloseModal = () => {
    setOpen(false);
    setBoardBgColor(null);
    setBoardBgImage(boardBgImages[0]);
    setTitle('');
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
          bgimage={boardBgImage}
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
            {boardBgImages.map((imgSrc) => (
              <StyledGridItem item xs={4} imgsrc={imgSrc} key={uuidv4()}>
                <div
                  aria-hidden
                  onClick={() => {
                    setBoardBgColor(null);
                    setBoardBgImage(imgSrc);
                  }}
                />
                {imgSrc === boardBgImage && (
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
                    setBoardBgImage(null);
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
