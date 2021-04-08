import React,{Component} from 'react';

class appointment extends Component{
    render (){
        return(
    <div>
        <label>Nombre: </label> <input type="text" value={this.props.name} readOnly></input>
        <label>fecha: </label> <input type="date" value={this.props.date} readOnly></input>
        <label>hora: </label>< input type="time" value={this.props.time} readOnly></input>
    </div>
        )
    }
}

export default appointment;