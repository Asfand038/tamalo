import React from 'react';
import {
  Add as AddIcon,
  LabelOutlined as LabelOutlinedIcon,
  CheckBoxOutlined as CheckBoxOutlinedIcon,
  ArrowForward as ArrowForwardIcon,
  FileCopyOutlined as FileCopyOutlinedIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
  VisibilityOutlined as VisibilityOutlinedIcon,
  ArchiveOutlined as ArchiveOutlinedIcon,
  ShareOutlined as ShareOutlinedIcon,
} from '@material-ui/icons';

import { ICover, IUser } from '../../../../utils';
import {
  AddMemberButton,
  AttachmentsButton,
  DueDateButton,
  CoverUploadButton,
} from './SidebarButtons';

import {
  StyledSidebar,
  StyledList,
  StyledTitle,
  StyledListButton,
  StyledButton,
  StyledDivider,
} from './Sidebar.styles';

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
  taskMembers: IUser[] | [];
  boardMembers: IUser[];
}

const Sidebar: React.FC<IProps> = ({ cover, taskMembers, boardMembers }) => {
  return (
    <StyledSidebar>
      <StyledList>
        <StyledTitle>ADD TO CARD</StyledTitle>
        <AddMemberButton
          taskMembers={taskMembers}
          boardMembers={boardMembers}
        />
        <StyledListButton variant="contained" startIcon={<LabelOutlinedIcon />}>
          Labels
        </StyledListButton>
        <StyledListButton
          variant="contained"
          startIcon={<CheckBoxOutlinedIcon />}
        >
          Checklist
        </StyledListButton>
        <DueDateButton />
        <AttachmentsButton />
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
