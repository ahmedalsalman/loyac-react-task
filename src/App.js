import React from 'react';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect to="/home" />
    </Switch>
  );
}

export default App;
