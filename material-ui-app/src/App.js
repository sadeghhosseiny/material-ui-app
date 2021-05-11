import React from 'react';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  mainDiv:{
    height:"100%",
    width:"100%",
    overflow:"hidden",
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
      </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
