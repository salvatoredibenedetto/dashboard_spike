import React from "react";
import { List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { CalendarToday, Alarm, CloudUpload } from "@material-ui/icons";

const Dashboards = { CalendarToday, Alarm, CloudUpload };

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
