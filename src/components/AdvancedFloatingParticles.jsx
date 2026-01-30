'use client';

import { useEffect, useState } from 'react';

export function AdvancedFloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const list = [];
    for (let i = 0; i < 24; i++) {
      list.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 6,
        duration: 14 + Math.random() * 8,
        size: 3 + Math.random() * 3,
        drift: Math.random() * 40 - 20,
        opacity: 0.35 + Math.random() * 0.35, // ✅ VISIBLE
      });
    }
    setParticles(list);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute particle"
          style={{
            left: `${p.left}%`,
            bottom: '-20%',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animation: `
              float-up ${p.duration}s linear infinite,
              sway 8s ease-in-out infinite
            `,
            animationDelay: `${p.delay}s`,
            transform: `translateX(${p.drift}px)`,
          }}
        />
      ))}
    </div>
  );
}
