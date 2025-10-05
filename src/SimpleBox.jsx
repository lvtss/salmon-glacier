import { Suspense, useEffect, useRef, useState } from "react";
import { Box, useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Mesh, MeshPhysicalMaterial } from "three";

import AnimatedCamera from "./AnimatedCamera";
import {CameraTimeline} from "./AnimatedCamera";

function SimpleBox(props) {
  
  const { scene, materials, scale, position, animations } = useGLTF(
    "https://cdn.glitch.global/fd72e572-518e-4f84-90a6-dcef35bf294b/SpawningSalmon-animglb.glb?v=1702435914788"
  );
    
  
  const modelRef = useRef();
  const {actions} = useAnimations(animations, scene);
  const animationClip = Object.values(actions)[0];
  
  useEffect(() => {
    
    materials["standardSurface1"].transparent = true;
    materials["standardSurface1"].opacity = 0;
     animationClip.play();
    
    CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 0,
      },
      "stage 1"
    );


    CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 0,
      },
      "stage 2"
    );

    CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 0,
      },
      "stage 2.5"
    );
    
    CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 0,
      },
      "stage 2.75"
    );
    

      CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 0,
      },
      "stage 3"
    );
    
      CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 0,
      },
      "stage 3A"
    );
    
          CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 1,
      },
      "stage 3B"
    );
    
      CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 1,
      },
      "stage 3.25"
    );
    
        CameraTimeline.to(
      modelRef.current.position,
      {
        y: 8,
      },
      "stage 3.25"
    );
    
        // scale down grey fish
      CameraTimeline.to(
      modelRef.current.scale,
      {
        x: 2.5,
        y: 2.5,
        z: 2.5
      },
      "stage 3.25"
    );
    
      CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 1,
      },
      "stage 4"
    );
            CameraTimeline.to(
      modelRef.current.position,
      {
        x: 0,
        y: 8,
        z: 0
      },
      "stage 5"
    );
      CameraTimeline.to(
      materials["standardSurface1"],
      {
        opacity: 0,
      },
      "stage 5"
    );
  

    console.log("SHIT");
  }, [modelRef, materials]);

    return (
    
    <primitive
      ref={modelRef}
      scale={[1.5,1.5,1.5]}
      position={[1, 2.5, 0]}
      object={scene}
    />
  );
}

export default SimpleBox;