// NavButtons.js

import React from 'react';
import { Button, IconButton, Menu } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Account from './Account';

const NavButtons = ({ handleClick, anchorEl, handleClose }) => {
  return (
    <div>
      <Button color="inherit">Home</Button>
      <Button color="inherit">Dashboard</Button>
      <IconButton color="inherit" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <Account handleClose={handleClose} />
      </Menu>
    </div>
  );
};

export default NavButtons;