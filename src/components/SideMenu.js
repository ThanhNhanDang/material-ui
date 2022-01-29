import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexFirection: "column",
    position: "absolute",
    left: "0px",
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
});

const SideMenu = () => {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
};
export default SideMenu;
