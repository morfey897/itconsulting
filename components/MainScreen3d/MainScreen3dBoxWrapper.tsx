import React, { useEffect } from 'react';

type MainScreen3dAnimationType = {
  width: number;
  height: number;
};

function MainScreen3dAnimation({ width, height }: MainScreen3dAnimationType) {
  useEffect(() => {
    console.log(width, height);
  }, [width, height]);

  return (
    <mesh rotation={[0, 0, 0]} position={[0, 0, -height / 2]}>
      <boxGeometry attach='geometry' args={[width, height, height]} />
      <meshBasicMaterial attach='material' color='#6be092' />
    </mesh>
  );
}

export default MainScreen3dAnimation;
//
// const [fov, setFov] = useState(60);
// const [near, setNear] = useState(.1);
// const [far, setFar] = useState(1000);
// const [rotationX, setRotationX] = useState(0);
// const [rotationY, setRotationY] = useState(0);
// const [rotationZ, setRotationZ] = useState(0);
// const [positionX, setPositionX] = useState(0);
// const [positionY, setPositionY] = useState(0);
// const [positionZ, setPositionZ] = useState(590);

// <form>
//   <RangeInput
//     title={"fov"}
//     id={"fov"}
//     value={fov}
//     changeFunction={setFov}
//     min={0}
//     max={360}
//   />
//   <RangeInput
//     title={"near"}
//     id={"near"}
//     value={near}
//     changeFunction={setNear}
//     min={0.1}
//     max={5}
//     step={0.1}
//   />
//   <RangeInput
//     title={"far"}
//     id={"far"}
//     value={far}
//     changeFunction={setFar}
//     min={1}
//     max={2000}
//   />
//   <RangeInput
//     title={"rotationX"}
//     id={"rotationX"}
//     value={rotationX}
//     changeFunction={setRotationX}
//     min={0}
//     max={360}
//   />
//   <RangeInput
//     title={"rotationY"}
//     id={"rotationY"}
//     value={rotationY}
//     changeFunction={setRotationY}
//     min={0}
//     max={360}
//   />
//   <RangeInput
//     title={"rotationZ"}
//     id={"rotationZ"}
//     value={rotationZ}
//     changeFunction={setRotationZ}
//     min={0}
//     max={360}
//   />
//   <RangeInput
//     title={"positionX"}
//     id={"positionX"}
//     value={positionX}
//     changeFunction={setPositionX}
//     min={0}
//     max={360}
//   />
//   <RangeInput
//     title={"positionY"}
//     id={"positionY"}
//     value={positionY}
//     changeFunction={setPositionY}
//     min={0}
//     max={360}
//   />
//   <RangeInput
//     title={"positionZ"}
//     id={"positionZ"}
//     value={positionZ}
//     changeFunction={setPositionZ}
//     min={0}
{
  /*    max={2000}*/
}
{
  /*  />*/
}
{
  /*</form>*/
}

//
// function RangeInput({ title, id, value, changeFunction, min, max, step = 1 }) {
//
//   return (
//     <label>
//       {title}:
//       <input
//         id={id}
//         type="range"
//         value={value}
//         min={min}
//         max={max}
//         step={step}
//         onChange={(event) => changeFunction(event.target.value)} // Give them some love to grow!
//       />
//     </label>
//   );
// }
