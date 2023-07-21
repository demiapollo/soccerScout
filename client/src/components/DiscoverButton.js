import React from 'react';
import { IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles'; // Import makeStyles from @material-ui/styles
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  iconButton: {
    color: 'white', // Set the color of the IconButton to white
  },
});

const DiscoverButton = () => {
  const classes = useStyles();

  return (
    <Link to="/countries">
      <IconButton className={classes.iconButton}> {/* Apply the custom class */}
        <SearchIcon />
      </IconButton>
    </Link>
  );
};

export default DiscoverButton;
