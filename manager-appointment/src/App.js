import React, {Component} from 'react';
import Layout from './Components/Layout/Layout';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddAppointment from './Components/Views/AddAppointment';
import AddAPacient from './Components/Views/AddPacient';
import ViewAppointments from './Components/Views/ViewAppointments';
import ViewPacients from './Components/Views/ViewPacients';

class App extends Component{
  render(){
    return(
      <div>
        <Layout/>
        <Router>
          <Switch>
            <Route exact path="/" component={AddAppointment}/>
            <Route path="/ViewAppointment" component={ViewAppointments}/>
            <Route path="/AddPacient" component={AddAPacient}/>
            <Route path="/ViewPacients" component={ViewPacients}/>
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App;

