import React from 'react';
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({

    mainBannerContainer:{
        height: '336px',
        position: 'relative',
        visibility: 'hidden',
        width: '0' ,
        "&$active":{
            visibility: 'visible',
            width: '600px'
        }
    },
    mainBanner: {
        opacity: '0',
        boxShadow: '0 14px 55px rgb(109 117 141 / 20%)',
        left: '48px',
        position: 'absolute',
        transform: 'translate3d(0,-30px,0)',
        transition: 'all .3s ease .2s',
        transitionProperty: 'opacity,transform',
        zIndex: '1',
        left: '48px',
        "&$active":{
            filter: 'none',
            opacity: '1',
            transform: 'translateZ(0)'
        },
    },

    subBanner: {
        borderRadius: '10px',
        boxShadow: '0 14px 55px rgb(109 117 141 / 20%)',
        filter: 'alpha(opacity=0)',
        opacity: '0',
        position: 'absolute',
        transform: 'translate3d(0,-30px,0)',
        transition: 'all .3s ease 1s',
        transitionProperty: 'opacity,transform',
        zIndex: '2',

        bottom: '16px',
        left: '100px',
        "&$active":{
            filter: 'none',
            opacity: '1',
            transform: 'translateZ(0)'
        },
    },
    active:{
        // filter: 'none',
        // opacity: '1',
        // transform: 'translateZ(0)'
    }

})

function TabContent({props, children, visible, mainBanner, subBanner, subBannnerBottom}) {
    let classes = useStyles(props);
    
    return (

        <>
           <Box>
               <Box className={`${classes.mainBannerContainer} ${visible && classes.active}`}>
                    <Box className={`${classes.mainBanner} ${visible && classes.active}`}>
                        {mainBanner}
                     
                    </Box>
                    <Box className={`${classes.subBanner} ${visible && classes.active}`} style={{bottom: subBannnerBottom}}>
                   {subBanner}
               </Box>
               </Box>
             
               
            </Box>
        </>
    );
}

export default TabContent;