import { motion } from 'framer-motion';
import { Home, Radio, Trophy, Users, BarChart3 } from 'lucide-react';

const ITEMS = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: Radio, label: 'Live', href: '#live' },
  { icon: Trophy, label: 'Teams', href: '#teams' },
  { icon: Users, label: 'Players', href: '#players' },
  { icon: BarChart3, label: 'Stats', href: '#stats' },
];

export default function MobileNav() {
  return (
    <motion.nav
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed inset-x-0 bottom-0 z-40 lg:hidden"
    >
      <div className="glass-strong mx-3 mb-3 flex items-center justify-around rounded-2xl border border-white/10 px-2 py-2">
        {ITEMS.map((i) => (
          <a
            key={i.label}
            href={i.href}
            className="flex flex-1 flex-col items-center gap-1 rounded-xl py-1.5 text-white/60 transition active:bg-white/5 active:text-flame-400"
            aria-label={i.label}
          >
            <i.icon className="h-5 w-5" />
            <span className="font-heading text-[9px] uppercase tracking-wider">{i.label}</span>
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
