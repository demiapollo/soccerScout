import {
  Button,
  FormControl,
  Input,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  InputLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";

import { useState } from "react";

const PlayerForm = () => {
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [positionInput, setPositionInput] = useState("");
  const [dominantFootInput, setDominantFootInput] = useState("");
  const [teamInput, setTeamInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  const [skillsInput, setSkillsInput] = useState("");

  const handleChange = (event, setter) => {
    setter(event.target.value);
  };

  const useStyles = makeStyles((_theme) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: "100vh",
      marginTop: "75px",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "65%",
    },

    form: {
      width: "40%",
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
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            id="firstName"
            value={firstNameInput}
            onChange={(event) => handleChange(event, setFirstNameInput)}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <Input
            id="lastName"
            value={lastNameInput}
            onChange={(event) => handleChange(event, setLastNameInput)}
          />
        </FormControl>
      </div>
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="position">Position</InputLabel>
          <Select
            id="position"
            value={positionInput}
            onChange={(event) => handleChange(event, setPositionInput)}
          >
            <MenuItem value="Goalkeeper">Goalkeeper</MenuItem>
            <MenuItem value="Right Fullback">Right Fullback</MenuItem>
            <MenuItem value="Left Fullback">Left Fullback</MenuItem>
            <MenuItem value="Center Back">Center Back</MenuItem>
            <MenuItem value="Defensive Midfielder">
              Defensive Midfielder
            </MenuItem>
            <MenuItem value="Left Midfielder">Left Midfielder</MenuItem>
            <MenuItem value="Central Midfielder">Central Midfielder</MenuItem>
            <MenuItem value="Right Midfielder">Right Midfielder</MenuItem>
            <MenuItem value="Attacking Midfielder">
              Attacking Midfielder
            </MenuItem>
            <MenuItem value="Right Winger">Right Winger</MenuItem>
            <MenuItem value="Left Winger">Left Winger</MenuItem>
            <MenuItem value="Striker">Striker</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="dominantFoot">Dominant Foot</InputLabel>
          <Select
            id="dominantFoot"
            value={dominantFootInput}
            onChange={(event) => handleChange(event, setDominantFootInput)}
          >
            <MenuItem value="Right">Right</MenuItem>
            <MenuItem value="Left">Left</MenuItem>
            <MenuItem value="Both">Both</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={classes.container}>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="team">Team</InputLabel>
          <Input
            id="team"
            value={teamInput}
            onChange={(event) => handleChange(event, setTeamInput)}
          />
        </FormControl>
        <FormControl className={classes.form}>
          <InputLabel htmlFor="country">Country</InputLabel>
          <Select
            id="country"
            value={countryInput}
            onChange={(event) => handleChange(event, setCountryInput)}
          >
            <MenuItem value="Argentina">Argentina</MenuItem>
            <MenuItem value="Brazil">Brazil</MenuItem>
            <MenuItem value="England">England</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="Italy">Italy</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
            <MenuItem value="United States">United States</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={{ width: "75%", display: "flex", justifyContent: "center" }}>
        <FormControl className={classes.form}>
          <TextField
            id="skills"
            label="Notable Skills"
            multiline
            value={skillsInput}
            onChange={(event) => handleChange(event, setSkillsInput)}
          />
        </FormControl>
      </div>
      <Button variant="contained" color="primary" className={classes.button}>
        Create
      </Button>
    </div>
  );
};

export default PlayerForm;
