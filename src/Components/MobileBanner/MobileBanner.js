import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Slide from "./Slide";
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
    color: "#ffffff",
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

      <Slide
        display={activeTab === 0 ? "flex" : "none"}
    title="Comprehensive real-time feedback"
                subTitle="Effective writing takes more than good grammar."
        bannerImage={BannerOne}
      />

      <Slide
        display={activeTab === 1 ? "flex" : "none"}
        title="Comprehensive real-time feedback"
        subTitle="Effective writing takes more than good grammar."
        bannerImage={BannerTwo}
      />

      <Slide
        display={activeTab === 2 ? "flex" : "none"}
        title="Support you can rely on"
        subTitle="Write with a second pair of eyes that never gets tired."
        bannerImage={BannerThree}
      />

      <Slide
        display={activeTab === 3 ? "flex" : "none"}
        title="Strike the right tone"
        subTitle="Make the best impression, every time."
        bannerImage={BannerFour}
      />
    </Box>
  );
}

export default MobileBanner;
