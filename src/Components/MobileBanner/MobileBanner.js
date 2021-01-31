import { Box } from '@material-ui/core';
import React from 'react';

import BannerOne from '../../assets/images/mobileBanner1.png'
import BannerTwo from '../../assets/images/mobileBanner2.png'
import BannerThree from '../../assets/images/mobileBanner3.png'
import BannerFour from '../../assets/images/mobileBanner4.png'

function MobileBanner(props) {
    return (
        <Box display="flex" overflow="scroll">
            <Box>
                <img src={BannerOne} style={{width: '95vw'}}/>
                <Box>Clear, confident communication</Box>
                <Box>Take the guesswork out of great writing.</Box>
            </Box>
            <Box>
                <img src={BannerTwo} style={{width: '95vw'}}/>
                <Box>Clear, confident communication</Box>
                <Box>Take the guesswork out of great writing.</Box>
            </Box>
            <Box>
                <img src={BannerThree} style={{width: '95vw'}}/>
                <Box>Clear, confident communication</Box>
                <Box>Take the guesswork out of great writing.</Box>
            </Box>
            <Box>
                <img src={BannerFour} style={{width: '95vw'}}/>
                <Box>Clear, confident communication</Box>
                <Box>Take the guesswork out of great writing.</Box>
            </Box>
        </Box>
    );
}

export default MobileBanner;