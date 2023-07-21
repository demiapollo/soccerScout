import React from "react";
import { MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";

const Account = ({ handleClose }) => {
  return (
    <>
      <Link to="/profile">
        <MenuItem onClick={handleClose}>Profile</MenuItem>
      </Link>
      <MenuItem onClick={handleClose}>Sign Out</MenuItem>
    </>
  );
};

export default Account;
