import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { useQuery, gql } from "@apollo/client";
import { QUERY_PLAYERS_BY_COUNTRY } from "../graphQL/queries";
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

const Players = () => {
  const classes = useStyles();
  const { country } = useParams();
  const { loading, error, data } = useQuery(QUERY_PLAYERS_BY_COUNTRY, {
    variables: { country: country },
  });
  const playerProfiles = data?.playerByCountry || [];

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Players from {country}
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

export default Players;
