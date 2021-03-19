import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// importing components from material-ui
import {
  List,
  ListItemIcon,
  ListItemText,
  AccordionDetails,
  Typography,
  IconButton,
} from '@material-ui/core';

// importing icons from material-ui
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
  StyledSidebarIcon,
  StyledTeamList,
  StyledAccordion,
  StyledAccordionSummary,
  StyledAccordionList,
  StyledAccordionListItem,
  StyledAccordionListIcon,
  StyledAccordionListText,
} from './Sidebar.styles';

const sidebarList = [
  { icon: <DeveloperBoardIcon />, text: 'Boards', route: '/boards' },
  { icon: <AssignmentOutlinedIcon />, text: 'Templates', route: '#1' },
  { icon: <ShowChartOutlinedIcon />, text: 'Home', route: '#2' },
];

const accordionList = [
  {
    icon: <AssignmentTurnedInOutlinedIcon />,
    text: 'Getting Started',
    additionalIcon: <ArrowForwardIosSharpIcon />,
    route: '#3',
  },
  { icon: <DeveloperBoardIcon />, text: 'Boards', route: '#4' },
  { icon: <FavoriteBorderOutlinedIcon />, text: 'Highlights', route: '#5' },
  {
    icon: <TableChartOutlinedIcon />,
    text: 'Team table',
    additionalIcon: <ArrowForwardIosSharpIcon />,
    route: '#6',
  },
  {
    icon: <PeopleAltOutlinedIcon />,
    text: 'Members',
    additionalIcon: <ArrowForwardIosSharpIcon />,
    route: '#7',
  },
  {
    icon: <SettingsOutlinedIcon />,
    text: 'Settings',
    additionalIcon: <ArrowForwardIosSharpIcon />,
    route: '#8',
  },
];

const Sidebar: React.FC = () => {
  const [expandAccordion, setExpandAccordion] = useState(false);
  const history = useHistory();

  useEffect(() => {
    document
      .getElementById(history.location.pathname)
      ?.classList.add('active-link');
  }, [history]);

  const handleRoute = (route: string) => {
    const prevActiveLink = document.getElementsByClassName('active-link');
    if (prevActiveLink.length) {
      prevActiveLink[0].classList.remove('active-link');
    }
    const currActiveLink = document.getElementById(route);
    currActiveLink?.classList.add('active-link');
    history.push(route);
  };

  return (
    <StyledSidebar variant="permanent">
      <List>
        {sidebarList.map(({ icon, text, route }) => (
          <StyledSidebarItem
            button
            id={route}
            key={text}
            onClick={() => handleRoute(route)}
          >
            <StyledSidebarIcon>{icon}</StyledSidebarIcon>
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
        expanded={expandAccordion}
        onChange={() => setExpandAccordion(!expandAccordion)}
      >
        <StyledAccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
        >
          <PeopleOutlineSharpIcon />
          <Typography>Individual</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <StyledAccordionList>
            {accordionList.map(({ icon, text, additionalIcon, route }) => (
              <StyledAccordionListItem
                button
                id={route}
                key={text}
                onClick={() => handleRoute(route)}
              >
                <StyledAccordionListIcon>{icon}</StyledAccordionListIcon>
                <StyledAccordionListText primary={text} />
                {additionalIcon && (
                  <ListItemIcon className="forward-icon">
                    {additionalIcon}
                  </ListItemIcon>
                )}
              </StyledAccordionListItem>
            ))}
          </StyledAccordionList>
        </AccordionDetails>
      </StyledAccordion>
    </StyledSidebar>
  );
};

export default Sidebar;
