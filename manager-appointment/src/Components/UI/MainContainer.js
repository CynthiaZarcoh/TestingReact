import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        width:'100%',
        alignItems:'center'
    }
}));

export default function MainContainer ({children,...props}) {
    const styles = useStyles();

    return(
        <Container 
        component="main" 
        maxWidth="lg" 
        {...props}
        className={styles.root}>
            {
                children
            }
        </Container>
    )
}