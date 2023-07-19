// PlayerList.js

import React from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

const PlayerList = () => {
  const players = ["Player 1", "Player 2", "Player 3"]; // This would be replaced by data fetched from your database

  return (
    <List>
      {players.map((player, index) => (
        <ListItem key={index} button>
          <ListItemText primary={player} />
        </ListItem>
      ))}
    </List>
  );
};

export default PlayerList;
