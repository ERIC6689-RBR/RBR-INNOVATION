import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { PROJECTS, ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

interface PortfolioProps {
  onPrimaryAction: (contextNote?: string) => void;
}

const CATEGORIES = [
  'Todos',
  'Institucional',
  'Landing Page',
  'Catálogo & Vendas',
] as const;

type FilterCategory = (typeof CATEGORIES)[number];

export function Portfolio({ onPrimaryAction }: PortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('Todos');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const filteredProjects =
    activeCategory === 'Todos'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject]);

  return (
    <section
      id="portfolio"
      className="border-b border-[#D4AF37]/15 bg-[#0B0B0E] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#E5C158]">
              Portfólio · Projetos que geram retorno
            </p>
            <h2
              className="mt-3 font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Diferentes segmentos, o mesmo objetivo: ampliar vendas.
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar projetos por categoria"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#D4AF37]/20 bg-[#040406] p-1"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[40px] rounded-md px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#09090B] font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-900'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="group metallic-surface rounded-xl overflow-hidden flex flex-col justify-between transition-colors duration-200 hover:border-[#E5C158]/40"
            >
              <div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  aria-label={`Abrir detalhes do projeto ${project.client}`}
                  className="relative block w-full aspect-[4/3] overflow-hidden bg-[#040406] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E5C158] cursor-pointer"
                >
                  <ResilientImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.client}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#040406]/88 via-transparent to-transparent"
                  />
                  <span className="absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-md bg-[#070709]/90 px-3 py-1.5 text-xs font-medium text-[#E5C158] border border-[#D4AF37]/30 backdrop-blur-sm">
                    <Maximize2 className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Ver estudo</span>
                  </span>
                </button>

                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                    <span className="font-medium text-zinc-200">
                      {project.client}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.segment}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.deliveryTime}</span>
                  </div>

                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                    {project.summary}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 border-t border-[#D4AF37]/12 flex flex-wrap items-center justify-between gap-4">
                <span className="font-mono text-xs sm:text-sm font-medium text-[#E5C158] tabular-nums">
                  {project.metricHighlight}
                </span>

                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-white hover:text-[#E5C158] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] rounded-sm cursor-pointer"
                >
                  <span>Detalhes</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#040406]/88 p-4 sm:p-6 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl metallic-surface-elevated"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-[#D4AF37]/20 bg-[#0A0A0D]/95 px-6 py-4 backdrop-blur-sm">
                <div className="min-w-0">
                  <p className="text-xs text-zinc-400 truncate">
                    {selectedProject.client} · {selectedProject.segment} ·{' '}
                    {selectedProject.deliveryTime}
                  </p>
                  <h3
                    id="modal-project-title"
                    className="font-display text-lg font-semibold text-white truncate"
                  >
                    {selectedProject.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Fechar detalhes do projeto"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/25 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="overflow-hidden rounded-lg aspect-[16/9] bg-[#040406]">
                  <ResilientImage
                    src={selectedProject.image}
                    alt={selectedProject.imageAlt}
                    fallbackTitle={selectedProject.client}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="rounded-lg border border-[#D4AF37]/30 bg-[#1B160B]/70 px-5 py-4">
                  <p className="text-xs font-medium text-[#E5C158]">
                    Resultado obtido após a publicação
                  </p>
                  <p className="mt-1 font-mono text-base sm:text-lg font-semibold text-white tabular-nums">
                    {selectedProject.metricHighlight}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white">
                      Cenário inicial
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {selectedProject.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-semibold text-white">
                      Solução aplicada
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#D4AF37]/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <p className="text-sm text-zinc-300">
                    Quer uma estrutura equivalente para o seu segmento ainda hoje?
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      const note = `Referência: ${selectedProject.client} (${selectedProject.category})`;
                      setSelectedProject(null);
                      onPrimaryAction(note);
                    }}
                    className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-semibold text-[#09090B] border border-[#F3DF9A]/45 hover:bg-[#E5C158] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E5C158] cursor-pointer"
                  >
                    <span>Aumentar meu faturamento</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
