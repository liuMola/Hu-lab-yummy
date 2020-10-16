import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Main from "./main";
import './App.scss';
import AnswerCard from './AnswerCard';



function App() {

  return (
    <Router>
      <div>
        <Link to="/answer">About</Link>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route path="/answer">
            <AnswerCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
