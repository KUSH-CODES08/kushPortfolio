'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lastPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [velocity, setVelocity] = useState(0);

  /* ===== Springs ===== */
  const coreX = useSpring(mouseX, { damping: 25, stiffness: 500, mass: 0.4 });
  const coreY = useSpring(mouseY, { damping: 25, stiffness: 500, mass: 0.4 });

  const ringX = useSpring(mouseX, { damping: 40, stiffness: 180, mass: 1 });
  const ringY = useSpring(mouseY, { damping: 40, stiffness: 180, mass: 1 });

  const haloX = useSpring(mouseX, { damping: 60, stiffness: 120, mass: 1.5 });
  const haloY = useSpring(mouseY, { damping: 60, stiffness: 120, mass: 1.5 });

  useEffect(() => {
    const move = (e) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      setVelocity(speed);

      lastPos.current = { x: e.clientX, y: e.clientY };
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const hoverDetect = (e) => {
      if (
        (e.target).closest('button, a, [role="button"], input, textarea')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', hoverDetect);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', hoverDetect);
    };
  }, [mouseX, mouseY]);

  /* Velocity → stretch (clamped) */
  const stretch = Math.min(velocity / 25, 1.6);

  return (
    <>
      {/* ENERGY HALO */}
      <motion.div
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-30 hidden md:block"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
          background:
            'radial-gradient(circle, rgba(139,92,246,0.15), transparent 65%)',
          mixBlendMode: 'screen',
        }}
        animate={{
          scale: isHovering ? 1.4 : 1,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* ADAPTIVE RING */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-40 hidden md:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scaleX: isHovering ? 1.6 : 1 + stretch,
          scaleY: isHovering ? 1.6 : 1 - stretch * 0.4,
          rotate: velocity * 0.4,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* CORE DOT */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        style={{
          x: coreX,
          y: coreY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.8 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
};
export default CustomCursor;