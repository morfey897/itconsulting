import React from 'react';
import { Canvas } from '@react-three/fiber';
import MainScreen3dAnimation from './MainScreen3dAnimation';

export default function MainScreen3d() {
  const classPrefix = 'main-screen-3d';

  return (
    <div className={classPrefix}>
      <Canvas className={`${classPrefix}__canvas`}>
        <MainScreen3dAnimation position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
