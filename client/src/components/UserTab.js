import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import {
  Tabs,
  Tab,
  Button,
  FormControl,
  InputLabel,
  Input,
} from "@material-ui/core";

import EditIcon from "@material-ui/icons/Edit";

import TabPanel from "./TabPanel";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const UserTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Settings" {...a11yProps(0)} />
          <Tab label="Your Players" {...a11yProps(1)} />
        </Tabs>
      </div>
      <div>
        <TabPanel value={value} index={0}>
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
        </TabPanel>
      </div>
    </div>
  );
};

export default UserTab;
