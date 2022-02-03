import React from "react";
import { List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { YouTube, Instagram, Facebook } from "@material-ui/icons";

const Dashboards = { YouTube, Instagram, Facebook };

const DrawerButtons = ({ handleSetDashboard }) => {
  React.useEffect(() => {
    handleSetDashboard(Object.keys(Dashboards)[0]);
  }, []);
  return (
    <List>
      {Object.keys(Dashboards).map((name, index) => {
        const Dashboard = Dashboards[name];
        const handleOnClick = () => {
          handleSetDashboard(name);
        };

        return (
          <ListItem button key={name} onClick={handleOnClick}>
            <ListItemIcon>{Dashboard && <Dashboard />}</ListItemIcon>
            <ListItemText primary={name} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default DrawerButtons;
