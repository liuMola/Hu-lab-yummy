import React from 'react';
import { Route, Switch, useLocation, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//custom components
import Main from "./main";
import Answer from './Answer';
import Header from "./Header";

//style
import './App.scss';
import './normalize.css';


function App() {
  // const location = useLocation();

  return (
    <>
      <Header />
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Main />}
              />
              <Route
                exact
                path='/answer'
                render={() => <Answer />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />
      <div className="jar-tsai">ⓒ2020 GinNaLiJarTsai</div>
    </>
  );
}


export default App;
