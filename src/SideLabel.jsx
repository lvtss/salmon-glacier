import { useTexture } from "@react-three/drei";
import {useEffect, useRef} from "react";
import AnimatedCamera from "./AnimatedCamera";
import {CameraTimeline} from "./AnimatedCamera";

function SideLabel() {
  const objectRef = useRef();
  const labelTex = useTexture("https://cdn.glitch.global/753ef283-2a13-4822-a0dd-d13a07c483ed/SideChannel.png?v=1702435211528")
  
  useEffect(()=> {
    CameraTimeline.to(
      objectRef.current.material,
      {
        opacity: 1,
      },
      "stage 2"
    );


    CameraTimeline.to(
      objectRef.current.material,
      {
        opacity: 0,
      },
      "stage 2.5"
    );

  })
  
  return (
    <mesh
      ref={objectRef}
       scale={[22, 12, 1]}
      rotation={[0,-Math.PI / 9, 0]}
      position={[25, -1.25, -50]}
    >
      <planeGeometry />

      <meshBasicMaterial
        transparent
        map= {labelTex}
        opacity={0}
      />
    </mesh>
    
    
  );
}

export default SideLabel;
