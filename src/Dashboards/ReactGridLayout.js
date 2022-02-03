import React from "react";
import { Typography } from "@material-ui/core";
export const ReactGridLayout = ({ layout } = {}) => {
  return (
    <Typography variant="h5">
      {`React Grid layout ${layout.dashboardName}`}
    </Typography>
  );
};
