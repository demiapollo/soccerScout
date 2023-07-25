import React from "react";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles"; // Import makeStyles from @material-ui/styles
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import Countries from "../pages/Countries";

const useStyles = makeStyles({
  iconButton: {
    color: "white", // Set the color of the IconButton to white
  },
});

const DiscoverButton = () => {
  const classes = useStyles();

  return (
    <Link to="/countries">
      <Button className={classes.iconButton}>Countries</Button>
    </Link>
  );
};

export default DiscoverButton;
