import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphQL/mutations";
import Auth from "../utils/auth";

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
  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await addUser({
        variables: {
          ...formState,
        },
      });

      Auth.login(data.addUser.token);
    } catch (error) {
      console.error({ error });
    }
    setFormState({
      email: "",
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <Typography variant="h4" style={{ margin: "20px" }} align="center">
        Register
      </Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          name="username"
          type="text"
          value={formState.username}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formState.password}
          onChange={handleChange}
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
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Register;
