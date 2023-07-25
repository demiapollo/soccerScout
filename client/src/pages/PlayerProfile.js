import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PLAYER } from "../graphQL/queries";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import GroupIcon from "@material-ui/icons/Group";
import PublicIcon from "@material-ui/icons/Public";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import PersonIcon from "@material-ui/icons/Person";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";

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

  //   const [addComment] = useMutation(ADD_COMMENT, {
  //     refetchQueries: [{ query: GET_PLAYER, variables: { id: playerId } }],
  //   });

  //   const handleCommentChange = (e) => {
  //     setComment(e.target.value);
  //   };

  //   const handleSubmitComment = (e) => {
  //     e.preventDefault();
  //     addComment({
  //       variables: {
  //         playerId: playerId,
  //         comment: comment,
  //       },
  //     })
  //       .then(() => {
  //         setComment("");
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //   useEffect(() => {
  //     if (data && data.player) {
  //       console.log(data.player);
  //     }
  //   }, [data]);

  //   if (loading) {
  //     return <p>Loading...</p>;
  //   }

  //   if (error) {
  //     return <p>Error: {error.message}</p>;
  //   }

  //   if (!data || !data.player) {
  //     return <p>Player not found.</p>;
  //   }

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
        <Typography variant="h4" className={classes.title}>
          Loading...
        </Typography>
      ) : error ? (
        <Typography variant="body1">Error fetching player profiles.</Typography>
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

/* <div className={classes.infoContainer}>
              <HeightIcon className={classes.icon} />
              <Typography variant="body1">Height: {height}</Typography>
            </div>
      
            <div className={classes.infoContainer}>
              <FitnessCenterIcon className={classes.icon} />
              <Typography variant="body1">Weight: {weight}</Typography>
            </div> */

/* <div className={classes.commentsContainer}>
              <Typography variant="h3">Comments</Typography>
              {comments.map((comment) => (
                <div key={comment.id} className={classes.comment}>
                  <Typography variant="body1">{comment.text}</Typography>
                </div>
              ))}
            </div> */

/* <form onSubmit={handleSubmitComment}>
              <TextField
                value={comment}
                onChange={handleCommentChange}
                label="Add a comment"
                variant="outlined"
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Add Comment
              </Button>
          </form> */

export default PlayerProfile;
