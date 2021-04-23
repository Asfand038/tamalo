import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

import { PopOver } from '../../../../components';
import {
  StyledSidebar,
  StyledList,
  StyledTitle,
  StyledListButton,
  StyledButton,
  StyledDivider,
  StyledCoverPopOverContent,
  StyledPopOverButton,
} from './Sidebar.styles';

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

const Sidebar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const uploadCoverHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileData = new FormData();
      fileData.append('file', event.target.files[0]);
    }
  };

  return (
    <StyledSidebar>
      <StyledList>
        <StyledTitle>ADD TO CARD</StyledTitle>
        {addToCardBtns.map(({ text, startIcon }) => (
          <StyledListButton
            key={uuidv4()}
            variant="contained"
            startIcon={startIcon}
          >
            {text}
          </StyledListButton>
        ))}
        <StyledListButton
          variant="contained"
          startIcon={<VideoLabelIcon className="small-icon" />}
          onClick={(e) => setAnchorEl(e.currentTarget)}
        >
          Cover
        </StyledListButton>
        <PopOver
          headingText="Cover"
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
        >
          <StyledCoverPopOverContent>
            <div>ATTACHMENTS</div>
            <input
              type="file"
              ref={fileUploadRef}
              style={{ display: 'none' }}
              onChange={uploadCoverHandler}
            />
            <StyledPopOverButton
              variant="contained"
              fullWidth
              onClick={() => fileUploadRef.current?.click()}
            >
              Upload a cover image
            </StyledPopOverButton>
          </StyledCoverPopOverContent>
        </PopOver>
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
