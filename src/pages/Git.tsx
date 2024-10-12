"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { GLTF } from "three-stdlib";
import { BorderBeamDemo } from "@/components/ui/lightcard";

type GLTFResult = GLTF & {
  nodes: {
    [key: string]: THREE.Mesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
};

function Model({ hovered }: { hovered: boolean }) {
  const { scene } = useGLTF("/models/git/scene.gltf") as GLTFResult;
  const ref = useRef<THREE.Group>(null);
  const scale = useRef(new THREE.Vector3(2, 2, 2));
  const targetScale = new THREE.Vector3(2.5, 2.5, 2.5);

  useFrame(() => {
    if (ref.current) {
      scale.current.lerp(
        hovered ? targetScale : new THREE.Vector3(2, 2, 2),
        0.1
      );
      ref.current.scale.copy(scale.current);
      ref.current.rotation.y += hovered ? 0.05 : 0.03;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

const Git: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="
      border-[1px] border-gray-300 rounded-2xl
      shadow-xl back
      m-[25px] p-[25px]
      drop-shadow-2xl
      bg-transparent bg-clip-padding backdrop-blur-lg bg-opacity-30
      overflow-hidden flex flex-col lg:flex-row justify-center items-center relative"
    >
      {/* Text and 3D model */}
      <div className="w-full lg:w-2/3 flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-0 relative">
        {/* Text */}
        <div className="text-center lg:text-left mb-2 lg:mb-0 lg:mr-8 flex flex-col justify-center items-center">
          <p className="text-2xl mb-2 ">Learn</p>
          <h1
            className="
          text-[200px] lg:text-[300px]
        text-orange-600
          font-bold 
          mb-4"
          >
            GIT
          </h1>
          <p className="text-lg mb-4 max-w-md">
            The most trusted version control. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Cupiditate, blanditiis.
          </p>

          {/* Register button  */}
          <div
            className="
            cursor-pointer
            h-[30px] w-[125px]
            p-2
            rounded-2xl 
            border-black border-[1px]
            flex items-center justify-center
            text-black
            hover:bg-orange-600 hover:text-black
            transition-all
            duration-300
            font-light
            sm:text-center
            "
          >
            Register Now
          </div>
        </div>

        {/* 3D model */}
        <div
          className="relative h-[500px] w-[500px] lg:h-[700px] lg:w-[700px]"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <Canvas>
            <Suspense fallback={null}>
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} />
              <pointLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <Model hovered={hovered} />
            </Suspense>
          </Canvas>
        </div>
      </div>

      {/* Cards */}
    </div>
  );
};

export default Git;
