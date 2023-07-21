import React, { useState, useEffect } from 'react';
import { Grid, Paper, Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { QUERY_PLAYERS_BY_COUNTRY } from '../graphQL/queries';
import { useQuery, gql } from '@apollo/client';

// Import the flag images
import argentinaFlag from '../flags/argentina.png';
import brazilFlag from '../flags/brazil.png';
import englandFlag from '../flags/england.png';
import franceFlag from '../flags/france.png';
import germanyFlag from '../flags/germany.png';
import italyFlag from '../flags/italy.png';
import spainFlag from '../flags/spain.png';
import usaFlag from '../flags/usa.png';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: '55px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const countries = [
  { code: 'AR', name: 'Argentina', flag: argentinaFlag },
  { code: 'BR', name: 'Brazil', flag: brazilFlag },
  { code: 'GB', name: 'England', flag: englandFlag },
  { code: 'FR', name: 'France', flag: franceFlag },
  { code: 'DE', name: 'Germany', flag: germanyFlag },
  { code: 'IT', name: 'Italy', flag: italyFlag },
  { code: 'ES', name: 'Spain', flag: spainFlag },
  { code: 'US', name: 'United States', flag: usaFlag },
];

function Country({ country }) {
  const classes = useStyles();

  const { loading, error, data } = useQuery(QUERY_PLAYERS_BY_COUNTRY, {
    variables: { country: country.code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  const players = data?.playerByCountry || [];

  return (
    <Grid item xs={6} sm={4} md={3} lg={3} m={5} key={country.code}>
      <Paper className={classes.paper}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <img 
            src={country.flag} 
            alt={country.name} 
            style={{ width: '80%' }} 
          />
          <div className={classes.root}>
            <p>{country.name}</p>
            {players.map(player => (
              <p key={player._id}>{player.firstName} {player.lastName}</p>
            ))}
          </div>
        </Box>
      </Paper>
    </Grid>
  );
}

function Countries() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {countries.map((country) => (
          <Country country={country} key={country.code} />
        ))}
      </Grid>
    </Container>
  );
}

export default Countries;
