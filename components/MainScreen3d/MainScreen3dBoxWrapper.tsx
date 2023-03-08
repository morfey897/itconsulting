import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

type MainScreen3dAnimationType = {
  width: number;
  height: number;
  position: [number, number, number];
};

function MainScreen3dAnimation(props: MainScreen3dAnimationType) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  // const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [test, testChange] = useState(0);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // @ts-ignore
  // useFrame(() => (ref.current.rotation.x += 0.01));
  useFrame(() => {
    testChange(test + 0.01);
  });

  useEffect(() => {
    console.log(props);
  }, [props.width, props.height]);

  // console.log(props.width, props.height);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => {
        console.log('onPointerOver');
        // hover(true);
      }}
      onPointerOut={() => {
        console.log('onPointerOut');
        // hover(false);
      }}
      // rotation={[10,5,test]}
    >
      <mesh>
        <boxGeometry attach='geometry' args={[2, 2, 2]} />
        <meshStandardMaterial attach='material' color='#6be092' />
      </mesh>

      {/*<cylinderGeometry args={[1, 1, 1]} />*/}
      {/*<meshStandardMaterial*/}
      {/*  wireframe={props.wireframe}*/}
      {/*  color={hovered ? "hotpink" : "orange"}*/}
      {/*/>*/}
    </mesh>
  );
}

export default MainScreen3dAnimation;
