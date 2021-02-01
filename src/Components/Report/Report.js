import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import CircularProgressBar from "../CircularProgressBar";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    display: "grid",
    alignItems: "center",
  },
  circle: {
    gridRow: 1,
    gridColumn: 1,
    display: "grid",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  bar: {
    gridRow: 1,
    gridColumn: 1,
    margin: "0 auto",
    zIndex: 1,
  },
  track: {
    gridRow: 1,
    gridColumn: 1,
    margin: "0 auto",
    color: "#000000",
  },
});

function Report(props) {
  let classes = useStyles(props);
  return (
    <>
      <Box display="flex" justifyContent="center" bgcolor="#f9faff">
        <Box
          display="flex"
          alignItems="flex-start"
          flexDirection="column"
          maxWidth={1080}
          width="100%"
          justifyContent="space-between"
          style={{padding:'64px 0 104px'}}
        >
          <Box fontSize="30px" color="#0e101a" fontWeight="700" textAlign={{xs: 'center', sm:'left'}}>Premium Customers Report Better Results</Box>
          <Box mt={3}></Box>
          <Box fontSize="18px" color="#0e101a" fontWeight="400" textAlign={{xs: 'center', sm:'left'}}>We routinely survey Grammarly users and have found that:</Box>
          <Box mt={5} pt={2}></Box>
          <Box display="flex" width="100%" alignItems="center" justifyContent="space-between" flexDirection={{xs: 'column', sm:'row'}}>
            
            <Box width="320px" display={{xs: 'flex', sm: 'block'}} flexDirection="column" justifyContent="center" alignItems="center" >
              <CircularProgressBar
                strokeWidth="4"
                sqSize="142"
                percentage={75}
              />
              <Box pt={3} mt={2}></Box>
              <Box lineHeight="28px" textAlign={{xs: 'center', sm: 'left'}}>76% of Grammarly users find writing more enjoyable.</Box>
            </Box>
            <Box height="30px" display={{xs: 'block', sm: 'none'}}></Box>

            <Box width="320px" display={{xs: 'flex', sm: 'block'}} flexDirection="column" justifyContent="center" alignItems="center" >
              <CircularProgressBar
                strokeWidth="4"
                sqSize="142"
                percentage={75}
              />
              <Box pt={3} mt={2}></Box>
              <Box lineHeight="28px"  textAlign={{xs: 'center', sm: 'left'}}>85% of Grammarly users are now stronger writers.</Box>
            </Box>
            
            <Box height="30px" display={{xs: 'block', sm: 'none'}}></Box>

            <Box width="320px" display={{xs: 'flex', sm: 'block'}} flexDirection="column" justifyContent="center" alignItems="center" >
              <CircularProgressBar
                strokeWidth="4"
                sqSize="142"
                percentage={75}
              />
              <Box pt={3} mt={2}></Box>
              <Box lineHeight="28px" textAlign={{xs: 'center', sm: 'left'}}>
                70% of Grammarly users reported an increased level of writing
                confidence.
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Report;
