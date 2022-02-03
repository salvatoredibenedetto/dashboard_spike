import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import React from "react";
import clsx from "clsx";
import { Drawer, AppBar, Divider, IconButton } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import TopToolbar from "./Toolbar/Toolbar";
import DrawerButtons from "./DrawerButtons/DrawerButtons";
import Dashboards from "./Dashboards";
import { useStyles } from "./styles";

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentDashboard, setCurrentDashboard] = React.useState();

  React.useEffect(() => {
    setCurrentDashboard(Object.keys(Dashboards)[0]);
  }, []);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const Dashboard = Dashboards[currentDashboard];
  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <TopToolbar setOpen={setOpen} open={open} />
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <DrawerButtons />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <div>{Dashboard && <Dashboard layout={{ prova: "si" }} />}</div>
      </main>
    </div>
  );
}
