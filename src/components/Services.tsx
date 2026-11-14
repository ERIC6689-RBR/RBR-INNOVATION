import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../data/portfolioData';

interface ServicesProps {
  onPrimaryAction: () => void;
}

export function Services({ onPrimaryAction }: ServicesProps) {
  return (
    <section
      id="servicos"
      className="border-b border-[#D4AF37]/15 bg-[#070709] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#E5C158]">
              Serviços · Vendas de sites para qualquer segmento
            </p>
            <h2
              className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Soluções digitais diretas para empresas que precisam faturar mais.
            </h2>
          </div>

          <button
            type="button"
            onClick={onPrimaryAction}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#09090B] border border-[#F3DF9A]/45 transition-all duration-150 hover:bg-[#E5C158] active:scale-[0.98] whitespace-nowrap shrink-0 self-start md:self-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
          >
            <span>Aumentar meu faturamento</span>
            <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`metallic-surface rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:border-[#E5C158]/40 ${
                service.span === 'wide' ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 pb-4 border-b border-[#D4AF37]/12">
                  <span className="font-mono text-sm font-medium text-[#E5C158] tabular-nums">
                    {service.number}
                  </span>
                  <span className="text-xs text-zinc-400">{service.meta}</span>
                </div>

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-semibold tracking-tight text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-zinc-300">
                  {service.description}
                </p>
              </div>

              <p className="mt-6 pt-4 border-t border-[#D4AF37]/12 text-xs sm:text-sm font-medium text-zinc-200">
                {service.outcome}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
