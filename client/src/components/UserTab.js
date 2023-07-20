import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import { Tabs, Tab } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import DashboardIcon from "@material-ui/icons/Dashboard";

import TabPanel from "./TabPanel";

import Settings from "./Settings";
import PlayerList from "./PlayerList";
import PlayerForm from "./PlayerForm";

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
          <Tab label="Dashboard" icon={<DashboardIcon />} {...a11yProps(0)} />
          <Tab label="Create" icon={<AddIcon />} {...a11yProps(1)} />
          <Tab label="Following" icon={<StarIcon />} {...a11yProps(2)} />
          <Tab label="Settings" icon={<SettingsIcon />} {...a11yProps(3)} />
        </Tabs>
      </div>
      <div>
        <TabPanel value={value} index={0}>
          <PlayerList dashboard players={["Messi", "Ronaldo", "Mbappe"]} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PlayerForm />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <PlayerList following={["Neymar", "De Bruyne", "Lewandowski"]} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Settings />
        </TabPanel>
      </div>
    </div>
  );
};

export default UserTab;
