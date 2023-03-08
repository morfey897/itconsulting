import { useElementSize } from '../../utilites/useElementSize';
import { Canvas } from '@react-three/fiber';
import MainScreen3dBoxWrapper from './MainScreen3dBoxWrapper';
import style from './MainScreen3d.module.scss';

const classNamePrefix = 'mainScreen3d';

export default function MainScreen3dCanvas() {
  const [boxRef, { width, height }] = useElementSize();

  return (
    <div className={style[classNamePrefix]} ref={boxRef}>
      <Canvas
      // className={style.mainScreen3d__canvas}
      // onPointerMove={(event) => {
      //   // console.log(event.screenX);
      //   // console.log(event.screenY);
      //   // hover(true);
      // }}
      >
        <pointLight position={[10, 10, 10]} />
        <MainScreen3dBoxWrapper
          width={width}
          height={height}
          position={[0, 0, 0]}
        />
      </Canvas>
    </div>
  );
}
