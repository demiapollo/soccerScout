import React from "react";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const Account = ({ handleClose, handleLogout, anchorE1, setAnchorE1 }) => {
  return (
    <>
      <Link to="/profile">
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
    </>
  );
};

export default Account;
