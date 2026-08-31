import { motion } from 'framer-motion';
import { Activity, Instagram, Youtube, Facebook, Twitter } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Matches', href: '#live' },
  { label: 'Teams', href: '#teams' },
  { label: 'Players', href: '#players' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'News', href: '#news' },
  { label: 'About', href: '#home' },
];

const SOCIALS = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'X' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="absolute inset-0 bg-grid-faint [background-size:60px_60px] opacity-10" />
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[80%] -translate-x-1/2 rounded-full bg-flame-500/10 blur-[120px]" />

      <div className="container-arena relative z-10 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_2fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5" data-cursor="hover">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-flame-gradient shadow-glow-flame">
                <Activity className="h-5 w-5 text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-xl tracking-wider">
                KABADDI<span className="text-flame-500">ARENA</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              The home of professional Kabaddi. Live matches, elite athletes, and the stories that define the sport.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  data-cursor="hover"
                  whileHover={{ y: -3, scale: 1.08 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/70 transition hover:border-flame-500 hover:text-flame-400"
                >
                  <s.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                data-cursor="hover"
                className="font-heading text-sm uppercase tracking-wider text-white/60 transition hover:text-flame-400"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-widest text-white">Never Miss A Raid</h4>
            <p className="mt-3 text-xs text-white/50">Get match alerts and highlights in your inbox.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-flame-500"
              />
              <button className="shrink-0 rounded-lg bg-flame-gradient px-4 py-2.5 font-heading text-xs uppercase tracking-widest text-white shadow-glow-flame transition hover:scale-105">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/40">© 2026 Kabaddi Arena. All Rights Reserved.</p>
          <p className="text-xs text-white/40">Built for the love of the mat.</p>
        </div>
      </div>
    </footer>
  );
}
