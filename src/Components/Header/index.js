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
      p={3}>
      <Logo />
      <span>Hello, Sreejith</span>
    </Box>
  );
}

export default Header;
