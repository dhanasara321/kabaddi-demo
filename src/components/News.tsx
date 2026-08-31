import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { NEWS } from '@/data';
import SectionHeading from './primitives/SectionHeading';

export default function News() {
  return (
    <section id="news" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div className="container-arena relative z-10">
        <SectionHeading eyebrow="Latest Updates" title="Kabaddi News" accent={<p className="max-w-md text-sm text-white/50">Stay on top of every record, transfer and championship headline from the league.</p>} />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {NEWS.map((n, i) => (
            <NewsCard key={n.id} n={n} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ n, index }: { n: (typeof NEWS)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
      data-cursor="hover"
    >
      <div className="relative h-52 overflow-hidden">
        <img src={n.img} alt={n.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-flame-gradient px-3 py-1 font-heading text-[10px] uppercase tracking-widest text-white shadow-glow-flame">{n.category}</span>
      </div>
      <div className="p-6">
        <span className="font-heading text-[10px] uppercase tracking-widest text-white/40">{n.date}</span>
        <h3 className="mt-2 font-heading text-xl uppercase tracking-wide text-white transition-colors group-hover:text-flame-400">{n.title}</h3>
        <p className="mt-3 text-sm text-white/55">{n.excerpt}</p>
        <div className="mt-4 flex items-center gap-1.5 font-heading text-xs uppercase tracking-widest text-flame-400">
          Read More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}
