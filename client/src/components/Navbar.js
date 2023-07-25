import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import { makeStyles } from "@material-ui/styles";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const useStyles = makeStyles({
    linkButton: {
      textDecoration: "none",
      marginRight: "15px",
    },
  });

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    Auth.logout();
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h3" style={{ flexGrow: 1 }}>
            Soccer Scout
          </Typography>
          <Button
            className={classes.linkButton}
            color="inherit"
            component={Link}
            to="/"
          >
            Home
          </Button>
          {Auth.loggedIn() ? (
            <div
              style={{
                display: "flex",
              }}
            >
              <NavButtons
                handleClick={handleClick}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                handleClose={handleClose}
                handleLogout={handleLogout}
              />
            </div>
          ) : (
            <div>
              <Button
                className={classes.linkButton}
                variant="contained"
                style={{
                  color: "blue",
                  backgroundColor: "white",
                  marginRight: "30px",
                }}
                component={Link}
                to="/login"
              >
                Login
              </Button>

              <Button
                className={classes.linkButton}
                variant="contained"
                component={Link}
                style={{
                  color: "blue",
                  backgroundColor: "white",
                  marginRight: "30px",
                }}
                to="/register"
              >
                Signup
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
