import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";

const Settings = () => {
  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" value="Thisismyusername" disabled />
        </FormControl>
        <EditIcon style={{ paddingTop: "60px" }} />
        <FormControl>
          <InputLabel htmlFor="username">Username</InputLabel>
          <Input id="username" value="Thisismyusername" disabled />
        </FormControl>
        <EditIcon style={{ paddingTop: "60px" }} />
      </div>
      <Button variant="contained" color="primary">
        Save Changes
      </Button>
    </div>
  );
};

export default Settings;
