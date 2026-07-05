import Link from 'next/link';

// TechnicalSlide — neo-brutalist horizontal project card showcase with accordion expand-on-hover
const PROJECTS = [
  {
    num: '01',
    title: 'Predictive Maintenance',
    tag: 'ML · Python',
    desc: 'Predicting equipment failures using deep learning anomaly detection on high-frequency sensor telemetry.',
    slug: 'predictive-maintenance',
  },
  {
    num: '02',
    title: 'Fleet Monitoring',
    tag: 'IoT · Dashboard',
    desc: 'Real-time geospatial tracking and battery performance telemetry for electric vehicle fleets.',
    slug: 'fleet-monitoring',
  },
  {
    num: '03',
    title: 'Anomaly Detection',
    tag: 'AI · Signals',
    desc: 'Unsupervised audio signal processing pipeline to detect manufacturing defects in real-time.',
    slug: 'anomaly-detection',
  },
  {
    num: '04',
    title: 'AI Dashboard',
    tag: 'React · REST',
    desc: 'Centralized command interface displaying model inference speed, accuracy drift, and request volumes.',
    slug: 'ai-dashboard',
  },
  {
    num: '05',
    title: 'Data Analytics',
    tag: 'BigQuery · Viz',
    desc: 'Serverless data warehousing and automated reports processing multi-million row datasets hourly.',
    slug: 'data-analytics',
  },
];

export default function TechnicalSlide() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-[var(--background)]">
      {/* Content area — right-padded to clear the sidebar menu */}
      <div className="flex-1 flex flex-col px-10 xl:px-16 pt-16 md:pt-24 xl:pt-28 pb-28 select-none overflow-hidden" style={{ paddingRight: '390px' }}>

        {/* Slide heading */}
        <h2 className="font-sunroll text-[var(--text)] font-normal text-3xl md:text-4xl xl:text-5xl leading-none mb-12 md:mb-16 shrink-0">
          02 Technical Projects
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
