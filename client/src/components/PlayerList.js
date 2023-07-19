import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  Divider,
  makeStyles,
  Grid,
} from "@material-ui/core";

import { stringAvatar } from "../utils/helpers";

import { useQuery } from "@apollo/client";

export const PlayerList = () => {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar {...stringAvatar("Chawnkieasdfasf")} />
          </ListItemAvatar>
          <ListItemText primary="Chawnkieasdfasf" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar {...stringAvatar("Chawnkieasdfasf")} />
          </ListItemAvatar>
          <ListItemText primary="Chawnkieasdfasf" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar {...stringAvatar("Chawnkieasdfasf")} />
          </ListItemAvatar>
          <ListItemText primary="Chawnkieasdfasf" />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
          <ListItemAvatar>
            <Avatar {...stringAvatar("Chawnkieasdfasf")} />
          </ListItemAvatar>
          <ListItemText primary="Chawnkieasdfasf" />
        </ListItem>
      </List>
    </div>
  );
};

export default PlayerList;
