import React from "react";
import Box from "@material-ui/core/Box";
import { ReactComponent as Logo } from "../../assets/logo/grammarly_logo.svg";

function Header(props) {
  return (
    <Box
      component="div"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      display="flex"
      style={{padding: '24px'}}>
      <Logo />
      <Box fontWeight="700" fontSize="14px" minWidth="70px" textAlign="center">Log in</Box>
    </Box>
  );
}

export default Header;
