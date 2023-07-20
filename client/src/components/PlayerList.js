import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Divider,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";

import { stringAvatar } from "../utils/helpers";

import { useQuery } from "@apollo/client";

export const PlayerList = (props) => {
  const { dashboard, players, following } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "center",
    },

    list: {
      maxHeight: "725px",
      width: "50%",
      marginTop: "50px",
      overflowY: "auto",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {dashboard ? (
        <List className={classes.list}>
          {players.length === 0 ? (
            <div>
              <Typography variant="h4" align="center">
                You haven't created any players yet!
              </Typography>
            </div>
          ) : (
            players.map((player, index) => {
              return (
                <div key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar {...stringAvatar(player)} />
                    </ListItemAvatar>
                    <ListItemText primary={player} align="center" />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </div>
              );
            })
          )}
        </List>
      ) : (
        <List className={classes.list}>
          {following.length === 0 ? (
            <div>
              <Typography variant="h4" align="center">
                You aren't following any players yet!
              </Typography>
            </div>
          ) : (
            following.map((player, index) => {
              return (
                <div key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar {...stringAvatar(player)} />
                    </ListItemAvatar>
                    <ListItemText primary={player} align="center" />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="follow">
                        <StarIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </div>
              );
            })
          )}
        </List>
      )}
    </div>
  );
};

export default PlayerList;
