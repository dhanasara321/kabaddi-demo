import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { IMG } from '@/data';
import RevealText from './primitives/RevealText';

export default function StadiumSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '20%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.2, 1.4]);
  const textY = useTransform(scrollYProgress, [0, 1], ['40%', '-40%']);

  return (
    <section ref={ref} className="relative h-[90vh] min-h-[560px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={IMG.stadiumCrowd} alt="Kabaddi stadium crowd" className="h-full w-full object-cover" loading="lazy" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/40 to-ink-950" />
      <div className="absolute inset-0 bg-radial-flame opacity-40" />

      <motion.div style={{ y: textY }} className="container-arena relative z-10 flex h-full flex-col items-center justify-center text-center">
        <span className="chip mb-6">The Arena Experience</span>
        <h2 className="display-text text-[15vw] leading-[0.85] sm:text-7xl lg:text-8xl">
          <RevealText text="POWER." />
          <br />
          <RevealText text="SPEED." className="text-flame-500" />
          <br />
          <RevealText text="COURAGE." />
          <br />
          <RevealText text="GLORY." className="text-stroke-flame" />
        </h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 max-w-lg text-sm text-white/60 sm:text-base"
        >
          Step into the roar. Feel the floor shake. This is Kabaddi at its most electric.
        </motion.p>
      </motion.div>
    </section>
  );
}
