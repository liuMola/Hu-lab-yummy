import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//custom components
import Loading from "./components/loading";
import Header from "./Header";
import Main from "./main";
import Answer from './Answer';
//style
import './style/App.scss';
import './style/normalize.css';

const App = () => {
  const [selectPrice, setSelectPrice] = useState(null);

  return (
    <>
      <Loading />
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
    </>
  );
}


export default App;
