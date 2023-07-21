import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { useMutation, gql } from "@apollo/client";
import { LOGIN_USER } from "../graphQL/mutations";



// const LOGIN_USER = gql`
//   mutation LoginUser($email: String!, $password: String!) {
//     loginUser(email: $email, password: $password) {
//       token
//     }
//   }
// `;

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
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation(LOGIN_USER);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await loginUser({
        variables: {
          email: email,
          password: password,
        },
      });

      if (data && data.loginUser && data.loginUser.token) {
        history.push("/dashboard");
      } else {
        console.log("Authentication failed");
      }
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log("Login error:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form className={classes.root} onSubmit={handleSubmit}>
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
    </div>
  );
};

export default Login;
