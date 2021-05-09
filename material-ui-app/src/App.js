import React from 'react';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
      <Route path="/LoginPage">
      <LoginPage />
      </Route>
      <Route exact path="/">

      <Navbar />
      </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
