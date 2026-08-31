import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Eye, Trophy, Activity, Target, Shield, Sparkles, Play } from 'lucide-react';
import AnimatedCounter from './primitives/AnimatedCounter';
import MagneticButton from './primitives/MagneticButton';
import SectionHeading from './primitives/SectionHeading';

const home = { name: 'Tamil Titans', short: 'TT', color: '#ff5a1f', score: 38 };
const away = { name: 'Bengaluru Bulls', short: 'BB', color: '#e01717', score: 34 };

const homeStats = { raid: 22, tackle: 12, bonus: 4 };
const awayStats = { raid: 19, tackle: 11, bonus: 4 };

type Toast = { id: number; text: string };

export default function LiveMatch() {
  const [scores, setScores] = useState({ home: 38, away: 34 });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const side = Math.random() > 0.5 ? 'home' : 'away';
      const point = Math.random() > 0.4 ? 'RAID POINT' : Math.random() > 0.5 ? 'TACKLE POINT' : 'BONUS POINT';
      setScores((s) => ({ ...s, [side]: s[side] + 1 }));
      const id = idRef.current++;
      setToasts((t) => [...t, { id, text: `+1 ${point} · ${side === 'home' ? home.name : away.name}` }]);
      setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const max = Math.max(scores.home, scores.away);

  return (
    <section id="live" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="container-arena relative z-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Live Now" title="The Battle In Progress" />
          <div className="glass flex items-center gap-3 rounded-full px-4 py-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember-500" />
            </span>
            <span className="font-heading text-xs uppercase tracking-widest text-white/80">Streaming · 2nd Half</span>
          </div>
        </div>

        {/* Main match card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="clip-notch relative mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-2xl sm:p-10"
        >
          {/* glow border on score change */}
          <motion.div
            key={`${scores.home}-${scores.away}`}
            initial={{ opacity: 0.6 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute inset-0 rounded-3xl shadow-glow-flame"
          />

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-flame-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-ember-500/10 blur-3xl" />

          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
            {/* Home team */}
            <TeamBlock team={home} score={scores.home} align="start" max={max} />

            {/* VS / timer */}
            <div className="flex flex-col items-center gap-3">
              <span className="font-display text-2xl text-white/30">VS</span>
              <div className="glass-strong flex flex-col items-center rounded-2xl px-5 py-3">
                <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-flame-400">2nd Half</span>
                <motion.span
                  key={scores.home + scores.away}
                  initial={{ scale: 1.15, color: '#ff5a1f' }}
                  animate={{ scale: 1, color: '#ffffff' }}
                  transition={{ duration: 0.4 }}
                  className="font-display text-3xl tabular-nums"
                >
                  02:14
                </motion.span>
              </div>
            </div>

            {/* Away team */}
            <TeamBlock team={away} score={scores.away} align="end" max={max} />
          </div>

          {/* Meta row */}
          <div className="relative mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
            <Meta icon={<MapPin className="h-4 w-4" />} label="Venue" value="Jawahar Stadium, Chennai" />
            <Meta icon={<Eye className="h-4 w-4" />} label="Live Viewers" value={<AnimatedCounter value={184320} format={(n) => Math.round(n).toLocaleString()} />} />
            <Meta icon={<Trophy className="h-4 w-4" />} label="Stage" value="Semi Final · Leg 2" />
            <Meta icon={<Activity className="h-4 w-4" />} label="Match No." value="118 / 128" />
          </div>

          {/* Stat comparison */}
          <div className="relative mt-8 space-y-5">
            <StatRow icon={<Activity className="h-4 w-4 text-flame-400" />} label="Raid Points" home={homeStats.raid} away={awayStats.raid} max={25} />
            <StatRow icon={<Shield className="h-4 w-4 text-electric-400" />} label="Tackle Points" home={homeStats.tackle} away={awayStats.tackle} max={15} />
            <StatRow icon={<Target className="h-4 w-4 text-gold-400" />} label="Bonus Points" home={homeStats.bonus} away={awayStats.bonus} max={6} />
          </div>

          <div className="relative mt-8 flex justify-center">
            <MagneticButton className="btn-flame">
              <Play className="h-4 w-4 fill-current" /> Watch Live
            </MagneticButton>
          </div>

          {/* Floating +1 point toasts */}
          <div className="pointer-events-none absolute right-6 top-6 flex flex-col items-end gap-2">
            <AnimatePresence>
              {toasts.map((t) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, x: 40, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  className="glass-strong flex items-center gap-2 rounded-full px-3 py-1.5 shadow-glow-flame"
                >
                  <Sparkles className="h-3.5 w-3.5 text-flame-400" />
                  <span className="font-heading text-xs uppercase tracking-wider text-white">{t.text}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TeamBlock({ team, score, align, max }: { team: typeof home; score: number; align: 'start' | 'end'; max: number }) {
  return (
    <div className={`flex flex-col items-center gap-4 ${align === 'end' ? 'md:items-end' : 'md:items-start'}`}>
      <div className="flex items-center gap-3">
        <motion.div
          whileHover={{ rotate: 8, scale: 1.08 }}
          className="flex h-14 w-14 items-center justify-center rounded-xl font-display text-xl text-white shadow-lg"
          style={{ background: team.color, boxShadow: `0 0 24px ${team.color}66` }}
        >
          {team.short}
        </motion.div>
        <div className={align === 'end' ? 'text-right' : 'text-left'}>
          <h3 className="font-heading text-lg uppercase tracking-wider text-white sm:text-2xl">{team.name}</h3>
          <span className="text-xs text-white/50">Home {align === 'end' ? 'Away' : 'Side'}</span>
        </div>
      </div>
      <motion.span
        key={score}
        initial={{ scale: 1.25, color: team.color }}
        animate={{ scale: 1, color: '#ffffff' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-7xl tabular-nums sm:text-8xl"
      >
        <AnimatedCounter value={score} duration={1.2} />
      </motion.span>
      <div className="h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full"
          style={{ background: team.color }}
          animate={{ width: `${(score / (max + 4)) * 100}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </div>
  );
}

function Meta({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-flame-400">
        {icon}
      </span>
      <div>
        <p className="font-heading text-[10px] uppercase tracking-widest text-white/40">{label}</p>
        <p className="text-sm text-white">{value}</p>
      </div>
    </div>
  );
}

function StatRow({ icon, label, home, away, max }: { icon: React.ReactNode; label: string; home: number; away: number; max: number }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-3">
      <span className="font-heading text-xs uppercase tracking-wider text-white/60">{home}</span>
      <div className="flex justify-end">
        <div className="h-2 w-full max-w-[180px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-flame-gradient"
            initial={{ width: 0 }}
            whileInView={{ width: `${(home / max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>
      <span className="flex items-center gap-1.5 font-heading text-[10px] uppercase tracking-widest text-white/50">
        {icon} {label}
      </span>
      <div className="flex justify-start">
        <div className="h-2 w-full max-w-[180px] overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-electric-gradient"
            initial={{ width: 0 }}
            whileInView={{ width: `${(away / max) * 100}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          />
        </div>
      </div>
      <span className="font-heading text-xs uppercase tracking-wider text-white/60">{away}</span>
    </div>
  );
}
