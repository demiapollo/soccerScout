import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import LanguageIcon from "@material-ui/icons/Language";
import DateRangeIcon from "@material-ui/icons/DateRange";
import HeightIcon from "@material-ui/icons/Height";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import CommentRoundedIcon from "@material-ui/icons/CommentRounded";
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles((theme) => ({
  playerCard: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    maxWidth: "300px",
    width: "100%",
    color: "inherit",
    textDecoration: "none"
  },
}));

const PlayerCard = ({ player }) => {
  const classes = useStyles();

  return (
    <Link to={`/PlayerProfile/${player._id}`} key={player._id} className={classes.playerCard}>
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "h5" }}>{player.firstName} {player.lastName}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <SportsSoccerIcon />
          </ListItemIcon>
          <ListItemText>Position: {player.position}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText>Country: {player.country}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DateRangeIcon />
          </ListItemIcon>
          <ListItemText>Age: {player.age}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <HeightIcon />
          </ListItemIcon>
          <ListItemText>Height: {player.height}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText>Weight: {player.weight}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
          <GroupIcon />
          </ListItemIcon>
          <ListItemText>Team: {player.team}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <CommentRoundedIcon />
          </ListItemIcon>
          <ListItemText>Comments: {player.anyOtherComments}</ListItemText>
        </ListItem>
      </List>
    </Link>
  );
};

export default PlayerCard;