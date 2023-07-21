import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PLAYER_PROFILE, ADD_COMMENT } from "../graphQL/queries"; // there is no add_Comment query
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HeightIcon from "@material-ui/icons/Height";
import FitnessCenterIcon from "@material-ui/icons/FitnessCenter";
import SportsSoccerIcon from "@material-ui/icons/SportsSoccer";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  infoContainer: {
    marginBottom: theme.spacing(2),
    display: "flex",
    alignItems: "center",
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  commentsContainer: {
    marginTop: theme.spacing(4),
  },
  comment: {
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const PlayerProfile = () => {
  const classes = useStyles();
  const { playerId } = useParams();
  const [comment, setComment] = useState("");
  const { loading, error, data } = useQuery(GET_PLAYER_PROFILE, {
    variables: { id: playerId },
  });

  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [{ query: GET_PLAYER_PROFILE, variables: { id: playerId } }],
  });

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    addComment({
      variables: {
        playerId: playerId,
        comment: comment,
      },
    })
      .then(() => {
        setComment("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (data && data.player) {
      console.log(data.player);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.player) {
    return <p>Player not found.</p>;
  }

  const { name, weight, age, height, team, comments } = data.player;

  return (
    <div className={classes.root}>
      <Typography variant="h2">{name}</Typography>

      <div className={classes.infoContainer}>
        <AccessTimeIcon className={classes.icon} />
        <Typography variant="body1">Age: {age}</Typography>
      </div>

      <div className={classes.infoContainer}>
        <HeightIcon className={classes.icon} />
        <Typography variant="body1">Height: {height}</Typography>
      </div>

      <div className={classes.infoContainer}>
        <FitnessCenterIcon className={classes.icon} />
        <Typography variant="body1">Weight: {weight}</Typography>
      </div>

      <div className={classes.infoContainer}>
        <SportsSoccerIcon className={classes.icon} />
        <Typography variant="body1">Team: {team}</Typography>
      </div>

      <div className={classes.commentsContainer}>
        <Typography variant="h3">Comments</Typography>
        {comments.map((comment) => (
          <div key={comment.id} className={classes.comment}>
            <Typography variant="body1">{comment.text}</Typography>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmitComment}>
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
      </form>
    </div>
  );
};

export default PlayerProfile;
