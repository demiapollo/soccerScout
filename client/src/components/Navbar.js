// Navbar.js

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu } from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import SearchTabs from './SearchTabs';
import SearchBar from './SearchBar';
import NavButtons from './NavButtons';


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
          {isLoggedIn && (
            <IconButton color="inherit" onClick={handleFilterClick}>
              <MenuIcon />
            </IconButton>
          )}
          {isLoggedIn && (
            <SearchTabs
              filterOpen={Boolean(filterAnchorEl)}
              handleFilterClose={handleFilterClose}
              filterAnchorEl={filterAnchorEl}
              handleTabChange={handleTabChange}
              value={value}
            />
          )}
          <SearchBar />
          <NavButtons handleClick={handleClick} anchorEl={anchorEl} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
