import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

function FloatingGeometries() {
  const meshRefs = useRef<THREE.Mesh[]>([]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRefs.current.forEach((mesh, index) => {
      if (!mesh) return;
      
      // Floating motion
      const speed = 0.5 + index * 0.2;
      const range = 0.15 + index * 0.05;
      mesh.position.y = Math.sin(time * speed) * range + (index - 1) * 1.6;
      mesh.position.x = Math.cos(time * speed * 0.8) * 0.15;
      
      // Rotation motion
      mesh.rotation.x = time * 0.08 * (index + 1);
      mesh.rotation.y = time * 0.12 * (index + 1);
    });
  });

  return (
    <>
      {/* Mesh 1: Cyan Dodecahedron (Wireframe) */}
      <mesh
        ref={(el) => { if (el) meshRefs.current[0] = el; }}
        position={[-2.2, 1.2, -1]}
      >
        <dodecahedronGeometry args={[0.65]} />
        <meshStandardMaterial color="#06b6d4" wireframe roughness={0.1} metalness={0.9} />
      </mesh>
      
      {/* Mesh 2: Purple Torus (Solid) */}
      <mesh
        ref={(el) => { if (el) meshRefs.current[1] = el; }}
        position={[2.4, 0, -2]}
      >
        <torusGeometry args={[0.55, 0.18, 12, 36]} />
        <meshStandardMaterial color="#a855f7" roughness={0.2} metalness={0.8} />
      </mesh>
      
      {/* Mesh 3: Blue Octahedron (Wireframe) */}
      <mesh
        ref={(el) => { if (el) meshRefs.current[2] = el; }}
        position={[-1.8, -1.2, -1.5]}
      >
        <octahedronGeometry args={[0.45]} />
        <meshStandardMaterial color="#3b82f6" wireframe roughness={0.3} metalness={0.7} />
      </mesh>
    </>
  );
}

interface StarFieldProps {
  count: number;
}

function StarField({ count }: StarFieldProps) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Initialize randomized position array
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;     // X
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12; // Y
    positions[i * 3 + 2] = (Math.random() - 0.5) * 12; // Z
  }

  useFrame((state) => {
    if (pointsRef.current) {
      // Slow rotation over time
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.015;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={0.025}
        sizeAttenuation
        transparent
        opacity={0.4}
      />
    </points>
  );
}

function CameraRig() {
  const { shouldReduceEffects } = usePrefersReducedMotion();
  
  useFrame((state) => {
    if (shouldReduceEffects) return;
    
    // state.pointer holds normalized cursor coordinates [-1, 1]
    const { x, y } = state.pointer;
    
    // Smoothly interpolate camera coordinates (lerp) for cursor parallax
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, x * 1.8, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, y * 1.2 + 0.3, 0.05);
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export function HeroScene() {
  const { shouldReduceEffects } = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-cyber-bg overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.06),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.07),transparent_50%)]" />
      
      <Canvas
        camera={{ position: [0, 0.3, 4.5], fov: 60 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        
        {/* Colorful Point Lights */}
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#06b6d4" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#a855f7" />
        <directionalLight position={[0, 4, 0]} intensity={0.3} />
        
        <FloatingGeometries />
        
        {/* Star count based on screen/performance capacity */}
        <StarField count={shouldReduceEffects ? 150 : 600} />
        
        <CameraRig />
      </Canvas>
    </div>
  );
}
export default HeroScene;
