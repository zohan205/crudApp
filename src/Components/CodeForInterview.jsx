import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import ds1 from '../Assets/Images/nature.jpg';
import ds2 from '../Assets/Images/demonSlayer2.jpg';


const useStyle = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },
    component: {
        margin: 50
    }
})

const CodeForInterview = () => {
    const papan = useStyle();
    return (
        <Box className={papan.component} >
            <Typography align="center" variant="h4" style={{ marginBottom: 50}} >Demon Slayer</Typography>
            <Box style={{ display: 'flex' }} >
                <img className={papan.image} src={ds1} alt="Kimetsu no Yaiba 1" />
                <img className={papan.image} src={ds2} alt="Kimetsu no Yaiba 2" />
            </Box>
        </Box>
    )
}

export default CodeForInterview
