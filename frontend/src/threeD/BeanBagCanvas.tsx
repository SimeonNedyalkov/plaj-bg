import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { BeanBag } from "./BeanBag";

type BeanBagCanvasProps = {
  beanbagId: number;
};

export default function BeanBagCanvas({ beanbagId }: BeanBagCanvasProps) {
  return (
    <Canvas>
      <Suspense fallback="...loading">
        <Stage environment="night" intensity={0.5}>
          <BeanBag />
        </Stage>
        <OrbitControls enableZoom={false}></OrbitControls>
        <PerspectiveCamera position={[-5, 0, 1]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
}
