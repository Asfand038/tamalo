import React from 'react';

// importing components from material-ui
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

//importing icons from material-ui
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';

import { StyledSidebar } from './Sidebar.styles';
const Sidebar: React.FC = () => {
  return (
    <StyledSidebar>
      <Drawer variant="permanent" className="sidebar">
        <List>
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
            <ListItemText primary="Templates" />
          </ListItem>
          <ListItem button>
            <ListItemIcon className="sidebar-item-icon">
              <DeveloperBoardIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </List>
      </Drawer>
    </StyledSidebar>
  );
};

export default Sidebar;
