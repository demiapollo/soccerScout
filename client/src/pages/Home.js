import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

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
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  searchField: {
    marginRight: theme.spacing(2),
  },
  resultsContainer: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  playerCard: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px",
    width: "100%",
  },
}));

const GET_PLAYER_PROFILES = gql`
  query GetPlayerProfiles {
    playerProfiles {
      id
      name
      age
      height
      weight
      team
    }
  }
`;

const Home = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, error, data } = useQuery(GET_PLAYER_PROFILES, {
    onError: (err) => console.log(err),
  });
  const playerProfiles = data?.playerProfiles || [];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h2" className={classes.title}>
        Welcome to The Soccer Scout
      </Typography>
      <div className={classes.searchContainer}>
        <form onSubmit={handleSearchSubmit}>
          <TextField
            className={classes.searchField}
            label="Search players"
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </form>
      </div>
      <div className={classes.resultsContainer}>
        {loading ? (
          <Typography variant="body1">Loading...</Typography>
        ) : error ? (
          <Typography variant="body1">
            Error fetching player profiles.
          </Typography>
        ) : (
          playerProfiles.map((player) => (
            <Link to={`/PlayerProfile/${player.id}`} key={player.id}>
              <div className={classes.playerCard}>
                <Typography variant="h5">{player.name}</Typography>
                <Typography variant="body1">Age: {player.age}</Typography>
                <Typography variant="body1">Height: {player.height}</Typography>
                <Typography variant="body1">Weight: {player.weight}</Typography>
                <Typography variant="body1">Team: {player.team}</Typography>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
