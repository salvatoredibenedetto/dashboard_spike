import React from "react";
import { List, ListItemIcon, ListItemText, ListItem } from "@material-ui/core";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

const DrawerButtons = () => {
  return (
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <AccessAlarm /> : <ThreeDRotation />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );
};

export default DrawerButtons;
