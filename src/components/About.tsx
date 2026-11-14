import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface AboutProps {
  onPrimaryAction: () => void;
}

const PILLARS = [
  {
    title: 'Velocidade comercial real',
    detail:
      'Enquanto concorrentes esperam semanas por reuniões de alinhamento, você recebe um site pronto para vender no mesmo dia.',
  },
  {
    title: 'Especialização transversal',
    detail:
      'Atuação generalista madura: adaptamos arquitetura, linguagem e estética para saúde, engenharia, varejo, serviços locais e B2B.',
  },
  {
    title: 'Estética que justifica preço',
    detail:
      'Design em alto contraste com acabamento limpo e autoridade visual que permite à sua empresa cobrar melhor pelo próprio serviço.',
  },
];

export function About({ onPrimaryAction }: AboutProps) {
  return (
    <section
      id="sobre"
      className="border-b border-[#D4AF37]/15 bg-[#0B0B0E] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex"
          >
            <div className="relative w-full overflow-hidden rounded-xl metallic-surface p-2">
              <div className="relative h-72 sm:h-96 lg:h-full min-h-[340px] w-full overflow-hidden rounded-lg bg-[#040406]">
                <ResilientImage
                  src="/src/assets/images/about_rbr_gold_studio_1794665595134.jpg"
                  alt="Estúdio executivo em preto e dourado da RBR Innovation com monitor de alto contraste e iluminação arquitetônica"
                  fallbackTitle="RBR Innovation — Atendimento Direto"
                  className="h-full w-full object-cover object-center"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040406]/85 via-transparent to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-xs font-medium text-[#E5C158]">
                    Atuação independente · Todo o Brasil
                  </p>
                  <p className="mt-1 font-display text-base font-semibold text-white">
                    Contato direto com quem constrói o seu resultado
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <div>
              <p className="text-sm font-medium text-[#E5C158]">
                Sobre a RBR Innovation
              </p>

              <h2
                className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                Sites construídos com mentalidade de vendedor, não apenas de vitrine.
              </h2>

              <p className="mt-5 text-base leading-relaxed text-zinc-300">
                A RBR Innovation nasceu para resolver um gargalo claro das empresas
                brasileiras: ter um serviço ou produto excelente, mas perder vendas
                todos os dias porque a página atual é lenta, confusa ou não
                transmite confiança. Como especialista independente, assumo cada
                projeto de ponta a ponta — da estrutura persuasiva ao código
                publicado — sem camadas intermediárias que atrasam a entrega.
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 pt-8 border-t border-[#D4AF37]/15">
                {PILLARS.map((pillar) => (
                  <div key={pillar.title}>
                    <h3 className="font-display text-base font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-9">
              <button
                type="button"
                onClick={onPrimaryAction}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#09090B] border border-[#F3DF9A]/45 transition-all duration-150 hover:bg-[#E5C158] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
              >
                <span>Aumentar meu faturamento</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
