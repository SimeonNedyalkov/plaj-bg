import { useGLTF } from "@react-three/drei";

export function BeanBag({ props }: any) {
  const { nodes, materials } = useGLTF("/threeD/scene.gltf") as any;
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group
          position={[-209.596, 86.441, -343.644]}
          rotation={[-1.619, 0, -1.653]}
          scale={[115.97, 115.97, 70.467]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246_Bean_Bag_0.geometry}
            material={materials.Bean_Bag}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246_Bean_Bag_0_1.geometry}
            material={materials.Bean_Bag}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder246_Bean_Bag_0_2.geometry}
            material={materials.Bean_Bag}
          />
        </group>
      </group>
    </group>
  );
}
