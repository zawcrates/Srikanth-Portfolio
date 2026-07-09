import { useState } from 'react';
import Link from 'next/link';

// DesignSlide — neo-brutalist design project showcase with accordion expand-on-hover
const PROJECTS = [
  {
    num: '01',
    title: 'Photography Studio Portfolio',
    tag: 'Product Design · CMS',
    desc: 'An immersive showcase platform with a built-in content management system for photography studios.',
    slug: 'photography-studio-portfolio',
  },
  {
    num: '02',
    title: 'Digital Invitation Marketplace',
    tag: 'Product Design · UX',
    desc: 'A streamlined wedding marketplace for couples to design, personalize, and send digital invitations.',
    slug: 'digital-invitation-marketplace',
  },
  {
    num: '03',
    title: 'Startup Landing Page',
    tag: 'UI/UX Design · SaaS Platform',
    desc: 'Designed a clear SaaS landing page with strong visual hierarchy and structured content flow, helping visitors quickly understand the product.',
    slug: 'startup-landing-page',
  },
  {
    num: '04',
    title: 'Landing Pages',
    tag: 'CRO · Motion',
    desc: 'High-conversion sales funnels and landing pages powered by interactive micro-interactions.',
    slug: 'landing-pages',
  },
  {
    num: '05',
    title: 'Creative Direction',
    tag: 'Vision · Art',
    desc: 'Guiding digital design teams and defining art direction guidelines for cross-platform products.',
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
                  'relative flex-1 hover:flex-[5] md:hover:flex-[4] flex flex-col md:justify-between py-3 px-4 md:p-6 group cursor-pointer',
                  'hover:bg-[var(--accent)] transition-all duration-300 ease-out',
                  isExpanded ? 'max-md:flex-[5] max-md:bg-[var(--accent)] max-md:justify-between' : 'max-md:justify-center',
                  i < PROJECTS.length - 1 ? 'border-b-2 md:border-b-0 md:border-r-2 border-[var(--text)]' : '',
                ].join(' ')}
              >
                {/* Inactive View (hidden when group is hovered or expanded on mobile) — Mobile Layout */}
                <div className={['flex items-center justify-between w-full md:hidden py-1', isExpanded ? 'hidden' : 'group-hover:hidden'].join(' ')}>
                  <div className="flex items-center gap-3">
                    <span className="font-afacad font-bold text-base text-[var(--text)]">{p.num}</span>
                    <span className="font-afacad font-bold text-sm min-[380px]:text-base text-[var(--text)] truncate max-w-[200px] min-[380px]:max-w-[260px]">{p.title}</span>
                  </div>
                  <span className="text-[var(--text)] opacity-60 text-xs shrink-0 select-none">↓</span>
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
                    <div className="flex justify-between items-center w-full">
                      <span className="font-afacad text-xs font-medium text-[var(--text)] opacity-70 leading-none">
                        {p.tag}
                      </span>
                      <span className="text-[var(--text)] opacity-60 text-xs md:hidden select-none">↑</span>
                    </div>
                    <h3 className="font-afacad text-lg min-[380px]:text-2xl md:text-3xl font-bold text-[var(--text)] mt-2 md:mt-4 leading-tight">
                      {p.num} {p.title}
                    </h3>
                    <p className="font-afacad text-xs min-[380px]:text-sm md:text-base text-[var(--text)] opacity-90 mt-2 md:mt-4 leading-relaxed max-w-[95%]">
                      {p.desc}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-6">
                    {p.slug === 'photography-studio-portfolio' || p.slug === 'digital-invitation-marketplace' || p.slug === 'startup-landing-page' ? (
                      <Link 
                        href={`/projects/${p.slug}`} 
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block bg-[var(--background)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-1 md:py-1.5 px-3 md:px-4 font-afacad text-xs md:text-sm font-bold text-[var(--text)] hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200"
                      >
                        Case Study →
                      </Link>
                    ) : (
                      <span className="inline-block bg-[var(--background)] border-2 border-[var(--text)] border-dashed opacity-50 py-1 md:py-1.5 px-3 md:px-4 font-afacad text-xs md:text-sm font-bold text-[var(--text)] select-none">
                        In Progress
                      </span>
                    )}
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
