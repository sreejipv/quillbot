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
                <Box height="48px" display={{xs: 'block', sm: 'none'}}></Box>
                <Typography component="div" >
                    <Box fontSize={{xs:'24px', sm:'30px'}} mx={{xs:'20px', sm: '0px'}} textAlign="center" fontWeight="700">
                        Up-Level Your Communication
                    </Box> 
                    <Box fontSize={18} textAlign="center" fontWeight="400" mt={2}  mx={{xs:'20px', sm: '0px'}}>
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