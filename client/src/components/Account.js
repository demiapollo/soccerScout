import React from 'react';
import { MenuItem } from '@material-ui/core';

const Account = ({ handleClose }) => {
  return (
    <>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>Sign Out</MenuItem>
    </>
  );
};

export default Account;
