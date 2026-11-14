import { buildWhatsAppUrl, WHATSAPP_DISPLAY } from '../data/portfolioData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#040406] py-12 text-zinc-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between pb-8 border-b border-[#D4AF37]/12">
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-white">
              RBR INNOVATION
            </p>
            <p className="mt-1.5 text-sm text-zinc-400">
              Criação de sites sob medida para empresas em todo o Brasil · Entrega
              no mesmo dia
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-6 text-sm"
          >
            <a href="#sobre" className="hover:text-[#E5C158] transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-[#E5C158] transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-[#E5C158] transition-colors">
              Portfólio
            </a>
            <a href="#planos" className="hover:text-[#E5C158] transition-colors">
              Planos
            </a>
            <a
              href={buildWhatsAppUrl(
                'Olá, RBR Innovation! Gostaria de solicitar um site para aumentar o faturamento da minha empresa.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[#E5C158] hover:text-white transition-colors tabular-nums"
            >
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
          </nav>
        </div>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-zinc-500">
          <p>© {currentYear} RBR Innovation. Todos os direitos reservados.</p>
          <p>Atendimento digital para todo o território nacional.</p>
        </div>
      </div>
    </footer>
  );
}
