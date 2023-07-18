import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, IconButton, Popover, List, ListItem, ListItemText, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const filterOpen = Boolean(filterAnchorEl);
  const id = filterOpen ? 'simple-popover' : undefined;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h3" style={{ flexGrow: 1 }}>
          Soccer Scout
        </Typography>
        <IconButton color="inherit" onClick={handleFilterClick}>
          <MenuIcon />
        </IconButton>
        <Popover
          id={id}
          open={filterOpen}
          anchorEl={filterAnchorEl}
          onClose={handleFilterClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <List>
            <ListItem button>
              <ListItemText primary="Option 1" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Option 2" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Option 3" />
            </ListItem>
          </List>
        </Popover>
        <TextField id="input-with-icon-textfield" />
        <Button color="inherit">Home</Button>
        <Button color="inherit">Dashboard</Button>
        <IconButton color="inherit" onClick={handleClick}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
