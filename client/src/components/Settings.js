import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  FormControl,
  InputLabel,
  Input,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";

const Settings = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <FormControl
        style={{
          width: "65%",
          marginTop: "60px",
        }}
      >
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          value="Thisismyusername"
          disabled
          endAdornment={
            <InputAdornment position="end">
              {" "}
              <Button>
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
        <InputLabel htmlFor="username">Username</InputLabel>
        <Input
          id="username"
          value="Thisismyusername"
          disabled
          endAdornment={
            <InputAdornment position="end">
              {" "}
              <Button>
                <EditIcon />
              </Button>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button variant="contained" color="primary" style={{ marginTop: "35px" }}>
        Save Changes
      </Button>
    </div>
  );
};

export default Settings;
