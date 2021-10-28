import React, {Suspense} from 'react';
import { useGLTF } from "@react-three/drei";
import {Canvas} from "@react-three/fiber"


function Model() {
  const {scene} = useGLTF('/static/CTG_IND_SHORTS_1007_1220.glb')
  return <primitive object={scene} />;
}

export const ShowModel = (props) => {
  return(
    <div style={{height:"500px", backgroundColor:"#fde2e4"}}>
      <Canvas camera={{position: [10, 18, 23], fov: 0.5}}>
        <pointLight position={[10, 10, 10]} intensity={1.3} />
        <Suspense fallback={null}>
        <Model/>
        </Suspense>
      </Canvas>
    </div>
  );
}
