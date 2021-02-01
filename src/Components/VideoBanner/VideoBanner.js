import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import BgBanner from '../../assets/images/swooshBaner.png'
import VideoBannerImage from '../../assets/images/video.png'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bannerBg:{
        background: `no-repeat right -300px bottom -70px url(${BgBanner})`,
        backgroundColor:' #3659b5',
        display: '-webkit-box',
        display: '-moz-box',
        display:' -webkit-flex',
        display: '-ms-flexbox',
        display: 'box',
        display: 'flex',
        justifyContent: 'center',
        margin: '0 auto',
        padding: '96px 0'
    }
})

function VideoBanner(props) {
    let classes = useStyles(props)
    return (
        <>
        <Box className={classes.bannerBg} >
                <Box display="flex" flexDirection={{xs: 'column',sm:'row'}} alignItems="center" maxWidth={1080} width="100%" justifyContent="space-between">
                    <Box maxWidth="410px">
                        <Typography>
                            <Box fontSize="30px" fontWeight="700" color="#ffffff">Get the Job Done</Box>
                            <Box pt={3}></Box>
                            <Box fontSize="18px" fontWeight="400"  lineHeight="32px" color="#ffffff">Effective communication is the key to making things happen.</Box>
                        </Typography>
                    </Box>
                    <Box maxWidth={{xs: '300px', sm: '100%'}}>
                        <img style={{borderRadius: '10px',height: '100%', width: '100%'}} src={VideoBannerImage} />
                    </Box>
                </Box>
                    
        </Box>

        </>
    );
}

export default VideoBanner;