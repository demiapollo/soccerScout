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

import EditIcon from "@material-ui/icons/Edit";

const Settings = () => {
  const [initialUsername, setInitialUsername] = useState("ThisIsAnExample");
  const [initialEmail, setInitialEmail] = useState(
    "ThisIsAnExampleEmail@email.com"
  );
  const [usernameInput, setUsernameInput] = useState(initialUsername);
  const [emailInput, setEmailInput] = useState(initialEmail);
  const [enableUsername, setEnableUsername] = useState(true);
  const [enableEmail, setEnableEmail] = useState(true);

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
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
          id="username"
          value={usernameInput}
          onChange={(e) => {
            setUsernameInput(e.target.value);
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
          id="email"
          value={emailInput}
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
      <Button variant="contained" color="primary" className={classes.button}>
        Save
      </Button>
    </div>
  );
};

export default Settings;
