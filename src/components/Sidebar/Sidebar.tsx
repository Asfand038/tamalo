import React, { useState } from 'react';

// importing components from material-ui
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
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
} from '@material-ui/icons';

import { StyledSidebar } from './Sidebar.styles';
const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <StyledSidebar>
      <Drawer variant="permanent" className="sidebar">
        <List>
          <ListItem button className="sidebar-item">
            <ListItemIcon className="sidebar-item-icon">
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText primary="Boards" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className="sidebar-item-icon">
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText primary="Templates" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className="sidebar-item-icon">
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
        <div className="team-button">
          <div>TEAMS</div>
          <IconButton aria-label="add-team">
            <AddIcon />
          </IconButton>
        </div>
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
          >
            <Typography>Individual</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemIcon className="sidebar-item-icon">
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="Getting Started" />
              </ListItem>
              <ListItem button>
                <ListItemIcon className="sidebar-item-icon">
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="Boards" />
              </ListItem>
              <ListItem button>
                <ListItemIcon className="sidebar-item-icon">
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="Highlights" />
              </ListItem>
              <ListItem button>
                <ListItemIcon className="sidebar-item-icon">
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="Team table" />
              </ListItem>
              <ListItem button>
                <ListItemIcon className="sidebar-item-icon">
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="Members" />
              </ListItem>
              <ListItem button>
                <ListItemIcon className="sidebar-item-icon">
                  <DeveloperBoardIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </Drawer>
    </StyledSidebar>
  );
};

export default Sidebar;
