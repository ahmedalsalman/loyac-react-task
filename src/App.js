import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from './components/Home'
import NewProgramForm from './components/NewProgramForm'
// import ProgramsList from './components/ProgramsList'
// import ProgramDetails from './components/ProgramDetails'
import RegistrationFormApplicants from './components/RegistrationFormApplicants'
import RegistrationFormStaffs from './components/RegistrationFormStaffs'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/(login|register)/applicant" component={RegistrationFormApplicants} />
      <Route path="/(login|register)/staff" component={RegistrationFormStaffs} />
      <Route path="/newprogram" component={NewProgramForm} />
      {/* <Route path="/programs/:programID" component={ProgramDetails} />
      <Route path="/programs" component={ProgramsList} /> */}
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;
