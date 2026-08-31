import { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, motion } from 'framer-motion';

type Props = {
  value: number;
  duration?: number;
  className?: string;
  format?: (n: number) => string;
};

export default function AnimatedCounter({ value, duration = 2, className, format }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    return spring.on('change', (v) => setDisplay(v));
  }, [spring]);

  const shown = format ? format(display) : Math.round(display).toLocaleString();

  return (
    <span ref={ref} className={className}>
      {shown}
    </span>
  );
}
