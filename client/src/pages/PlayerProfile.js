import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_PLAYER } from "../graphQL/queries";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  LinearProgress,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";
import PublicIcon from "@material-ui/icons/Public";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PersonIcon from "@material-ui/icons/Person";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import Alert from "@mui/material/Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  tableContainer: {
    width: "50%",
    marginBottom: theme.spacing(2),
  },
  tableRow: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const PlayerProfile = () => {
  const classes = useStyles();
  const { playerId } = useParams();
  const { loading, error, data } = useQuery(QUERY_PLAYER, {
    variables: { profileId: playerId },
  });

  if (error) {
    console.log(error);
  }

  const {
    _id,
    firstName,
    lastName,
    age,
    position,
    skills,
    dominantFoot,
    team,
    country,
  } = data?.playerProfile || {};

  return (
    <div>
      {loading ? (
        <Typography sx={{ width: "100%" }}>
          <LinearProgress />
        </Typography>
      ) : error ? (
        <Typography sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Error fetching player profiles.</Alert>
        </Typography>
      ) : (
        <div className={classes.root}>
          <Typography variant="h2">
            {firstName} {lastName}
          </Typography>

          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table aria-label="player-info-table">
              <TableBody>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                    <PublicIcon />
                  </TableCell>
                  <TableCell>Country</TableCell>
                  <TableCell>{country}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                    <DirectionsRunIcon />
                  </TableCell>
                  <TableCell>Dominant Foot</TableCell>
                  <TableCell>{dominantFoot}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                    <SportsKabaddiIcon />
                  </TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>{skills}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                    <PersonIcon />
                  </TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>{position}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                    <AccessTimeIcon />
                  </TableCell>
                  <TableCell>Age</TableCell>
                  <TableCell>{age}</TableCell>
                </TableRow>
                <TableRow className={classes.tableRow}>
                  <TableCell>
                    <GroupIcon />
                  </TableCell>
                  <TableCell>Team</TableCell>
                  <TableCell>{team}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </div>
  );
};

export default PlayerProfile;
