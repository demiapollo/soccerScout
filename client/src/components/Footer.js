import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
    textAlign: "center",
    color: "#fff",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body1">
        Check out our GitHub repository for more information.
      </Typography>
      <Link
        href="https://github.com/demiapollo/soccerScout"
        target="_blank"
        rel="noopener"
        color="inherit"
      >
        GitHub Repository
      </Link>
    </footer>
  );
};

export default Footer;
