import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type MainScreen3dBoxType = {
  width: number;
  height: number;
  shiftsPointer: { x: number; y: number }[];
  emitter: any;
};

type MeshRef = React.MutableRefObject<
  Mesh & { rotation: { x: number; y: number } }
>;

function MainScreen3dBoxWrapper({
  width,
  height,
  shiftsPointer,
  emitter,
}: MainScreen3dBoxType) {
  const boxRef = useRef<MeshRef['current']>();
  const [direction, setDirection] = useState(1);

  const rotateProperties = {
    x: {
      default: 1,
      limit: 0.5,
      koefficient: 400,
    },
    y: {
      default: 1,
      limit: 0.5,
      koefficient: 300,
    },
  };

  useFrame(() => {
    const automotion = shiftsPointer.length === 0;

    let currentX = boxRef.current.rotation.x;
    let currentY = boxRef.current.rotation.y;

    let newX = null;
    let newY = null;

    if (automotion) {
      newY =
        currentY +
        (rotateProperties.y.default / rotateProperties.y.koefficient) *
          direction;

      if (newY > rotateProperties.y.limit || newY < -rotateProperties.y.limit) {
        setDirection((current) => -current);
      }

      if (currentX !== 0) {
        let shiftX = currentX / (rotateProperties.x.koefficient / 20);

        if (currentX < 0) {
          if (currentX - shiftX < 0) {
            newX = currentX - shiftX;
          } else {
            newX = 0;
          }
        } else {
          if (currentX + shiftX > 0) {
            newX = currentX - shiftX;
          } else {
            newX = 0;
          }
        }
      }

      boxRef.current.rotation.x = newX;
      boxRef.current.rotation.y = newY;
      return;
    }

    // It is not error, axes in three.js are inverted
    let shiftX = shiftsPointer[0].y / rotateProperties.x.koefficient;
    let shiftY = shiftsPointer[0].x / rotateProperties.y.koefficient;

    newX = currentX + shiftX;

    if (newX > rotateProperties.x.limit) {
      newX = rotateProperties.x.limit;
    } else if (newX < -rotateProperties.x.limit) {
      newX = -rotateProperties.x.limit;
    }

    newY = currentY + shiftY;

    if (newY > rotateProperties.y.limit) {
      newY = rotateProperties.y.limit;
    } else if (newY < -rotateProperties.y.limit) {
      newY = -rotateProperties.y.limit;
    }

    boxRef.current.rotation.x = newX;
    boxRef.current.rotation.y = newY;

    emitter();
  });

  return (
    <mesh ref={boxRef} rotation={[0, 0, 0]} position={[0, 0, -width / 2]}>
      <boxGeometry attach='geometry' args={[width, height, width]} />
      <meshPhysicalMaterial attach='material' color='#6be092' />
    </mesh>
  );
}

export default MainScreen3dBoxWrapper;
