import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import RevealText from './RevealText';

type Props = {
  eyebrow: string;
  title: string;
  align?: 'left' | 'center';
  accent?: ReactNode;
};

export default function SectionHeading({ eyebrow, title, align = 'left', accent }: Props) {
  return (
    <div className={align === 'center' ? 'flex flex-col items-center text-center' : 'flex flex-col items-start text-left'}>
      <motion.div
        initial={{ opacity: 0, x: align === 'center' ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mb-4 inline-flex items-center gap-3 ${align === 'center' ? '' : ''}`}
      >
        <span className="h-px w-10 bg-flame-500" />
        <span className="font-heading text-sm uppercase tracking-[0.3em] text-flame-400">{eyebrow}</span>
        {align === 'center' && <span className="h-px w-10 bg-flame-500" />}
      </motion.div>
      <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl">
        <RevealText text={title} />
      </h2>
      {accent && <div className="mt-4">{accent}</div>}
    </div>
  );
}
