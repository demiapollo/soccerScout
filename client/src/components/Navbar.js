import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavButtons from './NavButtons';
import DiscoverButton from './DiscoverButton'; // import your new component


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);  // currently set to true to display w/o logic in the back-end

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" style={{ flexGrow: 1 }}>
            Soccer Scout
          </Typography>
          {isLoggedIn && <DiscoverButton />}
          <NavButtons handleClick={handleClick} anchorEl={anchorEl} handleClose={handleClose} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
