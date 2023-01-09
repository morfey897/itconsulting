import React from 'react';
import { Canvas } from '@react-three/fiber';
import MainScreen3dAnimation from './MainScreen3dAnimation';
import style from './MainScreen3d.module.scss';

export default function MainScreen3d() {
  return (
    <div className={style.mainScreen3d}>
      <Canvas className={style.mainScreen3d__canvas}>
        <pointLight position={[10, 10, 10]} />
        <MainScreen3dAnimation position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}
