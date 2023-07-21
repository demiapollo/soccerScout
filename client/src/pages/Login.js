import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../graphQL/mutations";
import Auth from "../utils/auth";
import { Typography } from "@material-ui/core";

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

const Login = () => {
  const classes = useStyles();
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, _data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: {
          ...formState,
        },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <Typography variant="h4" style={{ margin: "20px" }} align="center">
        Login
      </Typography>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          required
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
        >
          Submit
        </Button>
        <Link to="/register">
          <Button className={classes.button} variant="outlined" color="primary">
            Don't have an account? Register here
          </Button>
        </Link>
      </form>
      {error && <div>{error.message}</div>}
    </div>
  );
};

export default Login;
