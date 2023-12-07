import { Center, Text3D, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Text() {
  return (
    <>
      <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
    <directionalLight position={[10, 10, 5]} intensity={2} />
        <Text3D font="./Roboto.json">Hello</Text3D>
      </Canvas>
    </>
  );
}
