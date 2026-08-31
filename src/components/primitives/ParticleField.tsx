import { useMemo } from 'react';
import { motion } from 'framer-motion';

type Props = {
  count?: number;
  className?: string;
  color?: string;
};

export default function ParticleField({ count = 40, className = '', color = 'rgba(255,255,255,0.6)' }: Props) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 0.5,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 6,
        drift: (Math.random() - 0.5) * 30,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: color }}
          animate={{ y: [0, -p.drift, 0], opacity: [0, 0.8, 0] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
