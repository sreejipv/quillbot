import React from 'react';
import Box from "@material-ui/core/Box";
import { ReactComponent as CheckMark } from "../../assets/images/checkmark.svg";
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    moldelLess:{},
    copy: {
        display: 'block',
        position: 'relative',
        cursor: 'pointer',
        "&::before":{
        backgroundImage: 'linear-gradient(90deg,#9fa6bf 33%,transparent 0)',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '3px 1px',
        content: `''`,
        display: 'block',
        height:'1px',
        left: '0',
        position: 'absolute',
        top: '100%',
        width: '100%',
        },
        "&$moldelLess":{
            "&::before":{
                backgroundImage: 'none'
            }
        },
        "&:hover":{
            "& $itemModelContainer":{
                filter: 'none',
                opacity: '1',
                transition: 'opacity .2s ease-in-out',
                visibility: 'visible'
            }
        },
    },

    itemModelContainer:{
        left: '0',
        transform: 'translateY(calc(-100% - 48px))',
        background: '#333954',
        borderRadius: '4px',
        minWidth: '200px',
        padding: '16px',
        alignSelf: 'baseline',
        filter: 'alpha(opacity=0)',
        maxWidth: '392px',
        opacity: '0',
        position: 'absolute',
        top: '32px',
        visibility: 'hidden',
        willChange: 'opacity',
        zIndex: '6'
    },
    listItem: {
        position: 'relative',
    },
    bannerWrapper: {
        backgroundColor: '#f9faff',
        borderRadius: '3px',
        marginBottom: '8px',
        width: '360px',
    }

  });

function ListItem({props, copy, modelImage, modelCopy, isModel, fw}) {
    let classes = useStyles(props)
    return (
        <>
            <Box display="flex" justifyContent="flex-start" alignItems="center" 
                className={classes.listItem} mb={2}>
                <CheckMark />
                <Box mr={2}></Box>
                <Typography >
                    <Box className={`${classes.copy} ${!isModel && classes.moldelLess}`} fontSize={14} 
                    style={{cursor: isModel ? 'pointer': 'revert'}} fontWeight={fw}>{copy}
                    {isModel && 
                    <Box display={{ xs: 'none', sm:'block' }}  className={classes.itemModelContainer}>
                        <Box className={classes.bannerWrapper}>
                            {modelImage}    
                        </Box>
                        <Box color="#ffffff" fontSize="12px">
                            {modelCopy}
                        </Box>
                    </Box>
                    }
                    
                    </Box>
                    
                    
                </Typography>
            </Box>
            
        </>
    );
}

export default ListItem;