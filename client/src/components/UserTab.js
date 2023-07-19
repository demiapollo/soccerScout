import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Tabs, Tab } from "@material-ui/core";

import TabPanel from "./TabPanel";

import Settings from "./Settings";

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
          <Tab label="Following" {...a11yProps(2)} />
        </Tabs>
      </div>
      <div>
        <TabPanel value={value} index={0}>
          <Settings />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <PlayerList /> */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <PlayerList /> */}
        </TabPanel>
      </div>
    </div>
  );
};

export default UserTab;
