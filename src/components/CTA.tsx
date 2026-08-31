import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import RevealText from './primitives/RevealText';
import MagneticButton from './primitives/MagneticButton';
import ParticleField from './primitives/ParticleField';

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden py-32 sm:py-40">
      <div className="absolute inset-0 bg-ink-950" />
      {/* animated glowing background */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, #ff5a1f, transparent 60%)' }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/3 top-1/3 h-80 w-80 rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, #0ea5e9, transparent 60%)' }}
        animate={{ scale: [1.1, 0.9, 1.1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <ParticleField count={45} color="rgba(255,170,120,0.5)" />

      <div className="container-arena relative z-10 flex flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="chip mb-6"
        >
          <Zap className="h-3.5 w-3.5 text-flame-400" /> Join The Movement
        </motion.span>

        <h2 className="display-text text-5xl sm:text-7xl lg:text-8xl">
          <RevealText text="READY FOR THE" />
          <br />
          <RevealText text="NEXT RAID?" className="text-flame-500" />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-white/60 sm:text-lg"
        >
          Follow every match. Track every point. Experience every moment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="#upcoming" className="btn-flame">
            View Matches <ArrowRight className="h-4 w-4" />
          </MagneticButton>
          <MagneticButton href="#live" className="btn-ghost">
            Join The Arena
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
