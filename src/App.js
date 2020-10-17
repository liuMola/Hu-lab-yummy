import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Main from "./main";
import './App.scss';
import Answer from './Answer';



function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/answer">
            <Answer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
