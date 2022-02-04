import React, { useState, useEffect, createRef, useRef } from "react";
import { Typography } from "@material-ui/core";
import { GridStack } from "gridstack";
import "gridstack/dist/h5/gridstack-dd-native";
import "gridstack/dist/gridstack.min.css";
import "../static.css";

export const GridsterLayout = ({ layoutName } = {}) => {
  const gridRef = useRef();

  const [state, setState] = useState({
    count: 0,
    info: "",
    items: [
      { x: 2, y: 1, h: 2 },
      { x: 2, y: 4, w: 3 },
      { x: 4, y: 2 },
      { x: 3, y: 1, h: 2 },
      { x: 0, y: 6, w: 2, h: 2 }
    ]
  });

  useEffect(() => {
    gridRef.current =
      gridRef.current ||
      GridStack.init(
        {
          float: true,
          cellHeight: "70px",
          minRow: 1
        },
        ".uncontrolled"
      );

    const grid = gridRef.current;

    grid.load(state.items);

    grid.on("dragstop", (event, element) => {
      const node = element.gridstackNode;
      setState((prevState) => ({
        ...prevState,
        info: `you just dragged node #${node.id} to ${node.x},${node.y} – good job!`
      }));

      let timerId;
      window.clearTimeout(timerId);
      timerId = window.setTimeout(() => {
        setState((prevState) => ({
          ...prevState,
          info: ""
        }));
      }, 2000);
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          const grid = gridRef.current;
          const node = state.items[state.count] || {
            x: Math.round(12 * Math.random()),
            y: Math.round(5 * Math.random()),
            w: Math.round(1 + 3 * Math.random()),
            h: Math.round(1 + 3 * Math.random())
          };
          node.id = node.content = String(state.count);
          setState((prevState) => ({
            ...prevState,
            count: prevState.count + 1
          }));
          grid.addWidget(node);
        }}
      >
        Add Widget
      </button>
      <div>{JSON.stringify(state)}</div>
      <section className="grid-stack uncontrolled"></section>
    </div>
  );
};
