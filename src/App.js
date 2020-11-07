import React, { useState, Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//custom components
import Loading from "./components/Loading";
//style
import './style/App.scss';
import './style/normalize.css';


const Main = lazy(() => import('./Main'));
const Answer = lazy(() => import('./Answer'));

const App = () => {
  const [selectPrice, setSelectPrice] = useState(null);

  return (
    <>
      <Loading />
      <Route
        render={({ location }) => (
          <Suspense fallback={null}>
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
          </Suspense>
        )}
      />
      <div className="jar-tsai">ⓒ2020 GinNaLiJarTsai</div>
    </>
  );
}


export default App;
