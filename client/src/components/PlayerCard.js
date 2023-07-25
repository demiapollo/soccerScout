import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";
import LanguageIcon from "@material-ui/icons/Language";
import DateRangeIcon from "@material-ui/icons/DateRange";
import HeightIcon from "@material-ui/icons/Height";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import GroupIcon from "@material-ui/icons/Group";

const useStyles = makeStyles((theme) => ({
  playerCardList: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center", 
  },
  playerCard: {
    padding: theme.spacing(2),
    margin: theme.spacing(1), 
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
    width: "300px", 
    color: "inherit",
    textDecoration: "none",
    flex: "0 0 300px", 
  },
}));

const PlayerCard = ({ player }) => {
  const classes = useStyles();

  return (
    <Link
      to={`/PlayerProfile/${player._id}`}
      key={player._id}
      className={classes.playerCard}
    >
      <List>
        <ListItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: "h5" }}>
            {player.firstName} {player.lastName}
          </ListItemText>
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
          <ListItemText>Skills: {player.skills}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FitnessCenterIcon />
          </ListItemIcon>
          <ListItemText>Dominant Foot: {player.dominantFoot}</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText>Team: {player.team}</ListItemText>
        </ListItem>
        <ListItem>
        <ListItemIcon>
          <ListItemText>Country: {player.country}</ListItemText>
        </ListItemIcon>
        </ListItem>
      </List>
    </Link>
  );
};

export default PlayerCard;
