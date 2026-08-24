import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { skillsData } from '../../data/portfolioData';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface SkillNodeData {
  id: string;
  name: string;
  category: string;
  position: [number, number, number];
  color: string;
}

function SkillNode({ name, position, color }: { name: string; position: [number, number, number]; color: string }) {
  const dotRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (dotRef.current) {
      // Gentle pulsing size effect
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 2 + position[0]) * 0.15;
      dotRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={position}>
      {/* Small Glowing Sphere */}
      <mesh ref={dotRef}>
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshBasicMaterial color={color} />
      </mesh>
      
      {/* HTML Projected Label */}
      <Html distanceFactor={5.5} center>
        <div 
          className="px-2 py-0.5 rounded border bg-cyber-bg/90 border-white/5 text-[9px] font-mono text-cyber-text-secondary whitespace-nowrap pointer-events-none hover:text-cyber-neon-cyan hover:border-cyber-neon-cyan/50 transition-colors shadow-lg"
          style={{ textShadow: `0 0 4px ${color}40` }}
        >
          {name}
        </div>
      </Html>
    </group>
  );
}

function ConstellationLines({ nodes }: { nodes: SkillNodeData[] }) {
  const linePositions = useMemo(() => {
    const points: number[] = [];
    
    // Group by category to draw lines within clusters
    const grouped: { [key: string]: SkillNodeData[] } = {};
    nodes.forEach(node => {
      if (!grouped[node.category]) grouped[node.category] = [];
      grouped[node.category].push(node);
    });

    Object.keys(grouped).forEach(cat => {
      const catNodes = grouped[cat];
      // Connect sequential nodes in a loop
      for (let i = 0; i < catNodes.length; i++) {
        const current = catNodes[i];
        const next = catNodes[(i + 1) % catNodes.length];
        
        points.push(...current.position);
        points.push(...next.position);
        
        // Connect nodes to cluster index 0 for web-like structural stability
        if (i > 1) {
          points.push(...catNodes[0].position);
          points.push(...current.position);
        }
      }
    });

    return new Float32Array(points);
  }, [nodes]);

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[linePositions, 3]}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#ffffff" transparent opacity={0.08} />
    </lineSegments>
  );
}

function ConstellationGroup({ children }: { children: React.ReactNode }) {
  const groupRef = useRef<THREE.Group>(null);
  const { shouldReduceEffects } = usePrefersReducedMotion();

  useFrame((state) => {
    if (groupRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Auto-rotation around Y-axis
      groupRef.current.rotation.y = time * 0.04;
      
      // Parallax hover tilt
      if (!shouldReduceEffects) {
        const { x, y } = state.pointer;
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, y * 0.35, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, x * 0.35 + time * 0.04, 0.05);
      }
    }
  });

  return <group ref={groupRef}>{children}</group>;
}

export function SkillsConstellation() {
  const { shouldReduceEffects } = usePrefersReducedMotion();

  // Create constellation nodes grouped in spherical clusters
  const nodes = useMemo(() => {
    const list: SkillNodeData[] = [];
    const categories = {
      'Programming': { center: [0, 1.4, 0], color: '#ef4444' },     // Red-orange
      'Web': { center: [-1.4, 0.4, 0.8], color: '#06b6d4' },        // Cyan
      'Databases': { center: [1.4, 0.4, -0.8], color: '#10b981' },    // Green
      'Tools': { center: [-1.4, -0.7, -0.8], color: '#f59e0b' },     // Orange/Yellow
      'Engineering': { center: [1.4, -0.7, 0.8], color: '#ec4899' }, // Pink
      'AI/ML': { center: [0, -1.5, 0], color: '#a855f7' }          // Purple
    };

    // Group items
    const grouped: { [key: string]: typeof skillsData } = {};
    skillsData.forEach(skill => {
      if (!grouped[skill.category]) grouped[skill.category] = [];
      grouped[skill.category].push(skill);
    });

    Object.keys(grouped).forEach(cat => {
      const config = categories[cat as keyof typeof categories] || { center: [0, 0, 0], color: '#fff' };
      const skills = grouped[cat];
      
      skills.forEach((skill, index) => {
        // Golden spiral node distribution
        const phi = Math.acos(-1 + (2 * index) / skills.length);
        const theta = Math.sqrt(skills.length * Math.PI) * phi;
        const radius = 0.5; // Radius of cluster bubble

        const x = config.center[0] + radius * Math.sin(phi) * Math.cos(theta);
        const y = config.center[1] + radius * Math.sin(phi) * Math.sin(theta);
        const z = config.center[2] + radius * Math.cos(phi);

        list.push({
          id: `${cat}-${index}`,
          name: skill.name,
          category: skill.category,
          position: [x, y, z],
          color: config.color
        });
      });
    });

    return list;
  }, []);

  return (
    <div className="w-full h-[550px] relative overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 60 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
        
        <ConstellationGroup>
          <ConstellationLines nodes={nodes} />
          {nodes.map(node => (
            <SkillNode 
              key={node.id} 
              name={node.name} 
              position={node.position} 
              color={node.color} 
            />
          ))}
        </ConstellationGroup>
      </Canvas>
    </div>
  );
}
export default SkillsConstellation;
