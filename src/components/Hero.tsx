import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, ChevronDown, Radio } from 'lucide-react';
import { IMG } from '@/data';
import ParticleField from './primitives/ParticleField';
import RevealText from './primitives/RevealText';
import MagneticButton from './primitives/MagneticButton';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-screen min-h-[680px] w-full overflow-hidden">
      {/* Background image with parallax + slow zoom */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <motion.img
          src={IMG.hero}
          alt="Kabaddi player in a powerful raid"
          className="h-full w-full object-cover object-center"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          loading="eager"
        />
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/40" />
      <div className="absolute inset-0 bg-radial-flame opacity-70" />

      {/* Stadium light beams */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute -left-20 top-0 h-[120%] w-40 bg-gradient-to-b from-flame-500/20 to-transparent blur-2xl animate-beam" />
        <div className="absolute left-1/3 top-0 h-[120%] w-32 bg-gradient-to-b from-electric-400/15 to-transparent blur-2xl animate-beam [animation-delay:1.5s]" />
        <div className="absolute right-10 top-0 h-[120%] w-44 bg-gradient-to-b from-ember-500/20 to-transparent blur-2xl animate-beam [animation-delay:3s]" />
      </div>

      {/* Particles */}
      <ParticleField count={50} className="z-[2]" color="rgba(255,170,120,0.5)" />

      {/* Grid pattern */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-grid-faint [background-size:60px_60px] opacity-30 [mask-image:radial-gradient(circle_at_30%_50%,black,transparent_75%)]" />

      {/* Floating live badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute right-5 top-24 z-20 sm:right-8 lg:right-12"
      >
        <div className="glass-strong flex items-center gap-3 rounded-full px-4 py-2.5 shadow-glow-ember">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember-500 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-ember-500" />
          </span>
          <span className="font-heading text-xs uppercase tracking-widest text-white">Live Match</span>
          <Radio className="h-3.5 w-3.5 text-ember-500" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div style={{ y: textY, opacity: fade }} className="container-arena relative z-10 flex h-full flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-flame-500" />
          <span className="font-heading text-sm uppercase tracking-[0.4em] text-flame-400">Season 2026 · Live Now</span>
        </motion.div>

        <h1 className="display-text text-[16vw] leading-[0.82] sm:text-7xl md:text-8xl lg:text-[9rem]">
          <RevealText text="KABADDI" delay={0.4} stagger={0.12} />
          <br />
          <RevealText text="ARENA" delay={0.6} stagger={0.12} className="text-flame-500" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-6 max-w-xl font-heading text-lg uppercase tracking-[0.2em] text-white/80 sm:text-2xl"
        >
          The Game of Power. Speed. Strategy.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-4 max-w-md text-sm text-white/60 sm:text-base"
        >
          Experience Kabaddi like never before — live matches, teams, players, statistics and unforgettable moments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <MagneticButton href="#live" className="btn-flame">
            Explore Matches
          </MagneticButton>
          <MagneticButton href="#highlights" className="btn-ghost">
            <Play className="h-4 w-4 fill-current" /> Watch Highlights
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-heading text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex h-9 w-6 items-start justify-center rounded-full border border-white/25 p-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
          </motion.div>
          <ChevronDown className="h-4 w-4 text-white/40" />
        </div>
      </motion.div>
    </section>
  );
}
