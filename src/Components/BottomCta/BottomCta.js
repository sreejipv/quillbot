import React from 'react';
import BgBanner from '../../assets/images/swooshBottom.png'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import ThemeButton from '../../Components/ThemeButton'
const useStyles = makeStyles({
    bannerBg:{
        background: `no-repeat left -200px bottom -90px url(${BgBanner})`,
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '492px'
    }
})
function BottomCta(props) {
    let classes = useStyles(props)
    return (
        <Box className={classes.bannerBg}>
            <Box>
                <Box fontSize="44px"  fontWeight="700" color="#0e101a" textAlign="center">
                    Take Your Writing from Good to Great    
                </Box>
                <Box height="16px"></Box>
                <Box fontSize="20px" color="#0e101a"  fontWeight="400" textAlign="center">
                    Unlock Grammarly Premium’s advanced features to up-level your communication.    
                </Box>
                <Box height="24px"></Box>
                <Box display="flex" justifyContent="center">
                    <ThemeButton copy="Upgrade to Grammarly Premium" width="284px"/>    
                </Box>
            </Box>
        </Box>
    );
}

export default BottomCta;