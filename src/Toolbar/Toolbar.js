import React from "react";
import clsx from "clsx";
import { Toolbar, IconButton } from "@material-ui/core";
import { Menu, AccountBox, GridOn } from "@material-ui/icons";
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
        aria-label="open drawer"
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
        aria-label="open drawer"
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open
        })}
      >
        <AccountBox />
      </IconButton>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        className={clsx(classes.menuButton, {
          [classes.hide]: open
        })}
      >
        <GridOn />
      </IconButton>
    </Toolbar>
  );
};

export default TopToolbar;
