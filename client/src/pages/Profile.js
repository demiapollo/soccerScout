import React from "react";
import { useQuery } from "@apollo/client";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Tabs,
  Tab,
  FormControl,
  TextField,
  InputLabel,
  Input,
  IconButton,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import Avatar from "@material-ui/core/Avatar";
import { Navigate, Link, useParams } from "react-router-dom";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      // margin: theme.spacing(3),
      // border only on the left and right side
      borderLeft: "1px solid #000000",
      borderRight: "1px solid #000000",
    },
    icon: {
      height: "100px",
      width: "100px",
      paddingTop: theme.spacing(6),
      margin: theme.spacing(6),
    },
  }));

  const classes = useStyles();

  // const { loading, data, error } = useQuery(QUERY_ME);

  // if (loading) return <div>Loading...</div>;

  // if (error) {
  //     return <Navigate to="/login" />;
  // }

  // const { username, following, createdPlayers} = data?.user || {};

  return (
    <div>
      <Grid container>
        <Grid
          container
          direction="column"
          alignContent="center"
          justifyContent="center"
          xs={3}
          className={classes.root}
        >
          <PersonIcon className={classes.icon} />

          <Typography variant="h4" align="center">
            User
          </Typography>
        </Grid>
        <Grid
          container
          xs={6}
          direction="column"
          className={classes.root}
        ></Grid>
        <Grid
          container
          direction="column"
          alignContent="center"
          justifyContent="center"
          xs={3}
          className={classes.root}
        >
          <Typography variant="h4" className={classes.header} align="center">
            {" "}
            BUTTON FOR ADDING PLAYERS{" "}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;

{
  //   <div>
  //   <Tabs
  //     value={value}
  //     onChange={handleChange}
  //     aria-label="basic tabs example"
  //   >
  //     <Tab label="Profile Settings" {...a11yProps(0)} />
  //     <Tab label="Your Players" {...a11yProps(1)} />
  //   </Tabs>
  // </div>
  /* <Grid className={classes.info}>
<CustomTabPanel value={value} index={0}>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <FormControl className={classes.form}>
      <InputLabel htmlFor="username">Username</InputLabel>
      <Input id="username" value="Thisismyusername" disabled />
    </FormControl>
    <EditIcon style={{ paddingTop: "60px" }} />
  </div>
  <div style={{ display: "flex", justifyContent: "center" }}>
    <FormControl className={classes.form}>
      <InputLabel htmlFor="email">Email</InputLabel>
      <Input id="email" value="asdjflasfj@asdfasdf.com" disabled />
    </FormControl>
    <EditIcon style={{ paddingTop: "60px" }} />
  </div>
  <Button
    variant="contained"
    color="primary"
    className={classes.button}
  >
    Save Changes
  </Button>
</CustomTabPanel>
</Grid> */
}
