import React, { useState } from 'react';

// importing components from material-ui
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AccordionDetails,
  AccordionSummary,
  Typography,
  IconButton,
} from '@material-ui/core';

//importing icons from material-ui
import {
  Add as AddIcon,
  DeveloperBoard as DeveloperBoardIcon,
  ExpandMore as ExpandMoreIcon,
  PeopleOutlineSharp as PeopleOutlineSharpIcon,
  ArrowForwardIosSharp as ArrowForwardIosSharpIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
  FavoriteBorderOutlined as FavoriteBorderOutlinedIcon,
  TableChartOutlined as TableChartOutlinedIcon,
  AssignmentTurnedInOutlined as AssignmentTurnedInOutlinedIcon,
  ShowChartOutlined as ShowChartOutlinedIcon,
  AssignmentOutlined as AssignmentOutlinedIcon,
} from '@material-ui/icons';

// importing styled components
import {
  StyledSidebar,
  StyledSidebarItem,
  StyledTeamList,
  StyledAccordion,
  StyledAccordionList,
} from './Sidebar.styles';

const sidebarList = [
  { icon: <DeveloperBoardIcon />, text: 'Boards' },
  { icon: <AssignmentOutlinedIcon />, text: 'Templates' },
  { icon: <ShowChartOutlinedIcon />, text: 'Home' },
];

const accordionList = [
  {
    icon: <AssignmentTurnedInOutlinedIcon />,
    text: 'Getting Started',
    additionalIcon: <ArrowForwardIosSharpIcon />,
  },
  { icon: <DeveloperBoardIcon />, text: 'Boards' },
  { icon: <FavoriteBorderOutlinedIcon />, text: 'Highlights' },
  {
    icon: <TableChartOutlinedIcon />,
    text: 'Team table',
    additionalIcon: <ArrowForwardIosSharpIcon />,
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    text: 'Members',
    additionalIcon: <ArrowForwardIosSharpIcon />,
  },
  {
    icon: <SettingsOutlinedIcon />,
    text: 'Settings',
    additionalIcon: <ArrowForwardIosSharpIcon />,
  },
];

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledSidebar variant="permanent">
      <List>
        {sidebarList.map(({ icon, text }) => (
          <StyledSidebarItem button key={text}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={text} />
          </StyledSidebarItem>
        ))}
      </List>
      <StyledTeamList>
        <div>TEAMS</div>
        <IconButton aria-label="add-team">
          <AddIcon />
        </IconButton>
      </StyledTeamList>
      <StyledAccordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
        >
          <PeopleOutlineSharpIcon />
          <Typography>Individual</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledAccordionList>
            {accordionList.map(({ icon, text, additionalIcon }) => (
              <ListItem button key={text}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
                {additionalIcon && (
                  <ListItemIcon>{additionalIcon}</ListItemIcon>
                )}
              </ListItem>
            ))}
          </StyledAccordionList>
        </AccordionDetails>
      </StyledAccordion>
    </StyledSidebar>
  );
};

export default Sidebar;
