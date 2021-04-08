import axios from 'axios';
import { useEffect, useState } from 'react';


const fetchPacients =  () => {
    return axios.get('https://randomuser.me/api')
    .then((results) =>{ 
        //console.log(results)
        return JSON.stringify(results,null, 2);
    });
}

export default function GetPacients(){

    const [pacients,setPacients] = useState('');

    useEffect(() => {
        fetchPacients()
        .then( results => {
            setPacients(results || "not pacients available");
        }).catch((err) => console.log('we got the following error:', err))
    },[]);

    return(
        <div>
            <h1>Testing data</h1>
            <pre>{pacients}</pre>
        </div>
    )
}


