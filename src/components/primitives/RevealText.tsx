import { motion, type Variants } from 'framer-motion';

type Props = {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

const container: Variants = {
  hidden: {},
  show: (stagger: number) => ({
    transition: { staggerChildren: stagger },
  }),
};

const word: Variants = {
  hidden: { y: '110%', opacity: 0, rotateX: -40 },
  show: {
    y: '0%',
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function RevealText({ text, className = '', delay = 0, stagger = 0.08, once = true }: Props) {
  const words = text.split(' ');
  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      custom={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-40px' }}
      transition={{ delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span className="inline-block" variants={word}>
            {w}
            {i < words.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
