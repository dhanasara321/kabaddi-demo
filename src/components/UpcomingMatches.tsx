import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { UPCOMING } from '@/data';
import SectionHeading from './primitives/SectionHeading';

export default function UpcomingMatches() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-45%']);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' });
  };

  return (
    <section id="upcoming" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute inset-0 bg-grid-faint [background-size:80px_80px] opacity-20" />
      <div className="container-arena relative z-10 mb-10 flex items-end justify-between gap-6">
        <SectionHeading eyebrow="Upcoming" title="On The Horizon" accent={<p className="max-w-md text-sm text-white/50">Swipe through the next clashes across the league. Every fixture, one scroll away.</p>} />
        <div className="hidden gap-2 md:flex">
          <button onClick={() => scrollBy(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-flame-500 hover:text-flame-400" aria-label="Previous">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={() => scrollBy(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-flame-500 hover:text-flame-400" aria-label="Next">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Parallax horizontal track (decorative duplicate for cinematic feel) */}
      <motion.div style={{ x }} className="pointer-events-none absolute right-0 top-1/2 -z-0 hidden select-none font-display text-[18vw] text-white/[0.02] lg:block">
        FIXTURES
      </motion.div>

      <div
        ref={trackRef}
        className="relative z-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-6 sm:px-8 lg:px-12 mask-fade-x"
        style={{ scrollbarWidth: 'none' }}
      >
        {UPCOMING.map((m, i) => (
          <MatchCard key={m.id} m={m} index={i} />
        ))}
        <div className="w-2 shrink-0" />
      </div>
    </section>
  );
}

function MatchCard({ m, index }: { m: (typeof UPCOMING)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ y: -12 }}
      className="group relative w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-ink-800 sm:w-[340px]"
      data-cursor="hover"
    >
      {/* hover background image */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-30">
        <img src={m.img} alt="" className="h-full w-full object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-900/80 to-transparent" />

      {/* animated neon border */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl ring-1 ring-flame-500/60 shadow-glow-flame" />
      </div>

      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <span className="chip">{m.date}</span>
          <span className="font-heading text-[10px] uppercase tracking-widest text-white/40">Fixture {index + 1}</span>
        </div>

        <div className="my-7 flex items-center justify-between gap-3">
          <TeamLogo name={m.home} />
          <span className="font-display text-xl text-white/30">VS</span>
          <TeamLogo name={m.away} />
        </div>

        <div className="space-y-2 text-sm text-white/70">
          <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-flame-400" /> {m.date} · {m.time}</div>
          <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-flame-400" /> {m.venue}</div>
          <div className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-flame-400" /> Kick-off {m.time} IST</div>
        </div>

        <a href="#live" className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-heading text-xs uppercase tracking-widest text-white transition group-hover:border-flame-500/60 group-hover:bg-flame-500/10">
          View Match
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}

function TeamLogo({ name }: { name: string }) {
  const short = name.split(' ').map((w) => w[0]).join('').slice(0, 2);
  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <motion.div
        whileHover={{ scale: 1.15, rotate: 6 }}
        className="flex h-14 w-14 items-center justify-center rounded-xl bg-flame-gradient font-display text-lg text-white shadow-glow-flame"
      >
        {short}
      </motion.div>
      <span className="text-center font-heading text-xs uppercase tracking-wider text-white/80">{name}</span>
    </div>
  );
}
