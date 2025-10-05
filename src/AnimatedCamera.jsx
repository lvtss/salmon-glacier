import { useRef, useEffect } from "react";
import { PerspectiveCamera } from "@react-three/drei";
import { gsap } from "gsap";

export const CameraTimeline = new gsap.timeline({
  paused: true,
});

function AnimatedCamera(props) {
  
  const { children } = props; 
  const cameraRef = useRef();

  
  useEffect(() => {
    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 2,
        y: 1,
        z: 0,
      },
      "stage 1"
    );
    
        CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      "stage 1"
    );
    
    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 2,
        y: 0,
        z: -27,
      },
      "stage 2"
    );

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.5,
        z: 0,
      },
      "stage 2"
    );
    
        CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.75,
        z: 0,
      },
      "stage 2.5"
    );
    
            CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.75,
        z: 0,
      },
      "stage 2.75"
    );
    
        CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 2,
        y: 0,
        z: -23,
      },
      "stage 3"
    );
    

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.5,
        z: 0,
      },
      "stage 3"
    );

           CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 2,
        y: 0,
        z: -22,
      },
      "stage 3A"
    );
    

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.4,
        z: 0,
      },
      "stage 3A"
    );
    
      CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 1,
        y: 0,
        z: -20,
      },
      "stage 3B"
    );
    

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: -0.25,
        z: 0,
      },
      "stage 3B"
    );
    

    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: 2,
        y: 0,
        z: -11,
      },
      "stage 3.25"
    );
    

    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 1.2,
        z: 0,
      },
      "stage 3.25"
    );

    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -10,
        y: -3,
        z: -13,
      },
      "stage 3.5"
    );
     CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: 0.2,
        //y: Math.PI/2,
        z: 0,
      },
      "stage 3.5"
    );
    
    CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -27,
        y: 0,
        z: -15,
      },
      "stage 4"
    );
    
    CameraTimeline.to(
      cameraRef.current.rotation,
      {
        x: 0,
        y: Math.PI/3.5,
        z: 0,
      },
      "stage 4"
    );
            CameraTimeline.to(
      cameraRef.current.position,
      {
        x: -27,
        y: 0,
        z: -15
      },
      "stage 5"
    );

  // useEffect(() => {
  //   CameraTimeline.to(
  //     cameraRef.current.position,
  //     {
  //       x: 2,
  //       y: 0,
  //       z: -30,
  //       // x: -10,
  //       // y: 0,
  //       // z: -70
  //     },
  //     "stage 2"
  //   );
    
    //     CameraTimeline.to(
    //   cameraRef.current.position,
    //   {
    //     x : 2.5,
    //     y : 2,
    //     z : 3
    //     // x: -10,
    //     // y: 0,
    //     // z: -70
    //   },
    //   "stage 2.5"
    // );

//     CameraTimeline.to(
//       cameraRef.current.rotation,
//       {
//         x: 0,
//         y: -Math.PI,
//         z: 0
//       },
//       "stage 2"
//     );
    
//     CameraTimeline.to(
//       cameraRef.current.position,
//       {
//         x: 0,
//         y: 100,
//         z: 10
//       },
//       "stage 2.5"
//     );
    

  }, [cameraRef]);

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[2.5,2,3]} rotation={[0,0,0]}>{children}</PerspectiveCamera>;
}

export default AnimatedCamera;
