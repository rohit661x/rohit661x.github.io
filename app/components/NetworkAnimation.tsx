'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Line, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface Point {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  connections: number[];
}

function NetworkNodes() {
  const pointsRef = useRef<Point[]>([]);
  const mouseRef = useRef(new THREE.Vector3());
  const linesRef = useRef<THREE.BufferGeometry[]>([]);
  const { size, camera } = useThree();
  const NUM_POINTS = 50;
  const CONNECTION_DISTANCE = 2;
  const MOUSE_INFLUENCE = 0.5;

  // Initialize points
  useEffect(() => {
    pointsRef.current = Array.from({ length: NUM_POINTS }, () => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 2
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.01
      ),
      connections: []
    }));
  }, []);

  // Handle mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / size.width) * 2 - 1;
      const y = -(event.clientY / size.height) * 2 + 1;
      const vector = new THREE.Vector3(x, y, 0.5);
      vector.unproject(camera);
      mouseRef.current.copy(vector);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [camera, size]);

  // Animation and connection logic
  useFrame(() => {
    const points = pointsRef.current;
    points.forEach((point, i) => {
      // Update position
      point.position.add(point.velocity);

      // Boundary check and bounce
      (['x', 'y', 'z'] as const).forEach((axis) => {
        const pos = point.position[axis] as number;
        if (Math.abs(pos) > 5) {
          point.velocity[axis] = (point.velocity[axis] as number) * -1;
        }
      });

      // Mouse influence
      const mouseDistance = point.position.distanceTo(mouseRef.current);
      if (mouseDistance < 2) {
        const direction = point.position.clone().sub(mouseRef.current).normalize();
        point.position.add(direction.multiplyScalar(MOUSE_INFLUENCE * (1 - mouseDistance / 2)));
      }

      // Reset connections
      point.connections = [];

      // Find connections
      points.forEach((otherPoint, j) => {
        if (i !== j) {
          const distance = point.position.distanceTo(otherPoint.position);
          if (distance < CONNECTION_DISTANCE) {
            point.connections.push(j);
          }
        }
      });
    });
  });

  // Render network
  return (
    <>
      {/* Render points */}
      {pointsRef.current.map((point, i) => (
        <mesh key={`point-${i}`} position={point.position}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
        </mesh>
      ))}

      {/* Render connections */}
      {pointsRef.current.map((point, i) => 
        point.connections.map((connectionIndex, j) => {
          const endPoint = pointsRef.current[connectionIndex].position;
          const points = [point.position, endPoint];
          return (
            <Line
              key={`line-${i}-${j}`}
              points={points}
              color="white"
              lineWidth={1}
              transparent
              opacity={0.2}
            />
          );
        })
      )}
    </>
  );
}

export default function NetworkAnimation() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={[1, 2]}
      >
        <NetworkNodes />
      </Canvas>
    </div>
  );
} 