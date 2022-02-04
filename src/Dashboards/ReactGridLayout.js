import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { d1, d2, d3 } from "../dataMock";
import _ from "lodash";

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveReactGridLayout = WidthProvider(Responsive);

export const ReactGridLayout = ({ layoutName } = {}) => {
  const dMap = { CalendarToday: d1, Alarm: d2, CloudUpload: d3 };
  const [layout, setLayout] = useState({ lg: layoutName && dMap[layoutName] });
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");

  useEffect(() => {
    setLayout({ lg: layoutName && dMap[layoutName] });
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
            <span className="text">Static - {i}</span>
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
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 3, sm: 2, xs: 1, xxs: 1 }}
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
  const random = _.map(_.range(0, 11), function (item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 1,
      h: y,
      i: i.toString(),
      static: false,
      isDraggable: true,
      isBounded: true
    };
  });

  const mock = [d1, d2, d3];
  const idx = Math.round(Math.random() * 2);
  console.log(idx);

  return mock[idx];
}
