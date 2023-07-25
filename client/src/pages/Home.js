import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import { QUERY_PLAYERS } from "../graphQL/queries";
import PlayerCard from "../components/PlayerCard";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  resultsContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const Home = () => {
  const classes = useStyles();
  const { loading, error, data } = useQuery(QUERY_PLAYERS);
  const playerProfiles = data?.playerProfiles || [];

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Welcome to The Soccer Scout
      </Typography>
      <div className={classes.resultsContainer}>
        {loading ? (
          <div className={classes.loadingContainer}>
            <CircularProgress />
          </div>
        ) : error ? (
          <Alert severity="error">
            <Typography variant="body1">
              Error fetching player profiles.
            </Typography>
          </Alert>
        ) : (
          playerProfiles.map((player) => (
            <PlayerCard key={player._id} player={player} />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
