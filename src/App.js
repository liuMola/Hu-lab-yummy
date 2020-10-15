import React, { Suspense, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useGLTFLoader, RoundedBox } from "drei";

import './App.scss';
import Content from "./content";
import Answer from "./answer";

const Model = () => {
  const gltf = useGLTFLoader('/bao.gltf', true);
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh} position={[0, -30, 0]}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  )
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* <directionalLight position={[0, 10, 5]} intensity={1.3} /> */}
    </>
  )
}

//Gotta change the name of variable
const Something = () => {
  return (
    <Canvas className="canvas" colorManagement camera={{ position: [0, 0, 150], fov: 70 }}>
      <Lights />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

function Test() {
  return <div>test</div>;
}

function Home() {
  return <h2>Home</h2>;
}


function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/answer">Answer</Link>
            </li>
            <li>
              <Link to="/test">test</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/answer">
            <Answer />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
