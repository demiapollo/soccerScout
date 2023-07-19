// Navbar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button, IconButton, Menu } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchTabs from './SearchTabs';
import Account from './Account';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [value, setValue] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // currently set to true to display w/o logic in the back-end

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

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" style={{ flexGrow: 1 }}>
            Soccer Scout
          </Typography>
          {isLoggedIn && (   // Only show the menu button if the user is logged in
            <IconButton color="inherit" onClick={handleFilterClick}>
              <MenuIcon />
            </IconButton>
          )}
          {isLoggedIn && (   // Only show the SearchTabs if the user is logged in
            <SearchTabs
              filterOpen={Boolean(filterAnchorEl)}
              handleFilterClose={handleFilterClose}
              filterAnchorEl={filterAnchorEl}
              handleTabChange={handleTabChange}
              value={value}
            />
          )}
          <TextField id="input-with-icon-textfield" />
          <Button color="inherit">Home</Button>
          <Button color="inherit">Dashboard</Button>
          <IconButton color="inherit" onClick={handleClick}>
            <AccountCircle />
          </IconButton>
          <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <Account handleClose={handleClose} />
          </Menu>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
