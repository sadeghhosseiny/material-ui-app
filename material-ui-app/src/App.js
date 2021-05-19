import React from 'react';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Home from './Components/Home';

const useStyle = makeStyles((theme) => ({
  mainDiv:{
    height:"100% !important",
    width:"100% !important",
    background:"skyblue",
    overflow:"auto",
    position:"absolute",

  },
}))

function App() {
  const classes = useStyle();
  return (
    <div className={classes.mainDiv}>
      <Router>
        <Switch>
      <Route path="/LoginPage">
      <LoginPage />
      </Route>
      <Route exact path="/">
      <Navbar />
      <Home />
      </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
