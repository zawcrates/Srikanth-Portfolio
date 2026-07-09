import { useState } from 'react';
import Link from 'next/link';

// DesignSlide — neo-brutalist design project showcase with accordion expand-on-hover
const PROJECTS = [
  {
    num: '01',
    title: 'Photography Studio Portfolio',
    tag: 'Product Design · CMS',
    desc: 'A self-managed portfolio platform that combines immersive visual storytelling with an intuitive content management system, giving photography studios complete control over their digital presence.',
    slug: 'photography-studio-portfolio',
  },
  {
    num: '02',
    title: 'Digital Invitation Marketplace',
    tag: 'Product Design · UX',
    desc: 'Designed a platform that helps couples browse, personalize, purchase, and distribute digital wedding invitations without switching between multiple apps.',
    slug: 'digital-invitation-marketplace',
  },
  {
    num: '03',
    title: 'Web Design',
    tag: 'Layout · Visual',
    desc: 'Responsive editorial layout designs balancing strong typography and whitespace rules.',
    slug: 'web-design',
  },
  {
    num: '04',
    title: 'Landing Pages',
    tag: 'CRO · Motion',
    desc: 'High-conversion sales funnels and interactive landing pages with custom micro-interactions.',
    slug: 'landing-pages',
  },
  {
    num: '05',
    title: 'Creative Direction',
    tag: 'Vision · Art',
    desc: 'Guiding design teams, setting visual styles, and curating art guidelines for cross-platform products.',
    slug: 'creative-direction',
  },
];

export default function DesignSlide() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-[var(--background)]">
      {/* Content area — right-padded on desktop to clear the sidebar menu */}
      <div className="flex-1 flex flex-col px-6 md:pl-10 md:pr-[390px] xl:pl-16 pt-[98px] md:pt-24 xl:pt-28 pb-20 md:pb-28 select-none overflow-hidden">

        {/* Slide heading */}
        <h2 className="font-sunroll text-[var(--text)] font-normal text-3xl md:text-4xl xl:text-5xl leading-none mb-6 md:mb-16 shrink-0">
          01 Design Projects
        </h2>

        {/* Exhibition card frame */}
        <div className="h-[480px] min-[400px]:h-[540px] md:h-[460px] xl:h-[520px] w-full max-w-[800px] md:max-w-[950px] xl:max-w-[1200px] mx-auto border-2 border-[var(--text)] shadow-[8px_8px_0px_0px_var(--text)] flex flex-col md:flex-row overflow-hidden">
          {PROJECTS.map((p, i) => {
            const isExpanded = expandedIndex === i;
            return (
              <div
                key={p.num}
                onClick={() => setExpandedIndex(isExpanded ? null : i)}
                className={[
                  'relative flex-1 hover:flex-[5] md:hover:flex-[4] flex flex-col justify-between py-3 px-4 md:p-6 group cursor-pointer',
                  'hover:bg-[var(--accent)] transition-all duration-300 ease-out',
                  isExpanded ? 'max-md:flex-[5] max-md:bg-[var(--accent)]' : '',
                  i < PROJECTS.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2 border-[var(--text)]' : '',
                ].join(' ')}
              >
                {/* Inactive View (hidden when group is hovered or expanded on mobile) — Mobile Layout */}
                <div className={['flex items-center justify-between w-full md:hidden py-1', isExpanded ? 'hidden' : 'group-hover:hidden'].join(' ')}>
                  <div className="flex items-center gap-3">
                    <span className="font-afacad font-bold text-base text-[var(--text)]">{p.num}</span>
                    <span className="font-afacad font-bold text-sm min-[380px]:text-base text-[var(--text)] truncate max-w-[150px] min-[380px]:max-w-[200px]">{p.title}</span>
                  </div>
                  <span className="font-afacad text-[10px] text-[var(--text)] opacity-50 truncate max-w-[80px]">{p.tag}</span>
                </div>

                {/* Inactive View (hidden when group is hovered) — Desktop Layout */}
                <div className="hidden md:flex flex-col justify-between h-full w-full group-hover:hidden">
                  <span className="font-afacad text-xs font-medium text-[var(--text)] opacity-50 leading-none">
                    {p.tag}
                  </span>
                  <div className="flex justify-center items-end pb-2">
                    <span
                      className="font-afacad text-[var(--text)] font-bold text-xl md:text-2xl leading-snug whitespace-nowrap"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      {p.num} {p.title}
                    </span>
                  </div>
                </div>

                {/* Active/Hovered View (visible when group is hovered or expanded on mobile) */}
                <div className={['hidden flex-col h-full w-full justify-between', isExpanded ? 'max-md:flex' : '', 'group-hover:flex'].join(' ')}>
                  <div>
                    <span className="font-afacad text-xs font-medium text-[var(--text)] opacity-70 leading-none">
                      {p.tag}
                    </span>
                    <h3 className="font-afacad text-lg min-[380px]:text-2xl md:text-3xl font-bold text-[var(--text)] mt-2 md:mt-4 leading-tight">
                      {p.num} {p.title}
                    </h3>
                    <p className="font-afacad text-xs min-[380px]:text-sm md:text-base text-[var(--text)] opacity-90 mt-2 md:mt-4 leading-relaxed max-w-[95%]">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-6">
                    <Link 
                      href={`/projects/${p.slug}`} 
                      onClick={(e) => e.stopPropagation()}
                      className="inline-block bg-[var(--background)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-1 md:py-1.5 px-3 md:px-4 font-afacad text-xs md:text-sm font-bold text-[var(--text)] hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
