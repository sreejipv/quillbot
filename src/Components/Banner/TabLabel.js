import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  border: {
    backgroundColor: "#e7e9f5",
    bordeRadius: "1px",
    height: "2px",
    width: "100%",
  },
  borderColor: {
    height: "2px",
    transition: "width 7s linear",
    width: "0",
    "&$active": {
      backgroundColor: "#0e101a",
      width: "100%",
    },
  },
  active: {
    // backgroundColor: "#0e101a ",
  },
  labelItem: {
    transition: "all .3s",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },
  },
  labelTitle: {
    "&$active": {
      color: "#0e101a",
    },
  },
});

function TabLabel({
  children,
  props,
  tabClick,
  active,
  title,
  subTitle,
  tabIndex,
}) {
  let classes = useStyles(props);

  function handleTab(value) {
    tabClick(value);
  }

  return (
    <Typography
      component="div"
      onClick={() => handleTab(tabIndex)}
      className={classes.labelItem}
    >
      <Box
        fontSize={16}
        color="#4a6ee0"
        textAlign="left"
        mt={3}
        fontWeight="700"
        className={`${classes.labelTitle} ${active && classes.active}`}
      >
        {title}
      </Box>
      <Box fontSize={14} textAlign="left" color="#6d758d" fontWeight="400">
        {subTitle}
      </Box>
      <Box py={2}></Box>
      <Box className={classes.border}>
        <Box
          className={`${classes.borderColor} ${active && classes.active}`}
        ></Box>
      </Box>
    </Typography>
  );
}

export default TabLabel;
