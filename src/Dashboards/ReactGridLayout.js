import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import _ from "lodash";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const ReactGridLayout = ({ layoutName } = {}) => {
  const [layout, setLayout] = useState({ lg: generateLayout() });
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");

  useEffect(() => {
    setLayout({ lg: generateLayout() });
  }, [layoutName]);

  const onBreakpointChange = (breakpoint) => {
    //console.log(breakpoint, currentBreakpoint);
    setCurrentBreakpoint(breakpoint);
  };

  const handleOnLayoutChange = (l) => {
    // Should call api to save new layout on user settings
    console.log("CHANGED: ", l);
  };

  const generateDOM = () => {
    return _.map(layout.lg, function (l, i) {
      return (
        <div key={i} className={l.static ? "static" : ""}>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {i}
            </span>
          ) : (
            <span className="text">{i}</span>
          )}
        </div>
      );
    });
  };

  return (
    <>
      <Typography variant="h5">{`React Grid layout ${layoutName}`}</Typography>

      <ResponsiveReactGridLayout
        layouts={layout}
        onBreakpointChange={onBreakpointChange}
        onLayoutChange={handleOnLayoutChange}
        // WidthProvider option
        measureBeforeMount={false}
        // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
        // and set `measureBeforeMount={true}`.
        // useCSSTransforms={mounted}
        preventCollision={false}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </>
  );
};

ReactGridLayout.propTypes = {
  onLayoutChange: PropTypes.func.isRequired
};

ReactGridLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  initialLayout: generateLayout()
};

function generateLayout() {
  return _.map(_.range(0, 25), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}
