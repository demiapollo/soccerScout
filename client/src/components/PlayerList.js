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
import EditIcon from "@material-ui/icons/Edit";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";

import { stringAvatar } from "../utils/helpers";

// import { useQuery } from "@apollo/client";

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
    link: {
      textDecoration: "none",
      color: "black",
      marginLeft: "189px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {players.length === 0 ? (
        <div>
          {dashboard ? (
            <div>
              <Typography variant="h4" align="center">
                You haven't created any players yet!
              </Typography>
            </div>
          ) : (
            <div>
              <Typography variant="h4" align="center">
                You aren't following any players yet!
              </Typography>
            </div>
          )}
        </div>
      ) : (
        <List className={classes.list}>
          {players.map((player) => {
            return (
              <div key={player._id}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar {...stringAvatar(player.firstName)} />
                  </ListItemAvatar>
                  <Link to={`/players/${player._id}`} className={classes.link}>
                    <ListItemText
                      primary={`${player.firstName} ${player.lastName}`}
                    ></ListItemText>
                  </Link>
                  {dashboard ? (
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="delete">
                        <EditIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  ) : (
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="follow">
                        <StarIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
                <Divider />
              </div>
            );
          })}
        </List>
      )}
    </div>
  );
};

export default PlayerList;
