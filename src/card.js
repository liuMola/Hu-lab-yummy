import React, { Suspense, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useGLTFLoader } from "drei";

import './App.scss';
import Button from "./Button";
import Store from "./Store";

const Model = () => {
  const gltf = useGLTFLoader('/japaneseRestaurant.gltf', true);
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh} position={[0, -7, 0]}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  )
}
//Lights for canvas
const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      {/* <directionalLight position={[0, 10, 5]} intensity={1.3} /> */}
    </>
  )
}

function Card() {
  const buttonLetter = "Draw!"

  return (
    <>
      <div className="card">
        <Store />
        <div className="text">
          Hundreds and thousands of choices are<br />
          waiting here for you!
        </div>
        <div className="button-wrapper">
          <div>
            Save your meal now!
          </div>
          <Button buttonLetter={buttonLetter} />
        </div>
      </div>
      <div className="jar-tsai">
        ⓒ2020 GinNaLiJarTsai
      </div>
    </>
  );
}

export default Card;