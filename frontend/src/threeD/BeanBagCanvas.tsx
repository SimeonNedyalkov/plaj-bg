import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { BeanBag } from "./BeanBag";

type BeanBagCanvasProps = {
  beanbagId: number;
};

export default function BeanBagCanvas({ beanbagId }: BeanBagCanvasProps) {
  return (
    <Canvas style={{ width: "80%", height: "80%", cursor: "grabbing" }}>
      <Suspense fallback="...loading">
        <Stage environment="night" intensity={0.5}>
          <BeanBag />
        </Stage>
        <OrbitControls enableZoom={false} />
        <PerspectiveCamera position={[0, 0, 5]} makeDefault />
      </Suspense>
    </Canvas>
  );
}
