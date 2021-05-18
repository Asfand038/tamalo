/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryClient } from 'react-query';
import { Slide } from '@material-ui/core';
import {
  Close as CloseIcon,
  TableChartOutlined as TableChartOutlinedIcon,
  ArrowBackIos as ArrowBackIosIcon,
  PersonOutlineRounded as PersonOutlineRoundedIcon,
  SubjectRounded as SubjectRoundedIcon,
} from '@material-ui/icons';

import { IBoard, IUser } from '../../../utils';
import { baseUrl, getAvatarFallbackName } from '../../../../../utils';
import { ButtonContainer, PopOver } from '../../../../../components';
import { colors, photoCollage } from '../../../../../assets';
import {
  StyledDrawer,
  StyledMenuHeader,
  StyledMenuContent,
  StyledMenuButton,
  StyledCloseIconButton,
  StyledGoBackIconButton,
  StyledDescriptionBtn,
  StyledBoardBgColorIcon,
  StyledSubMenuTitle,
  StyledAddDescriptionContent,
  StyledDescriptionTextField,
  StyledDescriptionButton,
  StyledChangeBgContent,
  StyledUserInfo,
  StyledAvatar,
  StyledUserImage,
  StyledSubMenuContent,
} from './BoardMenu.styles';

interface IBgColorIcon {
  bgImage?: string;
  bgColor: string;
}
// Review
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

enum MenuKeys {
  main = 'Menu',
  about = 'About this board',
  changeBg = 'Change background',
}

enum SubMenuKeys {
  null = '',
  photos = 'Photos',
  colors = 'Colors',
}

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

const BoardMenu: React.FC<IProps> = ({ open, setOpen }) => {
  const [key, setKey] = useState(MenuKeys.main);
  const [subMenuKey, setSubMenuKey] = useState(SubMenuKeys.null);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const [isEditingDescription, setIsEditingDescription] = useState(false);

  const { id } = useParams<IParams>();

  const queryClient = useQueryClient();
  const { bgImage, bgColor, owners } = queryClient.getQueryData<IBoard>([
    'board',
    id,
  ])!;

  const openSubMenuHandler = (key: MenuKeys) => {
    setKey(key);
  };
  const openNestedSubMenuHandler = (key: SubMenuKeys) => {
    setSubMenuKey(key);
  };

  const closeSubMenuHandler = () => {
    if (subMenuKey !== SubMenuKeys.null) {
      setSubMenuKey(SubMenuKeys.null);
    } else {
      setKey(MenuKeys.main);
    }
  };

  return (
    <StyledDrawer
      variant="persistent"
      anchor="right"
      open={open}
      transitionDuration={100}
    >
      <StyledMenuHeader>
        <span>{subMenuKey === SubMenuKeys.null ? key : subMenuKey}</span>
        <Slide
          in={key !== MenuKeys.main}
          direction="right"
          timeout={{ enter: 100, exit: 100 }}
        >
          <StyledGoBackIconButton onClick={closeSubMenuHandler}>
            <ArrowBackIosIcon />
          </StyledGoBackIconButton>
        </Slide>
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
        {key === MenuKeys.main && (
          <>
            <StyledMenuButton
              startIcon={<TableChartOutlinedIcon />}
              onClick={() => openSubMenuHandler(MenuKeys.about)}
            >
              <StyledDescriptionBtn>
                <div>About this board</div>
                <div>Add a description to your board</div>
              </StyledDescriptionBtn>
            </StyledMenuButton>
            <StyledMenuButton
              startIcon={<BgColorIcon bgImage={bgImage} bgColor={bgColor} />}
              onClick={() => openSubMenuHandler(MenuKeys.changeBg)}
            >
              <div style={{ marginTop: '-1px' }}>Change Background</div>
            </StyledMenuButton>
          </>
        )}
        <Slide
          direction="left"
          in={key === MenuKeys.about}
          timeout={{ enter: 100, exit: 0 }}
          mountOnEnter
          unmountOnExit
        >
          <div>
            <StyledSubMenuTitle>
              <PersonOutlineRoundedIcon />
              <div>Board Admins</div>
            </StyledSubMenuTitle>
            {owners.map(({ username, email, id, profileImg }: IUser) => (
              <StyledUserInfo key={id}>
                <StyledAvatar
                  src={profileImg}
                  width="50px"
                  height="50px"
                  onClick={(e) => setAvatarAnchorEl(e.currentTarget)}
                >
                  {getAvatarFallbackName(username)}
                </StyledAvatar>
                <div>
                  <div>{username}</div>
                  <div>{email}</div>
                </div>
                <PopOver
                  headingText={username}
                  anchorEl={avatarAnchorEl}
                  setAnchorEl={setAvatarAnchorEl}
                >
                  <StyledUserImage src={profileImg} alt="" />
                </PopOver>
              </StyledUserInfo>
            ))}
            <StyledSubMenuTitle>
              <SubjectRoundedIcon />
              <div>Description</div>
            </StyledSubMenuTitle>
            <StyledAddDescriptionContent>
              <StyledDescriptionTextField
                InputProps={{ spellCheck: false }}
                editing={+isEditingDescription}
                variant="outlined"
                multiline
                rows={isEditingDescription ? '5' : '3'}
                placeholder={`It's your board time to shine! Let people know what this board is used for and what they can expect to see.`}
                onFocus={() => setIsEditingDescription(true)}
                onBlur={() => setIsEditingDescription(false)}
              />
              {isEditingDescription && (
                <ButtonContainer
                  btnText="Save"
                  setFormIsOpen={setIsEditingDescription}
                >
                  <StyledDescriptionButton variant="contained">
                    Formatting help
                  </StyledDescriptionButton>
                </ButtonContainer>
              )}
            </StyledAddDescriptionContent>
          </div>
        </Slide>
        <Slide
          direction="left"
          in={key === MenuKeys.changeBg}
          timeout={{ enter: 100, exit: 0 }}
          mountOnEnter
          unmountOnExit
        >
          <StyledChangeBgContent isVisible={subMenuKey === SubMenuKeys.null}>
            <div
              aria-hidden
              onClick={() => openNestedSubMenuHandler(SubMenuKeys.photos)}
            >
              <img src={photoCollage} alt="" />
              <div>Photos</div>
            </div>
            <div
              aria-hidden
              onClick={() => openNestedSubMenuHandler(SubMenuKeys.colors)}
            >
              <img src={colors} alt="" />
              <div>Colors</div>
            </div>
          </StyledChangeBgContent>
        </Slide>
        <Slide
          direction="left"
          in={subMenuKey === SubMenuKeys.photos}
          timeout={{ enter: 100, exit: 0 }}
          mountOnEnter
          unmountOnExit
        >
          <StyledSubMenuContent>
            {boardBgImages.map(({ imgSrc, imgId, bgColor }) => (
              <img
                key={imgId}
                src={imgSrc}
                alt=""
                style={{ backgroundColor: bgColor }}
              />
            ))}
          </StyledSubMenuContent>
        </Slide>
        <Slide
          direction="left"
          in={subMenuKey === SubMenuKeys.colors}
          timeout={{ enter: 100, exit: 0 }}
          mountOnEnter
          unmountOnExit
        >
          <StyledSubMenuContent>
            {boardBgColors.map((color) => (
              <div key={color} style={{ backgroundColor: color }} />
            ))}
          </StyledSubMenuContent>
        </Slide>
      </StyledMenuContent>
    </StyledDrawer>
  );
};

export default BoardMenu;
