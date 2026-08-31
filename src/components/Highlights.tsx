import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { HIGHLIGHTS } from '@/data';
import SectionHeading from './primitives/SectionHeading';

const CATEGORIES = ['Best Raids', 'Super Tackles', 'Super 10s', 'High 5s', 'Match Winners'];

export default function Highlights() {
  return (
    <section id="highlights" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-80 w-80 rounded-full bg-electric-500/10 blur-[120px]" />
      <div className="container-arena relative z-10">
        <SectionHeading eyebrow="Re-live The Action" title="Best Moments" accent={<p className="max-w-md text-sm text-white/50">Cinematic cuts from the season — every super raid, super tackle and match-winning touch.</p>} />

        <div className="mt-6 flex flex-wrap gap-2">
          {CATEGORIES.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="chip"
            >
              {c}
            </motion.span>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h, i) => (
            <HighlightCard key={h.id} h={h} index={i} featured={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightCard({ h, index, featured }: { h: (typeof HIGHLIGHTS)[number]; index: number; featured?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: featured ? 1.01 : 1.02 }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
      data-cursor="hover"
    >
      <div className={`relative ${featured ? 'h-[420px] lg:h-full' : 'h-64'}`}>
        <img src={h.img} alt={h.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent" />
        <motion.div className="absolute inset-0 bg-ink-950/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* play button */}
        <motion.div
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white/70 bg-white/10 backdrop-blur-md transition-transform duration-300 group-hover:scale-110"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="group-hover:animate-[pulseRing_1.5s_ease-out_infinite] absolute inset-0 rounded-full border-2 border-flame-500" />
          <Play className="h-6 w-6 fill-white text-white" />
        </motion.div>

        {/* category + duration */}
        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full bg-flame-gradient px-3 py-1 font-heading text-[10px] uppercase tracking-widest text-white shadow-glow-flame">{h.category}</span>
        </div>
        <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1 font-heading text-[10px] uppercase tracking-widest text-white backdrop-blur">
          <Clock className="h-3 w-3" /> {h.duration}
        </span>

        {/* title */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <h3 className={`font-heading uppercase tracking-wide text-white ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>{h.title}</h3>
          <motion.div className="mt-3 flex items-center gap-2 font-heading text-[10px] uppercase tracking-widest text-flame-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <Play className="h-3 w-3 fill-current" /> Watch Now
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
