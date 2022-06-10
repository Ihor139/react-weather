import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";

import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNightMap from "../../assets/textures/8k_earth_nightmap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";

const Earth = () => {
  const [colorMap, normalMap, specularMap, nightMap, cloudsMap] = useLoader(
    TextureLoader,
    [
      EarthDayMap,
      EarthNormalMap,
      EarthSpecularMap,
      EarthNightMap,
      EarthCloudsMap,
    ]
  );

  const earthRef = React.useRef();
  const cloudsRef = React.useRef();

  useFrame(({ clock }) => {
    cloudsRef.current.rotation.y = clock.getElapsedTime() / 30;
    earthRef.current.rotation.y = clock.getElapsedTime() / 30;
  });

  return (
    <>
      <ambientLight intensity={0.15} />
      <pointLight color="#f6f3ea" position={[3, 0, 3]} intensity={2.2} />
      <Stars radius={300} depth={70} count={7000} factor={6} fade={true} />
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2, 50, 50]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 50, 50]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.1}
          roundness={0.5}
        />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.2}
          rotateSpeed={0.2}
        />
      </mesh>
    </>
  );
};

export default Earth;
