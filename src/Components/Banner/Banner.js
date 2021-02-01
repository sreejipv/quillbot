import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import BgHome from "../../assets/images/swoosh.png";

import TabLabel from "./TabLabel";
import ThemeButton from "../ThemeButton";
import TabContent from "./TabContent";
import MobileBanner from '../MobileBanner';

import { ReactComponent as BannerOne } from "../../assets/images/banner1.svg";
import { ReactComponent as BannerTwo } from "../../assets/images/banner2.svg";
import { ReactComponent as BannerThree } from "../../assets/images/banner3.svg";
import { ReactComponent as BannerFour } from "../../assets/images/banner4.svg";
import { ReactComponent as SubBannerOne } from "../../assets/images/subbanner1.svg";
import { ReactComponent as SubBannerTwo } from "../../assets/images/subbanner2.svg";
import { ReactComponent as SubBannerThree } from "../../assets/images/subbanner3.svg";
import { ReactComponent as SubBannerFour } from "../../assets/images/subbanner4.svg";

import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  bannerContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    minWidth: "640px",
    width: "640px",
  },
  root: {
    boxSizing: 'border-box',
    backgroundImage: `url(${BgHome})`,
    backgroundPositionX: "-150px",
    backgroundPositionY: "-70px",
    backgroundSize: "initial",
    backgroundRepeatX: "no-repeat",
    backgroundRepeatY: "no-repeat",
    backgroundAttachment: "initial",
    backgroundOrigin: "initial",
    backgroundClip: "initial",
    backgroundColor: "initial",
    display: "flex",
    height: "calc(100vh - 80px)",
    justifyContent: "center",
    minHeight: "680px",
    padding: "20px 0",
  },
});

function Banner(props) {
  let classes = useStyles(props);

  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (activeTab === "" && setActiveTab(0));
    const timer = setTimeout(() => {
      setActiveTab(activeTab + 1);
    }, 7000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === 4) {
      setActiveTab(0);
    }
  }, [activeTab]);
  console.log("activeTab", activeTab);

  function handleTabclick(value) {
    setActiveTab(value);
  }

  return (
    <Box component="div" className={classes.root} >
      <Box maxWidth="1080px" display="flex" flexDirection="column">
        <Typography component="div">
          <Box fontSize={{xs: '30px', sm: '44px'}} textAlign="center" fontWeight="700">
            Aim High With Brilliant Writing
          </Box>
        </Typography>
        <Box height="24px"></Box>
        <Box alignItems="center" display="flex" justifyContent="center">
          <ThemeButton
            copy="Upgrade to Grammarly Premium"
            disabled={false}
            width="284px"
          />
        </Box>

        <Box display={{ xs: 'block', sm: 'none' }} >
        <MobileBanner/> 
        </Box>
        
        <Box display={{ xs: 'none', sm: 'flex' }}  flexDirection="column" justifyContent="center" height="100%">
          <Box display="flex" justifyContent="space-between">
            <Box className={classes.bannerContainer}>
              <TabContent
                visible={activeTab === 0 && true}
                mainBanner={<BannerOne />}
                subBanner={<SubBannerOne />}
                subBannnerBottom={16}
              />

              <TabContent
                visible={activeTab === 1 && true}
                mainBanner={<BannerTwo />}
                subBanner={<SubBannerTwo />}
                subBannnerBottom={16}
              />

              <TabContent
                visible={activeTab === 2 && true}
                mainBanner={<BannerThree />}
                subBanner={<SubBannerThree />}
                subBannnerBottom={48}
              />

              <TabContent
                visible={activeTab === 3 && true}
                mainBanner={<BannerFour />}
                subBanner={<SubBannerFour />}
                subBannnerBottom={48}
              />
            </Box>
            <Box>
              <TabLabel
                tabClick={handleTabclick}
                tabIndex={0}
                active={activeTab === 0 && true}
                title="Clear, confident communication"
                subTitle="Take the guesswork out of great writing."
              />

              <TabLabel
                tabClick={handleTabclick}
                tabIndex={1}
                active={activeTab === 1 && true}
                title="Comprehensive real-time feedback"
                subTitle="Effective writing takes more than good grammar."
              />

              <TabLabel
                tabClick={handleTabclick}
                tabIndex={2}
                active={activeTab === 2 && true}
                title="Support you can rely on"
                subTitle="Write with a second pair of eyes that never gets tired."
              />

              <TabLabel
                tabClick={handleTabclick}
                tabIndex={3}
                active={activeTab === 3 && true}
                title="Strike the right tone"
                subTitle="Make the best impression, every time."
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
