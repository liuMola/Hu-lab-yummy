import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//custom components
import Main from "./main";
import Answer from './Answer';
import Header from "./Header";

//style
import './App.scss';
import './normalize.css';


function App() {
  const [selectPrice, setSelectPrice] = useState(null);
  // console.log(selectPrice);

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.pathname}>
                <Route
                  exact
                  path='/'
                  render={() => <Main setSelectPrice={setSelectPrice} />}
                />
                <Route
                  exact
                  path='/answer'
                  render={() => <Answer selectPrice={selectPrice} />}
                />
              </Switch>
            </AnimatePresence>
          )}
        />
        <div className="jar-tsai">ⓒ2020 GinNaLiJarTsai</div>
      </div>

    </>
  );
}


export default App;
