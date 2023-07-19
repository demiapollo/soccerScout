import React from "react";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";

import Avatar from "@material-ui/core/Avatar";
import { Navigate, Link, useParams } from "react-router-dom";

import UserTab from "../components/UserTab";

const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      // margin: theme.spacing(3),
      // border only on the left and right side
      borderLeft: "1px solid #000000",
      borderRight: "1px solid #000000",
    },
    icon: {
      height: "100px",
      width: "100px",
      margin: theme.spacing(6),
    },
  }));

  const classes = useStyles();

  // const { loading, data, error } = useQuery(QUERY_ME);

  // if (loading) return <div>Loading...</div>;

  // if (error) {
  //     return <Navigate to="/login" />;
  // }

  // const { username, following, createdPlayers} = data?.user || {};

  return (
    <div>
      <Grid container>
        <Grid container direction="column" alignContent="center" xs={3}>
          <PersonIcon className={classes.icon} />

          <Typography variant="h4" align="center">
            User
          </Typography>
        </Grid>
        <Grid
          container
          xs={6}
          direction="column"
          className={classes.root}
          style={{ height: "100vh" }}
        >
          <UserTab />
        </Grid>
        <Grid container direction="column" alignContent="center" xs={3}>
          <Typography variant="h4" className={classes.header} align="center">
            {" "}
            BUTTON FOR ADDING PLAYERS{" "}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
