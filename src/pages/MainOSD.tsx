"use client";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model({ hovered }: { hovered: boolean }) {
  const { scene } = useGLTF("/models/git/scene.gltf") as any;
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

const Main_OSD = () => {
  const [hovered, setHovered] = useState(false);
  const [navbarStyle, setNavbarStyle] = useState({
    background:
      "linear-gradient(90deg, rgba(255,165,0,0.5), rgba(255,165,0,0.7))",
  });

  useEffect(() => {
    let saturation = 50;
    const intervalId = setInterval(() => {
      saturation = (saturation + 5) % 100;
      setNavbarStyle({
        background: `linear-gradient(90deg, rgba(255,165,10,${
          saturation / 100
        }), rgba(255,165,0,0.9))`,
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-white text-gray-900 p-4">
      <header
        className="w-full p-4 rounded-xl flex justify-between items-center"
        style={navbarStyle}
      >
        <a href="https://wcewlug.org" target="_blank" rel="noopener noreferrer">
          <img
            // src="https://wcewlug.org/assets/img/logo.png"
            src="/OSD_2K24-Frontend/src/components/Images/WLUG_LOGO.jpg"
            alt="WLUG Logo"
            className="w-12 h-12"
          />
        </a>
        <button className="px-4 py-2 bg-gray-300 rounded-full">Register</button>
      </header>

      <main className="flex items-center justify-between w-full px-10 flex-grow">
        <div className="flex flex-col items-start">
          <h1 className="text-orange-500 text-9xl font-bold animate-pulse">
            Open Source
          </h1>
          <h1 className="text-orange-400 text-9xl font-bold animate-pulse">
            Day
          </h1>
        </div>

        <div
          className="relative w-[300px] h-[300px] cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[0, 10, 5]} intensity={1} />
            <Model hovered={hovered} />
          </Canvas>
        </div>

        <div className="flex flex-col space-y-8 items-end">
          <div className="p-6 bg-white border border-gray-300 rounded-xl shadow-md max-w-xs text-lg">
            Let's celebrate Open Source Day!
          </div>
          <div className="p-8 bg-white border border-gray-300 rounded-xl shadow-md max-w-md text-lg">
            Dive into global open-source tools for the betterment of development
          </div>
        </div>
      </main>

      <footer className="w-full mt-10 flex justify-between items-center px-10 pb-8">
        <div className="text-orange-500 text-4xl font-bold flex items-center space-x-2">
          <span>LETS LEARN</span>
          <span className="animate-bounce">&#8595;</span>
        </div>

        <div className="text-orange-500 text-4xl font-bold flex items-center space-x-2">
          <span>SESSION</span>
          <span className="animate-bounce">&#8595;</span>
        </div>
      </footer>
    </div>
  );
};

export default Main_OSD;
