import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Tabs, Tab } from "@material-ui/core";

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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Profile Settings" {...a11yProps(0)} />
          <Tab label="Your Players" {...a11yProps(1)} />
        </Tabs>
      </div>
      <div>
        <TabPanel value={value} index={0}></TabPanel>
      </div>
    </div>
  );
};

export default UserTab;

{
  /* <div style={{ display: "flex", justifyContent: "center" }}>
<FormControl className={classes.form}>
  <InputLabel htmlFor="username">Username</InputLabel>
  <Input id="username" value="Thisismyusername" disabled />
</FormControl>
<EditIcon style={{ paddingTop: "60px" }} />
</div>
          <Button
          variant="contained"
          color="primary"
          className={classes.button}
        >
          Save Changes
        </Button> */
}
