import React from "react";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
      textTransform: 'capitalize',
      boxShadow: "none",
      "&:hover": {
        backgroundColor: "#15c39a",
        boxShadow: "none",

    }
    },
    disabled: {
      cursor: 'no-drop !important',
      backgroundColor: '#f0f2fc !important',
      color: '#c6cbde',
      "&:hover": {
        backgroundColor: "#f0f2fc",
        boxShadow: "none",

    }
    },
  });

function ThemeButton({props, copy, width, disabled}) {
  const classes = useStyles(props);

  return (
  <Button 
   disabled={disabled ? true : false}
    variant="contained" 
    color="primary" 
    style={{width: width,     height: '48px'}}
    className={ `${classes.root} ${disabled && classes.disabled}` }> 
    <Box 
      fontWeight="700"
      lineHeight={2}>
      {copy}
    </Box>
  </Button>
  );
}

export default ThemeButton;
