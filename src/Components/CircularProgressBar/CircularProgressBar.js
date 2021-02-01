import React, { useLayoutEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  circleBackground: {
    fill: "none",
    stroke: "#ddd",
  },
  circleProgress: {
    fill: "none",
    stroke: "#15c399",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  },
  circleText: {
    fontSize: "40px",
    fontWeight: "600",
    fill: "#000000",
  },
});

function CircularProgressBar({ props, sqSize, strokeWidth, percentage }) {
  const [counter, setCounter] = useState(0);

  let classes = useStyles(props);
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * counter) / 100;

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      if (counter < percentage) {
        setCounter(counter + 1);
      }
    }, 30);
    return () => clearTimeout(timer);
  }, [counter]);

  useLayoutEffect(() => {
    if (counter === percentage) {
      setCounter(percentage);
    }
  }, [counter]);

  return (
    <div>
      <svg width={sqSize} height={sqSize} viewBox={viewBox}>
        <circle
          className={classes.circleBackground}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
        />
        <circle
          className={classes.circleProgress}
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          className={classes.circleText}
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${counter}%`}
        </text>
      </svg>
    </div>
  );
}

export default CircularProgressBar;
