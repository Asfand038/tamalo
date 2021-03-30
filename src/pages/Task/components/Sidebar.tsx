import React from 'react';
import styled from 'styled-components';

import { Button, Divider } from '@material-ui/core';
import {
  Add as AddIcon,
  PersonOutlineRounded as PersonOutlineRoundedIcon,
  LabelOutlined as LabelOutlinedIcon,
  CheckBoxOutlined as CheckBoxOutlinedIcon,
  WatchLaterOutlined as WatchLaterOutlinedIcon,
  AttachmentOutlined as AttachmentOutlinedIcon,
  VideoLabel as VideoLabelIcon,
  ArrowForward as ArrowForwardIcon,
  FileCopyOutlined as FileCopyOutlinedIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
  VisibilityOutlined as VisibilityOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
} from '@material-ui/icons';

const StyledSidebar = styled.div`
  padding: 0 16px 8px 8px;
  width: 168px;
  overflow: hidden;

  && .small-icon {
    font-size: 14px;
    margin-left: 2px;
  }
`;

const StyledList = styled.div`
  margin-bottom: 24px;
`;

const StyledTitle = styled.div`
  color: #5e6c84;
  font-size: 12px;
  font-weight: 500;
  margin-top: 16px;
  line-height: 20px;
  letter-spacing: 0.5px;
`;

const StyledListButton = styled(Button)`
  && {
    font-size: 14px;
    font-weight: 400;
    width: 100%;
    text-transform: none;
    color: #172b4d;
    background-color: rgba(9, 30, 66, 0.04);
    box-shadow: none;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    height: 32px;
    margin-top: 8px;
    max-width: 300px;
    padding: 6px 12px;
    transition-property: background-color, border-color, box-shadow;
    transition-duration: 85ms;
    transition-timing-function: ease;
    & > span {
      justify-content: flex-start;
    }
    &:hover {
      background-color: rgba(9, 30, 66, 0.08);
      box-shadow: none;
      border: none;
      color: #091e42;
    }
    & svg {
      color: #42526e;
      font-size: 16px;
    }
  }
`;

const StyledButton = styled(StyledListButton)`
  && {
    background-color: inherit;
  }
`;

const StyledDivider = styled(Divider)`
  && {
    margin-top: 8px;
  }
`;

const Sidebar: React.FC = () => {
  const addToCardBtns = [
    {
      text: 'Members',
      startIcon: <PersonOutlineRoundedIcon />,
    },
    {
      text: 'Labels',
      startIcon: <LabelOutlinedIcon />,
    },
    {
      text: 'Checklist',
      startIcon: <CheckBoxOutlinedIcon />,
    },
    {
      text: 'Due date',
      startIcon: <WatchLaterOutlinedIcon />,
    },
    {
      text: 'Attachment',
      startIcon: <AttachmentOutlinedIcon />,
    },
    {
      text: 'Cover',
      startIcon: <VideoLabelIcon className="small-icon" />,
    },
  ];

  const actionBtns = [
    {
      text: 'Move',
      startIcon: <ArrowForwardIcon />,
    },
    {
      text: 'Copy',
      startIcon: <FileCopyOutlinedIcon />,
    },
    {
      text: 'Make Template',
      startIcon: <AssignmentOutlinedIcon />,
    },
    {
      text: 'Watch',
      startIcon: <VisibilityOutlinedIcon />,
    },
  ];

  return (
    <StyledSidebar>
      <StyledList>
        <StyledTitle>ADD TO CARD</StyledTitle>
        {addToCardBtns.map(({ text, startIcon }) => (
          <StyledListButton
            key={text}
            variant="contained"
            startIcon={startIcon}
          >
            {text}
          </StyledListButton>
        ))}
      </StyledList>
      <StyledTitle>POWER-UPS</StyledTitle>
      <StyledButton variant="text" startIcon={<AddIcon />}>
        Add Power-Ups
      </StyledButton>
      <StyledTitle>BUTLER</StyledTitle>
      <StyledButton variant="text" startIcon={<AddIcon />}>
        Add button
      </StyledButton>
      <StyledList>
        <StyledTitle>ACTIONS</StyledTitle>
        {actionBtns.map(({ text, startIcon }) => (
          <StyledListButton
            key={text}
            variant="contained"
            startIcon={startIcon}
          >
            {text}
          </StyledListButton>
        ))}
        <StyledDivider />
        <StyledListButton
          variant="contained"
          startIcon={<ArchiveOutlinedIcon />}
        >
          Archive
        </StyledListButton>
        <StyledListButton variant="contained" startIcon={<ShareOutlinedIcon />}>
          Share
        </StyledListButton>
      </StyledList>
    </StyledSidebar>
  );
};

export default Sidebar;
