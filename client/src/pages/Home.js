import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useQuery, gql } from "@apollo/client";
import {
  QUERY_PLAYERS,
  QUERY_PLAYER,
  GET_COUNTRIES,
  GET_PLAYER_BY_COUNTRY,
} from "../graphQL/queries";
import PlayerCard from "../components/PlayerCard";

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
          <Typography variant="body1">Loading...</Typography>
        ) : error ? (
          <Typography variant="body1">
            Error fetching player profiles.
          </Typography>
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
