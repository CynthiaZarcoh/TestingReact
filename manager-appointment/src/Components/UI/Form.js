import React from 'react';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        width: '100%',
        margin: theme.spacing(2),
    }
}))

export default function AppointmentForm({children,...props}){
    const styles = useStyles();
    return(
        <form className={styles.root} {...props}>
            {children}
        </form>
    );
}