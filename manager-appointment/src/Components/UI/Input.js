import {  TextField } from '@material-ui/core';
import React ,{forwardRef} from 'react';

const Input= forwardRef((props, ref) => {
    <TextField 
    variant='outline'
    margin='normal'
    InputRef={ref} 
    fullWidth
    {...props}/>
})
export default Input;
    