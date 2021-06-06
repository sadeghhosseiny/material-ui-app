import React, { useEffect } from "react";
import LoginPage from "./Components/LoginPage";
import { Switch, Route, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import MainPage from "./Components/MainPage";
import CardPage from "./Components/CardPage";
import { AnimatePresence } from "framer-motion";

const useStyle = makeStyles((theme) => ({
  mainDiv: {
    height: "100% !important",
    width: "100% !important",
    background: "lightslategrey",
    overflow: "auto",
    position: "absolute",
  },
}));

function App() {
  const classes = useStyle();
  const location = useLocation();
  console.log("LOCATION", location.pathname);
  
  return (
    <div style={{overflowX:"hidden"}} className={classes.mainDiv}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route path="/LoginPage">
              <LoginPage />
            </Route>
            <Route path="/CardPage/:id">
              <CardPage />
            </Route>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
