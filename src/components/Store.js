import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from "react-three-fiber";
import { useGLTFLoader, Html } from "drei";
import IconLoading from "./IconLoading";

const Model = () => {
  const gltf = useGLTFLoader('/japaneseRestaurant.gltf', true);
  const mesh = useRef();
  useFrame(() => (mesh.current.rotation.y += 0.01));
  return (
    <mesh ref={mesh} position={[0, -7, -5]}>
      <primitive object={gltf.scene} dispose={null} />
    </mesh>
  )
}


const Store = () => {
  //Lights for canvas
  const Lights = () => {
    return (
      <>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[10, 0, 5]} intensity={1} />
      </>
    )
  }

  const ModelLoading = () => {
    return (
      <Html center>
        <IconLoading />
      </Html>
    )
  }

  return (
    <>
      <Canvas className="canvas" colorManagement camera={{ position: [0, 30, 100], fov: 10 }}>
        <Lights />
        <Suspense fallback={<ModelLoading />}>
          <Model />
        </Suspense>
      </Canvas>
    </>
  );
}

export default Store;
