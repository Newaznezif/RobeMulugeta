"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

function ParticleField(props: any) {
  const ref = useRef<any>();
  const sphere = useMemo(() => {
    try {
      const p = random.inSphere(new Float32Array(5001), { radius: 1.5 }) as Float32Array;
      for (let i = 0; i < p.length; i++) {
        if (isNaN(p[i])) p[i] = 0;
      }
      return p;
    } catch (e) {
      const p = new Float32Array(5001);
      for (let i = 0; i < p.length; i++) p[i] = (Math.random() - 0.5) * 3;
      return p;
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#3b82f6"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
