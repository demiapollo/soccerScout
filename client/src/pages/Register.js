import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
  },

  button: {
    margin: theme.spacing(2),
    color: "white",
    backgroundColor: "#3e6fbd",
    "&:hover": {
      backgroundColor: "#3f51b5",
      color: "white",
    },
  },
}));

const Register = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <h2>Register</h2>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
        />
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <Button
          id="registerButton"
          className={classes.button}
          variant="outlined"
          color="primary"
          type="submit"
        >
          Register
        </Button>
        <Link to="/login">
          <Button
            id="loginButton"
            className={classes.button}
            variant="outlined"
            color="primary"
          >
            Already have an account? Login
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
