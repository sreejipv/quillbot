import React from 'react';
import Header from '../Components/Header';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import Banner from "../Components/Banner";
import { makeStyles } from '@material-ui/core/styles';
import Plans from "../Components/Plans";
import Report from "../Components/Report";
import VideoBanner from "../Components/VideoBanner"
import BottomCta from "../Components/BottomCta"
import MobileBanner from '../Components/MobileBanner';


function Home(props) { 

    return (

        <>
            <Header />
            <Box display={{ xs: 'none', sm: 'block' }}>
                <Banner/>               
                <Plans/>
                <VideoBanner/>
                <Report/>
                <BottomCta/>
            </Box>
            <Box display={{ xs: 'block', sm: 'none' }}>
                <MobileBanner/>

            </Box>

                

            
        </>
    );
}

export default Home;