import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


const Space = () => {
  const space = useGLTF("./space_boi/scene.gltf");

  return (
    <primitive object={space.scene} scale={.5} position-y={-2}  rotation-y={5} />
  );
};

const SpaceCanvas = () => {
  return (
    <Canvas
      shadows
      // frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
    {/* <directionalLight position={[10, 10, 5]} intensity={2} /> */}
    {/* <directionalLight position={[-10, -10, -5]} intensity={1} /> */}
      {/* <Suspense fallback={<CanvasLoader />}> */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={1.8}
          // minPolarAngle={1.8}
          
          autoRotate={true}
        />
        <Space />

        <Preload all />
      {/* </Suspense> */}
    </Canvas>
  );
};

export default SpaceCanvas;
