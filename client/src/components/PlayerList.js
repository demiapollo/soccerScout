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
  Modal,
} from "@material-ui/core";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import EditIcon from "@material-ui/icons/Edit";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import PlayerForm from "./PlayerForm";

import { UNFOLLOW_PLAYER } from "../graphQL/mutations";

import { stringAvatar } from "../utils/helpers";

// import { useQuery } from "@apollo/client";

export const PlayerList = ({ dashboard, players, setPlayers }) => {
  const [isActive, setIsActive] = useState(true);
  const [followList, setFollowList] = useState(players);
  const [open, setOpen] = useState(false);
  const [editPlayer, setEditPlayer] = useState({});

  const [unfollowPlayer, { error, data }] = useMutation(UNFOLLOW_PLAYER);

  const handleOpen = (event) => {
    const newEditPlayer = players.filter(
      (player) => player._id === event.currentTarget.id
    );
    setEditPlayer(newEditPlayer[0]);
    setOpen(true);
  };

  const handleClose = (event) => {
    setOpen(false);
  };

  const handleUnfollow = async (event) => {
    setIsActive(!isActive);
    try {
      const { data } = await unfollowPlayer({
        variables: { profileId: event.currentTarget.id },
      });
      console.log(data);
      if (data) {
        const newFollowList = followList.filter(
          (player) => player._id !== event.currentTarget.id
        );
        setFollowList(newFollowList);
      }
    } catch (err) {
      console.error(err);
    }
  };

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
    modal: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "50%",
      height: "70%",
      backgroundColor: "white",
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
                      <IconButton
                        edge="end"
                        aria-label="edit"
                        id={player._id}
                        onClick={(event) => handleOpen(event)}
                      >
                        <EditIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  ) : (
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="follow"
                        id={player._id}
                        onClick={(event) => handleUnfollow(event)}
                      >
                        <StarIcon
                          style={{ color: isActive ? "	#FFBF00" : "" }}
                        />
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <PlayerForm
            edit
            player={editPlayer}
            players={players}
            setPlayers={setPlayers}
          />
        </div>
      </Modal>
    </div>
  );
};

export default PlayerList;
