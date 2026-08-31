import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Activity } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Matches', href: '#live' },
  { label: 'Teams', href: '#teams' },
  { label: 'Players', href: '#players' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'News', href: '#news' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong border-b border-white/10 py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="container-arena flex items-center justify-between">
          <a href="#home" className="group flex items-center gap-2.5" data-cursor="hover">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-flame-gradient shadow-glow-flame">
              <Activity className="h-5 w-5 text-white" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl tracking-wider">
              KABADDI<span className="text-flame-500">ARENA</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  data-cursor="hover"
                  className="group relative rounded-full px-4 py-2 font-heading text-sm uppercase tracking-widest text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-0.5 origin-left scale-x-0 bg-flame-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#cta" data-cursor="hover" className="btn-flame text-xs">
              Join The Arena
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col gap-2 border-l border-white/10 bg-ink-900 p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-lg tracking-wider">
                  KABADDI<span className="text-flame-500">ARENA</span>
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  className="border-b border-white/5 py-3 font-heading text-lg uppercase tracking-widest text-white/80"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#cta" onClick={() => setOpen(false)} className="btn-flame mt-6 justify-center">
                Join The Arena
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
