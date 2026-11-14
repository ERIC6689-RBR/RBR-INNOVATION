import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_METRICS } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  onPrimaryAction: () => void;
}

export function Hero({ onPrimaryAction }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-[#D4AF37]/15 bg-[#070709] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(212,175,55,0.16),transparent_70%)]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <p className="text-xs sm:text-sm font-medium tracking-wide text-[#E5C158]">
                RBR Innovation · Brasil · Entrega no mesmo dia
              </p>

              <h1
                className="mt-5 font-display font-bold tracking-tight text-white leading-[1.08]"
                style={{
                  fontSize: 'clamp(2.25rem, 4vw, 3.65rem)',
                  textWrap: 'balance',
                }}
              >
                Seu negócio merece mais do que presença.{' '}
                <span className="metallic-text">Merece destaque.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-zinc-300">
                Sites profissionais sob medida para empresas de qualquer segmento
                que querem aumentar seu faturamento. Design escuro de alto padrão,
                textos pensados para fechar vendas e publicação rápida para você
                faturar sem esperar semanas.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                type="button"
                onClick={onPrimaryAction}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#D4AF37] px-7 py-3.5 text-sm sm:text-base font-semibold text-[#09090B] border border-[#F3DF9A]/45 shadow-[0_12px_32px_-8px_rgba(212,175,55,0.42)] transition-all duration-150 hover:bg-[#E5C158] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709] cursor-pointer"
              >
                <span>Aumentar meu faturamento</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-zinc-900/60 px-6 py-3.5 text-sm font-medium text-zinc-200 transition-colors duration-150 hover:border-[#D4AF37]/50 hover:bg-zinc-900 hover:text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
              >
                Ver projetos entregues
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex"
          >
            <div className="relative w-full overflow-hidden rounded-xl metallic-surface p-2 sm:p-3">
              <div className="relative h-64 sm:h-80 lg:h-full min-h-[320px] w-full overflow-hidden rounded-lg bg-[#040406]">
                <ResilientImage
                  src="/src/assets/images/hero_rbr_showcase_1794664200968.jpg"
                  alt="Estação corporativa exibindo site institucional de alta conversão criado pela RBR Innovation"
                  fallbackTitle="RBR Innovation — Sites de Alta Conversão"
                  className="h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040406]/92 via-[#040406]/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <p className="text-xs font-mono tracking-wide text-[#E5C158]">
                    Especializado em geral · Atendimento nacional
                  </p>
                  <p className="mt-1 font-display text-base sm:text-lg font-semibold text-white">
                    Do briefing ao site no ar no mesmo dia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 pt-8 border-t border-[#D4AF37]/15">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_METRICS.map((metric) => (
              <div key={metric.value} className="flex flex-col gap-1.5">
                <span className="font-mono text-xl sm:text-2xl font-semibold tracking-tight text-[#E5C158] tabular-nums">
                  {metric.value}
                </span>
                <span className="text-sm leading-snug text-zinc-400">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
