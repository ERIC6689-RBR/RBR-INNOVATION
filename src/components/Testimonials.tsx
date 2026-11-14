import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="border-b border-[#D4AF37]/15 bg-[#070709] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E5C158]">
            Prova social · Empresários em todo o Brasil
          </p>
          <h2
            className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Quem publicou com a RBR Innovation colheu resultado rápido.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <motion.blockquote
              key={item.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="metallic-surface rounded-xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <Quote className="h-5 w-5 text-[#E5C158]/85" aria-hidden="true" />
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-200">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D4AF37]/12">
                <p className="font-mono text-xs font-medium text-[#E5C158] tabular-nums">
                  {item.result}
                </p>
                <footer className="mt-3">
                  <p className="font-display text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-zinc-400">
                    {item.role} · {item.company} · {item.city}
                  </p>
                </footer>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
