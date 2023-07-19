import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControl
        style={{
          width: "65%",
          marginTop: "300px",
        }}
      >
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

      <FormControl
        style={{
          width: "65%",
          marginTop: "60px",
        }}
      >
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
      <Button
        variant="contained"
        color="primary"
        style={{ width: "10%", height: "45px", marginTop: "50px" }}
      >
        Save
      </Button>
    </div>
  );
};

export default Settings;
