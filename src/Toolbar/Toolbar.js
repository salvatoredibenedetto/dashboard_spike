import React from "react";
import clsx from "clsx";
import { Toolbar, IconButton, Typography } from "@material-ui/core";
import { Menu, Dashboard, DashboardTwoTone } from "@material-ui/icons";
import { useStyles } from "../styles";

const TopToolbar = ({ setOpen, open }) => {
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        onClick={handleDrawerOpen}
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open
        })}
      >
        <Menu />
      </IconButton>
      <IconButton
        color="inherit"
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open
        })}
      >
        <Dashboard />
      </IconButton>
      <IconButton
        color="inherit"
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open
        })}
      >
        <DashboardTwoTone />
      </IconButton>
    </Toolbar>
  );
};

export default TopToolbar;
