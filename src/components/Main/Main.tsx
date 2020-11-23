// ext deps
import * as React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

// styles
import { classes } from "./Main.styles";
const useStyles = makeStyles(classes);

const Main = () => {
  const classes = useStyles();
  return <Box className={classes.root}>This is a new micro-ui.</Box>;
};

export default Main;
