import { Suspense, useEffect, useRef } from "react";
import { Environment, useGLTF } from "@react-three/drei";

import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";

function GlacierEnvironment() {
  const { scene, materials, scale, position } = useGLTF(
    "https://cdn.glitch.me/c0a650e2-c674-4409-aed5-cf1f223e550c/Environment_V7b.glb?v=1702436777659"
  );

  const modelRef = useRef();

  return (
    <primitive
      ref={modelRef}
      scale={[1, 1, 1]}
      position={[0, 0, 0]}
      object={scene}
    />
  );
}

export default GlacierEnvironment;
