import React, { useState } from "react";
import ListItem from "./ListItem";
import PremiumList from './PremiumList'
import FreeList from './FreeList'
import { Box, Button, Tooltip, Typography } from "@material-ui/core";
import ThemeButton from "../ThemeButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  planSection: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    padding: "0 32px",
  },
});

function Plans(props) {
  const [open, setOpen] = useState(true);

  let classes = useStyles(props);
  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Box className={classes.planSection}>
          <Box
            style={{ height: "170px" }}
            display="flex"
            flexDirection="column"
          >
            <Typography>
              <Box fontSize="11px" fontWeight="400" color="#6d758d">
                FOR CASUAL WRITING
              </Box>
              <Box pt={1}></Box>
              <Box fontSize="22px" fontWeight="700" color="#0e101a">
                FREE
              </Box>
              <Box pt={1}></Box>
              <Box fontSize="15px" fontWeight="400" color="#0e101a">
                Basic writing suggestions.
              </Box>
            </Typography>
            <Box style={{ flexGrow: "1" }}></Box>
            <ThemeButton copy="Included In Premium" disabled={true} />
          </Box>
          <Box pt={3}></Box>

          <FreeList/>

          {/* <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title="Hover to learn more"
            arrow
            placement="right"
          >
            <Box m={2} style={{ width: "10px" }}></Box>
          </Tooltip> */}


        </Box>

        <Box className={classes.planSection}>
          <Box
            style={{ height: "170px" }}
            display="flex"
            flexDirection="column"
          >
            <Typography>
              <Box fontSize="11px" fontWeight="400" color="#6d758d">
                FOR WORK OR SCHOOL
              </Box>
              <Box fontSize="22px" fontWeight="700" color="#0e101a">
                Premium
              </Box>
              <Box fontSize="15px" fontWeight="400" color="#0e101a">
                Style, tone, and clarity improvements for writing at work and
                school.
              </Box>
            </Typography>
            <Box style={{ flexGrow: "1" }}></Box>
            <ThemeButton copy="Upgrade to Grammarly Premium" disabled={false} />
          </Box>
          <Box pt={3}></Box>

          <PremiumList/>
        </Box>
      </Box>
    </>
  );
}

export default Plans;
