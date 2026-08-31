import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PLAYERS } from '@/data';
import SectionHeading from './primitives/SectionHeading';
import AnimatedCounter from './primitives/AnimatedCounter';

const positionColor: Record<string, string> = {
  Raider: '#ff5a1f',
  Defender: '#38bdf8',
  'All Rounder': '#f59e0b',
};

export default function Players() {
  return (
    <section id="players" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-grid-faint [background-size:70px_70px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-flame-500/10 blur-[120px]" />
      <div className="container-arena relative z-10">
        <SectionHeading
          eyebrow="The Stars"
          title="The Raiders"
          accent={<p className="max-w-md text-sm text-white/50">Athletes who turn raids into art. Meet the difference-makers of the season.</p>}
        />
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PLAYERS.slice(0, 3).map((p, i) => (
            <PlayerCard key={p.id} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayerCard({ p, index }: { p: (typeof PLAYERS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(sry, [-0.5, 0.5], ['-10deg', '10deg']);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    rx.set((e.clientY - r.top - r.height / 2) / r.height);
    ry.set((e.clientX - r.left - r.width / 2) / r.width);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const color = positionColor[p.position] ?? '#ff5a1f';

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="perspective-1000"
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ y: -10 }}
        className="group relative h-[440px] overflow-visible rounded-3xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 p-6"
        data-cursor="hover"
      >
        {/* moving gradient backdrop */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-30"
          style={{ background: `radial-gradient(circle at 50% 30%, ${color}40, transparent 60%)` }}
          animate={{ opacity: [0.25, 0.45, 0.25] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Player image extending above the card */}
        <motion.img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="absolute left-1/2 top-[-40px] z-20 h-[300px] w-[220px] -translate-x-1/2 rounded-2xl object-cover object-top shadow-2xl"
          style={{ transform: 'translateZ(60px) translateX(-50%)' }}
          whileHover={{ y: -18, scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 200, damping: 18 }}
        />

        <div className="relative z-10 flex h-full flex-col justify-end" style={{ transform: 'translateZ(30px)' }}>
          <span className="chip mb-3 w-fit" style={{ borderColor: `${color}80`, color }}>
            {p.position}
          </span>
          <h3 className="font-heading text-2xl uppercase tracking-wide text-white">{p.name}</h3>
          <p className="text-sm text-white/50">{p.team}</p>

          <div className="mt-5 grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
            <Stat label="Raid" value={p.raid} />
            <Stat label="Tackle" value={p.tackle} />
            <Stat label="Total" value={p.total} accent={color} />
          </div>
        </div>
      </motion.article>
    </motion.div>
  );
}

function Stat({ label, value, accent = '#ffffff' }: { label: string; value: number; accent?: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] uppercase tracking-widest text-white/40">{label}</p>
      <p className="font-display text-2xl" style={{ color: accent }}>
        <AnimatedCounter value={value} duration={1.6} />
      </p>
    </div>
  );
}
