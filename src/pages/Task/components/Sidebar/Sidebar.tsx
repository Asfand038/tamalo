import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Add as AddIcon,
  PersonOutlineRounded as PersonOutlineRoundedIcon,
  LabelOutlined as LabelOutlinedIcon,
  CheckBoxOutlined as CheckBoxOutlinedIcon,
  AttachmentOutlined as AttachmentOutlinedIcon,
  ArrowForward as ArrowForwardIcon,
  FileCopyOutlined as FileCopyOutlinedIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
  VisibilityOutlined as VisibilityOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
} from '@material-ui/icons';

import { ICover } from '../../../../utils';
import { CoverUploadButton } from './CoverUploadButton';
import { DueDateButton } from './DueDateButton';
import {
  StyledSidebar,
  StyledList,
  StyledTitle,
  StyledListButton,
  StyledButton,
  StyledDivider,
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

interface IProps {
  cover: ICover | null;
}

const Sidebar: React.FC<IProps> = ({ cover }) => {
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
        <DueDateButton />
        <StyledListButton
          variant="contained"
          startIcon={<AttachmentOutlinedIcon />}
        >
          Attachment
        </StyledListButton>
        {!cover && <CoverUploadButton />}
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
