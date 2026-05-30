"use client";

import { Float, PointMaterial, Points } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as random from "maath/random";
import { Suspense, useMemo, useRef } from "react";
import type { Group, Mesh, Points as PointsType } from "three";

const PARTICLE_COUNT = 1200;

const ParticleShell = ({
  color,
  opacity,
  radius,
  size,
  speed,
  tilt,
}: {
  color: string;
  opacity: number;
  radius: number;
  size: number;
  speed: number;
  tilt: [number, number, number];
}) => {
  const ref = useRef<PointsType | null>(null);
  const points = useMemo(
    () =>
      random.inSphere(
        new Float32Array(PARTICLE_COUNT * 3),
        { radius },
      ) as Float32Array,
    [radius],
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * speed;
      ref.current.rotation.x += delta * (speed * 0.28);
    }
  });

  return (
    <Points ref={ref} positions={points} stride={3} rotation={tilt}>
      <PointMaterial
        transparent
        color={color}
        size={size}
        sizeAttenuation
        depthWrite={false}
        opacity={opacity}
      />
    </Points>
  );
};

const OrbitDot = ({
  radius,
  phase,
  color,
}: {
  radius: number;
  phase: number;
  color: string;
}) => {
  const ref = useRef<Mesh | null>(null);

  useFrame((_state, delta) => {
    if (!ref.current) return;

    const t = performance.now() * 0.00045 + phase;
    ref.current.position.set(
      Math.cos(t) * radius,
      Math.sin(t * 1.2) * radius * 0.32,
      Math.sin(t * 0.85) * radius,
    );
    ref.current.rotation.x += delta * 1.6;
    ref.current.rotation.y += delta * 1.1;
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 20, 20]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.35}
        roughness={0.25}
        metalness={0.2}
      />
    </mesh>
  );
};

const AnimatedRing = ({
  args,
  color,
  opacity,
  rotation,
  speed,
}: {
  args: [number, number, number, number];
  color: string;
  opacity: number;
  rotation: [number, number, number];
  speed: number;
}) => {
  const ref = useRef<Mesh | null>(null);

  useFrame((_state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * (speed * 0.8);
    ref.current.rotation.z += delta * (speed * 0.35);
    const pulse = 1 + Math.sin(performance.now() * 0.0012 * speed) * 0.015;
    ref.current.scale.setScalar(pulse);
  });

  return (
    <mesh ref={ref} rotation={rotation}>
      <torusGeometry args={args} />
      <meshBasicMaterial color={color} transparent opacity={opacity} />
    </mesh>
  );
};

const GlobeCore = () => {
  const group = useRef<Group | null>(null);

  useFrame((_state, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.34;
    group.current.rotation.x = Math.sin(performance.now() * 0.00028) * 0.1;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.55} floatIntensity={1}>
        <mesh>
          <sphereGeometry args={[1.28, 40, 40]} />
          <meshStandardMaterial
            color="#050812"
            emissive="#f6b32d"
            emissiveIntensity={0.08}
            roughness={0.4}
            metalness={0.22}
          />
        </mesh>

        <mesh rotation={[0.22, 0.5, 0.16]}>
          <sphereGeometry args={[1.34, 22, 22]} />
          <meshBasicMaterial
            color="#f6b32d"
            wireframe
            transparent
            opacity={0.32}
          />
        </mesh>

        <mesh rotation={[-0.14, -0.42, 0.2]}>
          <sphereGeometry args={[1.38, 22, 22]} />
          <meshBasicMaterial
            color="#2e7cf6"
            wireframe
            transparent
            opacity={0.2}
          />
        </mesh>

        <AnimatedRing
          args={[1.86, 0.028, 16, 220]}
          color="#f6b32d"
          opacity={0.9}
          rotation={[0.62, 0.18, 0.05]}
          speed={0.08}
        />
        <AnimatedRing
          args={[1.64, 0.02, 16, 220]}
          color="#2e7cf6"
          opacity={0.7}
          rotation={[-0.4, 0.55, 0.18]}
          speed={-0.06}
        />
        <AnimatedRing
          args={[1.96, 0.015, 16, 220]}
          color="#ffd86a"
          opacity={0.62}
          rotation={[1.15, 0.25, -0.22]}
          speed={0.05}
        />

        <ParticleShell
          color="#7fc2ff"
          opacity={0.8}
          radius={1.42}
          size={0.028}
          speed={0.05}
          tilt={[0, 0.2, 0.3]}
        />
        <ParticleShell
          color="#f6b32d"
          opacity={0.62}
          radius={1.18}
          size={0.02}
          speed={-0.035}
          tilt={[0.3, -0.25, -0.15]}
        />

        <OrbitDot radius={1.98} phase={0.2} color="#f6b32d" />
        <OrbitDot radius={1.72} phase={1.7} color="#2e7cf6" />
        <OrbitDot radius={1.52} phase={3.2} color="#ffd86a" />
        <OrbitDot radius={2.18} phase={4.5} color="#f6b32d" />
      </Float>
    </group>
  );
};

export const HeroGlobe = () => {
  return (
    <div className="relative h-[340px] w-full max-w-[520px] bg-transparent sm:h-[500px] sm:max-w-[640px] lg:h-[620px]">
      <Canvas
        camera={{ position: [0, 0, 5.8], fov: 36 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.72} />
        <directionalLight position={[4, 3, 6]} intensity={1.9} color="#ffd86a" />
        <directionalLight position={[-4, 1, -2]} intensity={0.95} color="#2e7cf6" />
        <pointLight position={[0, 0, 5]} intensity={1.25} color="#f6b32d" />
        <Suspense fallback={null}>
          <GlobeCore />
        </Suspense>
      </Canvas>
    </div>
  );
};
