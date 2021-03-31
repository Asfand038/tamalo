import React from 'react';
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

import {
  StyledSidebar,
  StyledList,
  StyledTitle,
  StyledListButton,
  StyledButton,
  StyledDivider,
} from './Sidebar.styles';

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
      <StyledButton
        variant="text"
        startIcon={<AddIcon className="large-icon" />}
      >
        Add Power-Ups
      </StyledButton>
      <StyledTitle>BUTLER</StyledTitle>
      <StyledButton
        variant="text"
        startIcon={<AddIcon className="large-icon" />}
      >
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
