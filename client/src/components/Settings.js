import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  Typography,
} from "@material-ui/core";

import { useMutation } from "@apollo/client";
import { UPDATE_USER } from "../graphQL/mutations";

import { useStoreContext } from "../context";
import { UPDATE_USER_PROFILE } from "../context/actionTypes";

import EditIcon from "@material-ui/icons/Edit";

const Settings = () => {
  const [state, dispatch] = useStoreContext();
  const { username, email } = state.userProfile;

  const [formState, setFormState] = useState({
    username,
    email,
  });

  const [enableUsername, setEnableUsername] = useState(true);
  const [enableEmail, setEnableEmail] = useState(true);

  const [updateUser, { error, data }] = useMutation(UPDATE_USER);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateUser({
        variables: { ...formState },
      });
      if (data) {
        dispatch({
          type: UPDATE_USER_PROFILE,
          payload: data.updateUser,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "180px",
      height: "100vh",
    },
    form: {
      width: "50%",
      marginBottom: "75px",
    },
    button: {
      width: "10%",
      height: "45px",
      marginTop: "50px",
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl className={classes.form}>
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          name="username"
          value={formState.username}
          onChange={(e) => {
            handleChange(e);
          }}
          disabled={enableUsername}
          endAdornment={
            <InputAdornment position="end">
              {" "}
              <Button
                onClick={() => {
                  setEnableUsername(!enableUsername);
                }}
              >
                <EditIcon />
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
      <FormControl className={classes.form}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input
          name="email"
          value={formState.email}
          onChange={(e) => {
            handleChange(e);
          }}
          disabled={enableEmail}
          endAdornment={
            <InputAdornment position="end">
              {" "}
              <Button
                onClick={() => {
                  setEnableEmail(!enableEmail);
                }}
              >
                <EditIcon />
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={(e) => {
          handleSave(e);
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default Settings;
