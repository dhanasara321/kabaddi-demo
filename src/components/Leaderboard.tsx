import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Medal } from 'lucide-react';
import { PLAYERS } from '@/data';
import SectionHeading from './primitives/SectionHeading';
import AnimatedCounter from './primitives/AnimatedCounter';

const TABS = ['Raiders', 'Defenders', 'All Rounders'] as const;
type Tab = (typeof TABS)[number];

const POS_MAP: Record<Tab, string[]> = {
  Raiders: ['Raider'],
  Defenders: ['Defender'],
  'All Rounders': ['All Rounder'],
};

export default function Leaderboard() {
  const [tab, setTab] = useState<Tab>('Raiders');
  const rows = PLAYERS.filter((p) => POS_MAP[tab].includes(p.position)).sort((a, b) => b.total - a.total);

  return (
    <section id="leaderboard" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="container-arena relative z-10">
        <SectionHeading eyebrow="Standings" title="Season Leaderboard" accent={<p className="max-w-md text-sm text-white/50">The finest raiders, defenders and all-rounders ranked by total points.</p>} />

        {/* Tabs */}
        <div className="mt-8 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="relative rounded-full px-5 py-2 font-heading text-xs uppercase tracking-widest transition"
              data-cursor="hover"
            >
              {tab === t && (
                <motion.span layoutId="tabPill" className="absolute inset-0 rounded-full bg-flame-gradient shadow-glow-flame" transition={{ type: 'spring', stiffness: 300, damping: 26 }} />
              )}
              <span className={`relative z-10 ${tab === t ? 'text-white' : 'text-white/50'}`}>{t}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-10"
          >
            {/* Top 3 podium */}
            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {rows.slice(0, 3).map((p, i) => (
                <PodiumCard key={p.id} p={p} rank={i + 1} />
              ))}
            </div>

            {/* Full table */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
              <div className="grid grid-cols-[48px_1.5fr_1fr_1fr_1fr_1fr] gap-4 border-b border-white/10 px-5 py-3 font-heading text-[10px] uppercase tracking-widest text-white/40">
                <span>Rank</span>
                <span>Player</span>
                <span className="hidden sm:block">Team</span>
                <span className="text-right">Raid</span>
                <span className="text-right">Tackle</span>
                <span className="text-right">Total</span>
              </div>
              {rows.map((p, i) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="grid grid-cols-[48px_1.5fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b border-white/5 px-5 py-4 transition hover:bg-white/[0.03]"
                >
                  <span className="font-display text-xl text-white/50">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex items-center gap-3">
                    <img src={p.img} alt={p.name} loading="lazy" className="h-10 w-10 rounded-lg object-cover object-top" />
                    <div>
                      <p className="font-heading text-sm uppercase tracking-wide text-white">{p.name}</p>
                      <p className="text-xs text-white/40 sm:hidden">{p.team}</p>
                    </div>
                  </div>
                  <span className="hidden text-sm text-white/60 sm:block">{p.team}</span>
                  <span className="text-right font-display text-lg tabular-nums text-white/80">{p.raid}</span>
                  <span className="text-right font-display text-lg tabular-nums text-white/80">{p.tackle}</span>
                  <span className="text-right font-display text-xl tabular-nums text-flame-400">{p.total}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

function PodiumCard({ p, rank }: { p: (typeof PLAYERS)[number]; rank: number }) {
  const styles = rank === 1 ? { color: '#fbbf24', icon: <Crown className="h-5 w-5" />, ring: 'ring-gold-400/60' } : { color: '#cbd5e1', icon: <Medal className="h-5 w-5" />, ring: 'ring-white/30' };
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: rank * 0.1 }}
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-800 to-ink-900 p-5 ring-1 ${styles.ring}`}
    >
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-heading text-sm uppercase tracking-widest" style={{ color: styles.color }}>
          {styles.icon} Rank {rank}
        </span>
        <span className="font-display text-5xl" style={{ color: styles.color }}>{rank}</span>
      </div>
      <div className="mt-4 flex items-center gap-3">
        <img src={p.img} alt={p.name} loading="lazy" className="h-16 w-16 rounded-xl object-cover object-top" />
        <div>
          <p className="font-heading text-lg uppercase tracking-wide text-white">{p.name}</p>
          <p className="text-xs text-white/50">{p.team} · {p.position}</p>
        </div>
      </div>
      <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
        <span className="font-heading text-[10px] uppercase tracking-widest text-white/40">Total Points</span>
        <span className="font-display text-4xl text-flame-400">
          <AnimatedCounter value={p.total} duration={2} />
        </span>
      </div>
    </motion.div>
  );
}
