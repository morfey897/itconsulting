import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useElementSize } from '../../utilites/useElementSize';
import MainScreen3dBoxWrapper from './MainScreen3dBoxWrapper';
import style from './MainScreen3d.module.scss';
import { useState } from 'react';

const classNamePrefix = 'mainScreen3d';

export default function MainScreen3dCanvas() {
  const [boxRef, { width, height }] = useElementSize();
  const [positionPointer, setPositionPointer] = useState({ x: -1, y: -1 });
  const [shiftsPointer, setShiftPointer] = useState([]);

  // Handler pointer move
  const handlerPointerMove = (event) => {
    const { clientX: x, clientY: y } = event;

    // Set initial position, if it is first mouse move
    if (positionPointer.x === -1 || positionPointer.y === -1) {
      setPositionPointer({ x, y });
      return;
    }

    // Set shift pointer
    setShiftPointer((currents) => {
      return [
        ...currents,
        {
          x: x - positionPointer.x,
          y: y - positionPointer.y,
        },
      ];
    });

    // Set actual pointer position
    setPositionPointer({ x, y });
  };

  // Remove handled pointer position
  const removeHandledPointerPosition = () => {
    setShiftPointer((current) => {
      current.shift();

      return current;
    });
  };

  return (
    <div>
      <div className={style[classNamePrefix]} ref={boxRef}>
        <Canvas onPointerMove={handlerPointerMove}>
          <MainScreen3dBoxWrapper
            width={width}
            height={height}
            shiftsPointer={shiftsPointer}
            emitter={removeHandledPointerPosition}
          />

          <PerspectiveCamera
            makeDefault
            fov={60}
            aspect={width / height}
            near={0.1}
            far={4000}
            position={[
              0,
              0,
              Math.round((Math.sqrt(3) / 2) * height) + 10 + 800,
            ]}
          ></PerspectiveCamera>

          <pointLight position={[500, 0, 2000]} />
        </Canvas>
      </div>
    </div>
  );
}
