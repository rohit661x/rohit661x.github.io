'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ParticleBackground = dynamic(() => import('./ParticleBackground'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-transparent" />
});

export default function ClientParticleBackground() {
  return (
    <Suspense fallback={<div className="absolute inset-0 -z-10 bg-transparent" />}>
      <ParticleBackground />
    </Suspense>
  );
} 