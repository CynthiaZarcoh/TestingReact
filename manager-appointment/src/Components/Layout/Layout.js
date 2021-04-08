import React,{Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import PlaylistAddCheckRoundedIcon from '@material-ui/icons/PlaylistAddCheckRounded';
import PeopleIcon from '@material-ui/icons/People';
import { makeStyles } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles ((theme) => ({
  root: {
      fontSize: '16px',
      textTransform: 'none',
      color: '#5F90D4',
    }
  })
);

export default function ButtonAppBar (){
  const styles = useStyles();
    return (
        <div>
          <AppBar position="static" color="transparent">
            <Toolbar>
            <DateRangeTwoToneIcon color="primary"/>
              <Typography color="primary">
                Appointment Manager
              </Typography>
              <Button className={styles.root}>
                <AddCircleOutlinedIcon/> 
                <Typography >Add Appointment</Typography> 
              </Button>
              <Button className={styles.root}>
                <PlaylistAddCheckRoundedIcon/> 
                <Typography c>Today's Appointments </Typography>
              </Button>
              <Button className={styles.root}>
                <PeopleIcon/> 
                <Typography>Pacients List</Typography>
              </Button>
              <Button className={styles.root}>
                <PersonAddIcon/> 
                <Typography>Add Pacient</Typography>
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      );
  
} 

