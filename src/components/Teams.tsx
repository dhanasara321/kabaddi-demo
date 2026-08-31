import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TEAMS } from '@/data';
import SectionHeading from './primitives/SectionHeading';

export default function Teams() {
  return (
    <section id="teams" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div className="absolute inset-0 bg-radial-flame opacity-30" />
      <div className="container-arena relative z-10">
        <SectionHeading
          eyebrow="The Franchises"
          title="Powerhouse Teams"
          accent={<p className="max-w-md text-sm text-white/50">Six franchises. One trophy. Every squad carries a city's pride into the arena.</p>}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEAMS.map((t, i) => (
            <TeamCard key={t.id} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ t, index }: { t: (typeof TEAMS)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 18 });
  const sry = useSpring(ry, { stiffness: 200, damping: 18 });
  const rotateX = useTransform(srx, [-0.5, 0.5], ['8deg', '-8deg']);
  const rotateY = useTransform(sry, [-0.5, 0.5], ['-8deg', '8deg']);

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

  const short = t.name.split(' ').map((w) => w[0]).join('').slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="perspective-1000"
    >
      <motion.article
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-7"
        data-cursor="hover"
      >
        {/* colored glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50" style={{ background: t.color }} />
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100" style={{ boxShadow: `inset 0 0 0 1px ${t.color}80` }} />

        <div className="relative flex items-start justify-between" style={{ transform: 'translateZ(40px)' }}>
          <div>
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl font-display text-2xl text-white"
              style={{ background: t.color, boxShadow: `0 0 28px ${t.color}77` }}
            >
              {short}
            </motion.div>
          </div>
          <div className="text-right">
            <span className="font-heading text-[10px] uppercase tracking-widest text-white/40">Points</span>
            <p className="font-display text-4xl" style={{ color: t.color }}>{t.points}</p>
          </div>
        </div>

        <div className="relative mt-6" style={{ transform: 'translateZ(25px)' }}>
          <h3 className="font-heading text-2xl uppercase tracking-wide text-white">{t.name}</h3>
          <p className="text-sm text-white/50">{t.city}</p>
        </div>

        <div className="relative mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5" style={{ transform: 'translateZ(20px)' }}>
          <Stat label="Played" value={t.played} />
          <Stat label="Wins" value={t.wins} accent="#22c55e" />
          <Stat label="Losses" value={t.losses} accent="#ef4444" />
        </div>
      </motion.article>
    </motion.div>
  );
}

function Stat({ label, value, accent = '#ffffff' }: { label: string; value: number; accent?: string }) {
  return (
    <div>
      <p className="font-heading text-[10px] uppercase tracking-widest text-white/40">{label}</p>
      <p className="font-display text-2xl" style={{ color: accent }}>{value}</p>
    </div>
  );
}
