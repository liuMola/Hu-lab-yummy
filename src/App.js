import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//custom components
import Main from "./main";
import Answer from './Answer';

//style
import './App.scss';
import './normalize.css';


function App() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch lcoation={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route path="/answer" component={Answer} />
        {/* <Route exact path="/">
          <Main />
        </Route>
        <Route path="/answer">
          <Answer />
        </Route> */}
      </Switch>
    </AnimatePresence >
  );
}

export default App;
