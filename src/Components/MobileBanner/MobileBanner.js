import { Box } from "@material-ui/core";
import React, { useState } from "react";

import BannerOne from "../../assets/images/mobileBanner1.png";
import BannerTwo from "../../assets/images/mobileBanner2.png";
import BannerThree from "../../assets/images/mobileBanner3.png";
import BannerFour from "../../assets/images/mobileBanner4.png";
import { ReactComponent as LeftArrow } from "../../assets/images/leftArrow.svg";
import { ReactComponent as RightArrow } from "../../assets/images/rightArrow.svg";
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

function MobileBanner(props) {
  let classes = useStyles(props);
  const [activeTab, setActiveTab] = useState(0);

  function clickLeft() {
    console.log(activeTab);
    if (activeTab === 3) {
      setActiveTab(0);
    } else {
      setActiveTab(activeTab + 1);
    }
  }
  function clickRight() {
    console.log(activeTab);

    if (activeTab === 0) {
      setActiveTab(3);
    } else {
      setActiveTab(activeTab - 1);
    }
  }

  return (
    <Box display="flex" overflow="scroll" position="relative">
      <Box>
        <Box
          className={`${classes.arrowContainner} ${classes.arrowLeft}`}
          onClick={clickLeft}
        >
          <KeyboardArrowLeftIcon width="10px" />
        </Box>
        <Box
          className={`${classes.arrowContainner} ${classes.arrowRight}`}
          onClick={clickRight}
        >
          <KeyboardArrowRightIcon width="10px" />
        </Box>
      </Box>

      <Box
        width="100vw"
        height="400px"
        display={activeTab === 0 ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height="330px" display="flex" flexDirection="column" justifyContent="center"><img src={BannerOne} style={{ width: "100vw" }} /></Box>
        <Box color="#0E101A" fontSize="21px" fontWeight="700">Clear, confident communication</Box>
        <Box color="#0E101A" fontSize="16px" lineHeight="26px">Take the guesswork out of great writing.</Box>
      </Box>

      <Box
        width="100vw"
        height="400px"
        display={activeTab === 1 ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height="330px" display="flex" flexDirection="column" justifyContent="center"><img src={BannerTwo} style={{ width: "95vw" }} /></Box>
        <Box color="#0E101A" fontSize="21px" fontWeight="700">Clear, confident communication</Box>
        <Box color="#0E101A" fontSize="16px" lineHeight="26px">Take the guesswork out of great writing.</Box>
      </Box>
      <Box
        width="100vw"
        height="400px"
        display={activeTab === 2 ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height="330px" display="flex" flexDirection="column" justifyContent="center"><img src={BannerThree} style={{ width: "95vw" }} /></Box>
        <Box color="#0E101A" fontSize="21px" fontWeight="700">Clear, confident communication</Box>
        <Box color="#0E101A" fontSize="16px" lineHeight="26px">Take the guesswork out of great writing.</Box>
      </Box>
      <Box
        width="100vw"
        height="400px"
        display={activeTab === 3 ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box height="330px" display="flex" flexDirection="column" justifyContent="center" display="flex" flexDirection="column" justifyContent="center"><img src={BannerFour} style={{ width: "95vw" }} /></Box>
        <Box color="#0E101A" fontSize="21px" fontWeight="700">Clear, confident communication</Box>
        <Box color="#0E101A" fontSize="16px" lineHeight="26px">Take the guesswork out of great writing.</Box>
      </Box>
    </Box>
  );
}

export default MobileBanner;
