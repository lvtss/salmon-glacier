import { useTexture } from "@react-three/drei";
import { useEffect, useRef } from "react";
import AnimatedCamera from "./AnimatedCamera";
import { CameraTimeline } from "./AnimatedCamera";

function MainChannelLabel() {
  const objectRef = useRef();
  const labelTex = useTexture(
    "https://cdn.glitch.global/4ebef85f-40f4-4053-b7cf-e5e5a4bde3c6/mainv2.png?v=1701663330213"
  );
  
  useEffect(() => {
    CameraTimeline.to(
      objectRef.current.material,
      {
        opacity: 1,
      },
      "stage 1"
    );

    CameraTimeline.to(
      objectRef.current.material,
      {
        opacity: 0,
        // onComplete: () => setVisible(false) // GSAP Exposes events on animations
      },
      "stage 2.5"
    );
    
    // You consider adding a visible animation here turning it fals
    // objectRef.current.visible
  });

  return (
    <mesh ref={objectRef} scale={[28, 13, 1]} position={[-4, -2, -50]}>
      <planeGeometry />

      <meshBasicMaterial transparent map={labelTex} opacity={1} />
    </mesh>
  );
}

export default MainChannelLabel;
