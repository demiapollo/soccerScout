// NavButtons.js
import React from "react";
import { Button, IconButton, Menu } from "@material-ui/core";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AccountCircle from "@material-ui/icons/AccountCircle";
import Account from "./Account";

import DiscoverButton from "./DiscoverButton";

const NavButtons = ({
  handleClick,
  anchorEl,
  setAnchorE1,
  handleClose,
  handleLogout,
}) => {
  return (
    <div>
      <DiscoverButton />
      {/* <Button color="inherit">Dashboard</Button> */}
      <IconButton color="inherit" onClick={handleClick}>
        <AccountCircle />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Account
          handleClose={handleClose}
          handleLogout={handleLogout}
          anchorEl={anchorEl}
          setAnchorE1={setAnchorE1}
        />
      </Menu>
    </div>
  );
};

export default NavButtons;
