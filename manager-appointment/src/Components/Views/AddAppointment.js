import React from 'react';
import Form from '../UI/Form';
import Input from '../UI/Input';
import MainContainer from '../UI/MainContainer';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

export default function AddAppointment(){
    const {regiter, handleSubmit, errors} = useForm();
    const history = useHistory();

    const onSubmit= (data) => {
        history.push("/ViewAppointments")
    }

    return(
        <MainContainer>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input ref={regiter} label="Name"/>
                <Input ref={regiter} type="date" label="Date"/>
                <Input ref={regiter} type="time" label="Time"/>
                <button type="submit">Save</button>
            </Form>
        </MainContainer>
    )
}