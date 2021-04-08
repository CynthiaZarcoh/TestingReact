
import React from 'react';
import { DataGrid } from '@material-ui/data-grid';


function AppointmentList(props) {
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: ' Name', width: 130 },
        {
            field: 'date',
            headerName: 'Date',
            type: 'Date',
            width: 180,
        },
        {
            field: 'time',
            headerName: 'Time',
            description: 'This is the appoinment time',
            sortable: false,
            width: 90
        },
    ];

        let rows = props.appointments;
        
        return(
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        )
    
}

export default AppointmentList;