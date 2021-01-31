import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import PlansWrapper from './PlansWrapper'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    plansContainer:{
        margin: '0 auto',
        maxWidth: '674px',
        width: '100%',
    }
})

function Plans(props) {
    let classes = useStyles(props);
    return (
        <>  
            <Box className={classes.plansContainer}>
                <Typography component="div" >
                    <Box fontSize={30} textAlign="center" fontWeight="700">
                        Up-Level Your Communication
                    </Box> 
                    <Box fontSize={18} textAlign="center" fontWeight="400" mt={2}>
                        Unlock Grammarly Premium’s advanced features and suggestions.
                    </Box>  
                    <Box mt={4} pt={3}></Box>
                </Typography>
                <PlansWrapper/> 
                <Box height="48px"></Box>
            </Box>
            
        </>
    );
}

export default Plans;