import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import { useElementSize } from '../../utilites/useElementSize';
import MainScreen3dBoxWrapper from './MainScreen3dBoxWrapper';
import style from './MainScreen3d.module.scss';

const classNamePrefix = 'mainScreen3d';

export default function MainScreen3dCanvas() {
  const [boxRef, { width, height }] = useElementSize();

  return (
    <div>
      <div className={style[classNamePrefix]} ref={boxRef}>
        <Canvas
        // onPointerMove={(event) => {
        //   // console.log(event.screenX);
        //   // console.log(event.screenY);
        //   // hover(true);
        // }}
        >
          <MainScreen3dBoxWrapper width={width} height={height} />

          <PerspectiveCamera
            makeDefault
            fov={60}
            aspect={width / height}
            near={0.1}
            far={1000}
            position={[0, 0, Math.round((Math.sqrt(3) / 2) * height) + 10]}
          ></PerspectiveCamera>
        </Canvas>
      </div>
    </div>
  );
}
