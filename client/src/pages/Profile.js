import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { stringAvatar } from "../utils/helpers";
import Avatar from "@material-ui/core/Avatar";
import UserTab from "../components/UserTab";
import { Navigate } from "react-router-dom";
import { QUERY_ME } from "../graphQL/queries";

const { useStoreContext } = require("../context");
const {
  CREATE_PLAYER_LIST,
  CREATE_FAVORITES_LIST,
  CREATE_USER_PROFILE,
} = require("../context/actionTypes");

const Profile = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      borderLeft: "1px solid #000000",
    },
    icon: {
      height: "100px",
      width: "100px",
      margin: theme.spacing(6),
    },
  }));

  const classes = useStyles();

  const [loadingData, setLoadingData] = useState(true);

  const { loading, data, error } = useQuery(QUERY_ME);

  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    if (data) {
      const { createdPlayers, favoritePlayers, ...me } = data.me;

      dispatch({
        type: CREATE_PLAYER_LIST,
        payload: createdPlayers,
      });
      dispatch({
        type: CREATE_FAVORITES_LIST,
        payload: favoritePlayers,
      });
      dispatch({
        type: CREATE_USER_PROFILE,
        payload: me,
      });
      setLoadingData(false);
    }
  }, [data, dispatch]);

  if (loadingData || loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Navigate to="/login" />;
  }
  const { userProfile } = state;

  return (
    <div>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={10}
          style={{
            display: "flex",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
          }}
        >
          <Grid container direction="column" alignContent="center" xs={3}>
            <Avatar
              className={classes.icon}
              {...stringAvatar(userProfile.username)}
            />
            <Typography variant="h4" align="center">
              {userProfile.username}
            </Typography>
          </Grid>
          <Grid
            container
            xs={9}
            direction="column"
            className={classes.root}
            style={{ height: "100vh" }}
          >
            <UserTab />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
