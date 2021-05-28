import React from 'react';
import LoginPage from './Components/LoginPage';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import MainPage from './Components/MainPage';
import CardPage from './Components/CardPage';

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
      <Route path="/CardPage">
        <CardPage />
      </Route>
      <Route exact path="/">
      <MainPage /> 
      </Route>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
