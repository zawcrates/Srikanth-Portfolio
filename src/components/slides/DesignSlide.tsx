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
  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-[var(--background)]">
      {/* Content area — right-padded to clear the sidebar menu */}
      <div className="flex-1 flex flex-col px-10 xl:px-16 pt-16 md:pt-24 xl:pt-28 pb-28 select-none overflow-hidden" style={{ paddingRight: '390px' }}>

        {/* Slide heading */}
        <h2 className="font-sunroll text-[var(--text)] font-normal text-3xl md:text-4xl xl:text-5xl leading-none mb-12 md:mb-16 shrink-0">
          01 Design Projects
        </h2>

        {/* Exhibition card frame */}
        <div className="h-[400px] md:h-[460px] xl:h-[520px] w-full max-w-[650px] md:max-w-[750px] xl:max-w-[850px] mx-auto border-2 border-[var(--text)] shadow-[8px_8px_0px_0px_var(--text)] flex overflow-hidden">
          {PROJECTS.map((p, i) => (
            <div
              key={p.num}
              className={[
                'relative flex-1 hover:flex-[4] flex flex-col justify-between p-6 group cursor-pointer',
                'hover:bg-[var(--accent)] transition-all duration-300 ease-out',
                i < PROJECTS.length - 1 ? 'border-r-2 border-[var(--text)]' : '',
              ].join(' ')}
            >
              {/* Inactive View (hidden when group is hovered) */}
              <div className="flex flex-col justify-between h-full w-full group-hover:hidden">
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

              {/* Active/Hovered View (visible when group is hovered) */}
              <div className="hidden group-hover:flex flex-col h-full w-full justify-between">
                <div>
                  <span className="font-afacad text-xs font-medium text-[var(--text)] opacity-70 leading-none">
                    {p.tag}
                  </span>
                  <h3 className="font-afacad text-2xl md:text-3xl font-bold text-[var(--text)] mt-4 leading-tight">
                    {p.num} {p.title}
                  </h3>
                  <p className="font-afacad text-sm md:text-base text-[var(--text)] opacity-90 mt-4 leading-relaxed max-w-[90%]">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-6">
                  <Link href={`/projects/${p.slug}`} className="inline-block bg-[var(--background)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-1.5 px-4 font-afacad text-sm font-bold text-[var(--text)] hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200">
                    Case Study →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
