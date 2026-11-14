import { motion } from 'motion/react';
import { ArrowUpRight, Check } from 'lucide-react';
import { PRICING_PLANS } from '../data/portfolioData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  return (
    <section
      id="planos"
      className="border-b border-[#D4AF37]/15 bg-[#0B0B0E] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E5C158]">
            Planos e investimento · Entrega no mesmo dia
          </p>
          <h2
            className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Escolha a estrutura ideal para acelerar o seu faturamento.
          </h2>
          <p className="mt-4 text-base text-zinc-300">
            Valores transparentes, pagamento único pela criação e entrega
            imediata para sua empresa começar a capturar clientes hoje mesmo.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3 items-stretch">
          {PRICING_PLANS.map((plan, index) => (
            <motion.article
              key={plan.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.4,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`rounded-xl p-6 sm:p-8 flex flex-col justify-between ${
                plan.featured
                  ? 'metallic-surface-elevated shadow-[0_20px_50px_-24px_rgba(212,175,55,0.28)]'
                  : 'metallic-surface'
              }`}
            >
              <div>
                <div className="flex items-baseline justify-between gap-2 pb-4 border-b border-[#D4AF37]/15">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="text-xs font-medium text-[#E5C158] whitespace-nowrap">
                      Recomendado
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  {plan.subtitle}
                </p>

                <div className="mt-6 pb-6 border-b border-[#D4AF37]/15">
                  <p className="font-mono text-3xl sm:text-4xl font-semibold tracking-tight text-[#E5C158] tabular-nums">
                    {plan.price}
                  </p>
                  <p className="mt-1.5 text-xs text-zinc-400">
                    {plan.deliveryNote}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-zinc-200"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#E5C158]"
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => onSelectPlan(plan.name)}
                className={`mt-8 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-150 active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer ${
                  plan.featured
                    ? 'bg-[#D4AF37] text-[#09090B] border border-[#F3DF9A]/45 hover:bg-[#E5C158]'
                    : 'bg-zinc-900 text-white border border-[#D4AF37]/30 hover:bg-zinc-800 hover:border-[#E5C158]/60'
                }`}
              >
                <span>{plan.ctaLabel}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
