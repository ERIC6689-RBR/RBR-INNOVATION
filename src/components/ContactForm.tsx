import { useEffect, useState, FormEvent, RefObject } from 'react';
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
  Phone,
} from 'lucide-react';
import {
  buildWhatsAppUrl,
  PRICING_PLANS,
  WHATSAPP_DISPLAY,
} from '../data/portfolioData';

interface ContactFormProps {
  selectedPlan: string;
  contextNote: string;
  nameInputRef: RefObject<HTMLInputElement | null>;
}

interface FormValues {
  name: string;
  company: string;
  segment: string;
  phone: string;
  plan: string;
  goal: string;
}

interface FormErrors {
  name?: string;
  company?: string;
  segment?: string;
  phone?: string;
}

function formatBrazilPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function ContactForm({
  selectedPlan,
  contextNote,
  nameInputRef,
}: ContactFormProps) {
  const [values, setValues] = useState<FormValues>({
    name: '',
    company: '',
    segment: '',
    phone: '',
    plan: selectedPlan || PRICING_PLANS[1].name,
    goal: contextNote || '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setValues((prev) => ({ ...prev, plan: selectedPlan }));
      setSubmitted(false);
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (contextNote) {
      setValues((prev) => ({ ...prev, goal: contextNote }));
      setSubmitted(false);
    }
  }, [contextNote]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (values.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo.';
    }
    if (values.company.trim().length < 2) {
      nextErrors.company = 'Informe o nome da sua empresa.';
    }
    if (values.segment.trim().length < 2) {
      nextErrors.segment = 'Informe o segmento do seu negócio.';
    }
    const phoneDigits = values.phone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      nextErrors.phone = 'Informe um WhatsApp válido com DDD.';
    }
    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  const whatsappBriefingMessage = [
    `Olá, RBR Innovation! Quero aumentar o faturamento da minha empresa com um site profissional.`,
    `Nome: ${values.name || 'Não informado'}`,
    `Empresa: ${values.company || 'Não informada'}`,
    `Segmento: ${values.segment || 'Geral'}`,
    `WhatsApp: ${values.phone || 'Não informado'}`,
    `Plano de interesse: ${values.plan}`,
    values.goal ? `Objetivo: ${values.goal}` : '',
  ]
    .filter(Boolean)
    .join('\n');

  const directWhatsAppHref = buildWhatsAppUrl(whatsappBriefingMessage);

  return (
    <section
      id="contato"
      className="bg-[#070709] py-20 sm:py-24 border-b border-[#D4AF37]/15"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#E5C158]">
              Solicitação imediata · Todo o Brasil
            </p>
            <h2
              className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Pronto para transformar visitas em faturamento ainda hoje?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-300">
              Preencha o briefing ao lado para iniciar a criação do seu site com
              entrega no mesmo dia. Atendemos empresas de qualquer setor em todo
              o território nacional.
            </p>

            <div className="mt-8 pt-8 border-t border-[#D4AF37]/15 space-y-5">
              <div>
                <p className="text-xs font-medium text-zinc-400">
                  Atendimento direto via WhatsApp
                </p>
                <a
                  href={buildWhatsAppUrl(
                    'Olá, RBR Innovation! Minha empresa quer aumentar o faturamento com um novo site.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-2 font-mono text-lg font-semibold text-white hover:text-[#E5C158] transition-colors tabular-nums focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] rounded-sm"
                >
                  <Phone className="h-4 w-4 text-[#E5C158]" aria-hidden="true" />
                  <span>{WHATSAPP_DISPLAY}</span>
                </a>
              </div>

              <div>
                <p className="text-xs font-medium text-zinc-400">
                  Prazo padrão de publicação
                </p>
                <p className="mt-1 text-sm font-medium text-zinc-200">
                  Entrega no mesmo dia após confirmação do briefing
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="metallic-surface-elevated rounded-xl p-6 sm:p-8">
              {submitted ? (
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-6 w-6 shrink-0 text-emerald-400 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        Solicitação registrada com sucesso
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                        Seus dados foram preparados para atendimento imediato.
                        Clique abaixo para enviar o resumo direto ao WhatsApp da
                        RBR Innovation e iniciar sua entrega hoje mesmo.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-lg border border-[#D4AF37]/20 bg-[#040406] p-4 text-sm text-zinc-200 space-y-1.5">
                    <p>
                      <span className="text-zinc-400">Responsável:</span>{' '}
                      {values.name}
                    </p>
                    <p>
                      <span className="text-zinc-400">Empresa:</span>{' '}
                      {values.company} · {values.segment}
                    </p>
                    <p>
                      <span className="text-zinc-400">Plano selecionado:</span>{' '}
                      {values.plan}
                    </p>
                    <p>
                      <span className="text-zinc-400">WhatsApp:</span>{' '}
                      <span className="font-mono tabular-nums">{values.phone}</span>
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={directWhatsAppHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-semibold text-[#09090B] border border-[#F3DF9A]/45 hover:bg-[#E5C158] transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158]"
                    >
                      <MessageSquare className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>Iniciar atendimento no WhatsApp</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-zinc-900 px-5 py-3 text-sm font-medium text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
                    >
                      Editar dados
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-sm font-medium text-zinc-200"
                      >
                        Seu nome
                      </label>
                      <input
                        ref={nameInputRef}
                        id="lead-name"
                        type="text"
                        value={values.name}
                        onChange={(e) => {
                          setValues({ ...values, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: undefined });
                        }}
                        placeholder="Ex: Marcos Oliveira"
                        aria-invalid={Boolean(errors.name)}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#D4AF37]/25 bg-[#040406] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#E5C158] focus:outline-none focus:ring-1 focus:ring-[#E5C158]"
                      />
                      {errors.name && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-company"
                        className="block text-sm font-medium text-zinc-200"
                      >
                        Nome da empresa
                      </label>
                      <input
                        id="lead-company"
                        type="text"
                        value={values.company}
                        onChange={(e) => {
                          setValues({ ...values, company: e.target.value });
                          if (errors.company)
                            setErrors({ ...errors, company: undefined });
                        }}
                        placeholder="Ex: Oliveira Distribuidora"
                        aria-invalid={Boolean(errors.company)}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#D4AF37]/25 bg-[#040406] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#E5C158] focus:outline-none focus:ring-1 focus:ring-[#E5C158]"
                      />
                      {errors.company && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="lead-segment"
                        className="block text-sm font-medium text-zinc-200"
                      >
                        Segmento de atuação
                      </label>
                      <input
                        id="lead-segment"
                        type="text"
                        value={values.segment}
                        onChange={(e) => {
                          setValues({ ...values, segment: e.target.value });
                          if (errors.segment)
                            setErrors({ ...errors, segment: undefined });
                        }}
                        placeholder="Ex: Clínica, Advocacia, Comércio"
                        aria-invalid={Boolean(errors.segment)}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#D4AF37]/25 bg-[#040406] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#E5C158] focus:outline-none focus:ring-1 focus:ring-[#E5C158]"
                      />
                      {errors.segment && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.segment}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="lead-phone"
                        className="block text-sm font-medium text-zinc-200"
                      >
                        WhatsApp com DDD
                      </label>
                      <input
                        id="lead-phone"
                        type="tel"
                        inputMode="tel"
                        value={values.phone}
                        onChange={(e) => {
                          setValues({
                            ...values,
                            phone: formatBrazilPhone(e.target.value),
                          });
                          if (errors.phone)
                            setErrors({ ...errors, phone: undefined });
                        }}
                        placeholder="(88) 98187-9429"
                        aria-invalid={Boolean(errors.phone)}
                        className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#D4AF37]/25 bg-[#040406] px-3.5 py-2.5 font-mono text-sm text-white placeholder:text-zinc-500 focus:border-[#E5C158] focus:outline-none focus:ring-1 focus:ring-[#E5C158] tabular-nums"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300">
                          <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lead-plan"
                      className="block text-sm font-medium text-zinc-200"
                    >
                      Estrutura desejada
                    </label>
                    <select
                      id="lead-plan"
                      value={values.plan}
                      onChange={(e) =>
                        setValues({ ...values, plan: e.target.value })
                      }
                      className="mt-1.5 block min-h-[44px] w-full rounded-lg border border-[#D4AF37]/25 bg-[#040406] px-3.5 py-2.5 text-sm text-white focus:border-[#E5C158] focus:outline-none focus:ring-1 focus:ring-[#E5C158]"
                    >
                      {PRICING_PLANS.map((plan) => (
                        <option key={plan.id} value={plan.name}>
                          {plan.name} — {plan.price}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="lead-goal"
                      className="block text-sm font-medium text-zinc-200"
                    >
                      O que você quer vender ou destacar no site? (opcional)
                    </label>
                    <textarea
                      id="lead-goal"
                      rows={3}
                      value={values.goal}
                      onChange={(e) =>
                        setValues({ ...values, goal: e.target.value })
                      }
                      placeholder="Conte brevemente seu principal produto ou serviço e sua meta de vendas."
                      className="mt-1.5 block w-full rounded-lg border border-[#D4AF37]/25 bg-[#040406] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-[#E5C158] focus:outline-none focus:ring-1 focus:ring-[#E5C158]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3.5 text-sm sm:text-base font-semibold text-[#09090B] border border-[#F3DF9A]/45 shadow-[0_12px_32px_-8px_rgba(212,175,55,0.4)] transition-all duration-150 hover:bg-[#E5C158] active:scale-[0.99] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#070709] cursor-pointer"
                  >
                    <span>Aumentar meu faturamento</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
