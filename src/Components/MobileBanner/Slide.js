import { Box } from "@material-ui/core";
import React, { useState } from "react";

import BannerOne from "../../assets/images/mobileBanner1.png";
import BannerTwo from "../../assets/images/mobileBanner2.png";
import BannerThree from "../../assets/images/mobileBanner3.png";
import BannerFour from "../../assets/images/mobileBanner4.png";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  arrowRight: {},
  arrowLeft: {},
  arrowContainner: {
    position: "absolute",
    borderRadius: "100px",
    height: "30px",
    width: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    top: "40%",
    background: "#15c399",
    color: '#ffffff',
    "&$arrowRight": {
      right: "10px",
    },
    "&$arrowLeft": {
      left: "10px",
    },
  },
});

function Slide({props, title, subTitle, bannerImage, display}) {
  let classes = useStyles(props);


  return (
  
    <Box
        width="100vw"
        height="400px"
        display={display}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height="330px" display="flex" flexDirection="column" justifyContent="center"><img src={bannerImage} style={{ width: "100vw" }} /></Box>
        <Box color="#0E101A" fontSize="21px" fontWeight="700">{title}</Box>
        <Box color="#0E101A" fontSize="16px" lineHeight="26px">{subTitle}</Box>
      </Box>
     
  );
}

export default Slide;
