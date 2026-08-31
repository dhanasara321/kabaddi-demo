import { motion } from 'framer-motion';
import { STATS } from '@/data';
import AnimatedCounter from './primitives/AnimatedCounter';
import SectionHeading from './primitives/SectionHeading';

export default function Statistics() {
  return (
    <section id="stats" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-ink-950" />
      <div className="absolute inset-0 bg-grid-faint [background-size:80px_80px] opacity-20" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-flame-500/10 blur-[140px]" />
      <div className="container-arena relative z-10">
        <SectionHeading eyebrow="By The Numbers" title="Season Statistics" align="center" accent={<p className="max-w-lg text-sm text-white/50">A look at the raw numbers powering an unforgettable season of Kabaddi.</p>} />

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 text-center backdrop-blur-xl"
              data-cursor="hover"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-0 rounded-2xl shadow-glow-flame" />
              </div>
              <div className="pointer-events-none absolute -top-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-flame-500/20 blur-2xl transition group-hover:bg-flame-500/40" />
              <p className="relative font-display text-5xl text-white sm:text-6xl">
                <AnimatedCounter value={s.value} duration={2.4} />
              </p>
              <p className="relative mt-3 font-heading text-[11px] uppercase tracking-widest text-white/50">{s.label}</p>
              <span className="relative mt-4 mx-auto block h-0.5 w-12 bg-flame-gradient" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
