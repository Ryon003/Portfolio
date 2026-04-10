import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useMemo, useRef } from "react";

const skillGroups = [
  {
    title: "Core Skills",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js"],
  },
  {
    title: "AI & Systems",
    items: ["AI APIs", "LLM Integration", "Automation Workflows"],
  },
  {
    title: "Tools",
    items: ["Firebase", "Supabase", "Git", "GitHub", "Figma"],
  },
  {
    title: "Creative",
    items: ["UI/UX Design", "Animations", "Video Editing (AMV/Phonk)"],
  },
];

type OrbProps = {
  seed: number;
  radius: number;
  speed: number;
  y: number;
  size: number;
  color: string;
};

const Orb = ({ seed, radius, speed, y, size, color }: OrbProps) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed + seed;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = y + Math.sin(t * 1.4) * 0.6;
    ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 40, 40]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.62}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.08}
        transmission={0.04}
      />
    </mesh>
  );
};

const SkillOrbs = () => {
  const orbConfigs = useMemo(
    () => [
      { seed: 0.2, radius: 5.5, speed: 0.24, y: 1, size: 0.9, color: "#b79dff" },
      { seed: 1.4, radius: 4.2, speed: 0.31, y: -0.7, size: 0.75, color: "#9b7bff" },
      { seed: 2.3, radius: 6.6, speed: 0.22, y: 0.3, size: 0.95, color: "#66d4ff" },
      { seed: 3.1, radius: 5.1, speed: 0.27, y: 1.6, size: 0.7, color: "#7b6aff" },
      { seed: 4.4, radius: 4.7, speed: 0.29, y: -1.5, size: 0.82, color: "#5fc9ee" },
      { seed: 5.3, radius: 6.1, speed: 0.2, y: -0.2, size: 0.88, color: "#cab6ff" },
    ],
    []
  );

  return (
    <>
      {orbConfigs.map((orb, index) => (
        <Orb key={index} {...orb} />
      ))}
    </>
  );
};

const TechStack = () => (
  <section className="techstack section-container" aria-label="Skills">
    <h2>Skills</h2>
    <div className="skills-stage">
      <Canvas
        className="skills-canvas"
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 12], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[8, 8, 8]} intensity={42} color="#9b88ff" />
        <pointLight position={[-8, -6, 6]} intensity={20} color="#55d2ff" />
        <SkillOrbs />
        <Environment preset="city" />
      </Canvas>
    </div>
    <div className="skills-grid">
      {skillGroups.map((group) => (
        <article className="skill-card" key={group.title}>
          <h3>{group.title}</h3>
          <div className="skill-tags">
            {group.items.map((item) => (
              <span className="skill-tag" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default TechStack;
