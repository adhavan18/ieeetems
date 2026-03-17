import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const AbstractShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron args={[1, 0]} ref={meshRef} scale={2.5}>
        <MeshDistortMaterial
          color="#D4AF37"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={1}
          wireframe
        />
      </Icosahedron>
      <Icosahedron args={[1.1, 0]} scale={2.5}>
         <meshBasicMaterial color="#00F0FF" wireframe transparent opacity={0.1} />
      </Icosahedron>
    </Float>
  );
};

const HeroScene: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-40 md:opacity-100 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#00F0FF" intensity={2} />
        <pointLight position={[-10, -10, -10]} color="#D4AF37" intensity={2} />
        <AbstractShape />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
