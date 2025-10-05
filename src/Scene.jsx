import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Environment,
  Sky,
  useGLTF,
  Float,
  MeshTransmissionMaterial,
  AccumulativeShadows,
  OrbitControls,
} from "@react-three/drei";
import AnimatedCamera from "./AnimatedCamera";

import MainSalmon from "./MainSalmon";
import GlacierEnvironment from "./GlacierEnvironment";
import MainChannelLabel from "./MainChannelLabel";
import SideLabel from "./assets/SideLabel";
import SimpleBox from "./SimpleBox";

function Scene() {
  return (
    <div id="canvas_wrapper">
      <Canvas shadows={true}>
        <Environment preset="sunset" />

        <fog attach="fog" args={["#17998F", 30, 50]} />

        {/* Camera 🎥 */}
        <AnimatedCamera></AnimatedCamera>
        {/*  <OrbitControls />*/}

        {/* Lights 💡 */}
        <ambientLight color="#7FC9C1" intensity={2} />
        <pointLight color="#7FC9C1" position={[1, 2, 2]} intensity={15} />

        {/* We can create a background color as a child element of the canvas we just have to attach it */}
        <color args={["#17998F"]} attach="background" />

        <mesh
          rotation={[1.6, 0, 0]}
          scale={[100, 100, 1]}
          position={[0, 4.5, -40]}
        >
          <planeGeometry />
          <MeshTransmissionMaterial
            backside
            samples={4}
            thickness={4}
            transparent
            roughness={0}
            opacity={0.4}
            chromaticAberration={0.025}
            anisotropy={0.1}
            fog={true}
            distortion={0.5}
            distortionScale={0.1}
            temporalDistortion={0.1}
            color="##7FC9C1"
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
          />
        </mesh>

        {/* Labels */}
        <MainChannelLabel />
        <SideLabel />

        {/* Objects 📦 */}
        <Suspense fallback={null}>
          <GlacierEnvironment />
        </Suspense>

        {/*  <Float
          speed={1} // Animation speed, defaults to 1
          rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
          floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          floatingRange={[-0.1, 0.1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
         
          <MainSalmon/>
        </Float>*/}

        <Suspense>
          <MainSalmon>
            <SimpleBox />
          </MainSalmon>
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Scene;
