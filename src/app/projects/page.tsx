'use client';

import Link from 'next/link';

const TECH_PROJECTS = [
  {
    num: '01',
    title: 'Predictive Maintenance',
    tag: 'ML · Python',
    slug: 'predictive-maintenance',
    desc: 'An end-to-end machine learning system designed to monitor industrial machinery health. It uses deep learning models to process vibrational, thermal, and acoustic sensor telemetry, predicting potential equipment failures before they occur to minimize downtime.',
    features: [
      'Real-time sensor stream ingestion',
      'Anomaly score calculation & forecasting',
      'Predictive time-to-failure telemetry',
      'Interactive SMS/Email alerting dashboard'
    ]
  },
  {
    num: '02',
    title: 'Fleet Monitoring',
    tag: 'IoT · Dashboard',
    slug: 'fleet-monitoring',
    desc: 'A real-time IoT tracking platform built for commercial electric vehicle fleets. The dashboard monitors route efficiency, battery state-of-health, charging cycles, and driver behaviors, presenting actionable maps and analytics.',
    features: [
      'Geospatial live asset tracking',
      'Battery thermal & voltage analytics',
      'Smart charging queue optimization',
      'Driver behavior safety scoring'
    ]
  },
  {
    num: '03',
    title: 'Anomaly Detection',
    tag: 'AI · Signals',
    slug: 'anomaly-detection',
    desc: 'An unsupervised audio signal analysis pipeline developed for manufacturing quality control. By recording and analyzing acoustic signatures of products on the assembly line, the system instantly flags items with manufacturing defects.',
    features: [
      'Acoustic signature profiling',
      'Adaptive ambient noise filtering',
      'Instant quality classification (defect detection)',
      'Automated robotic rejection triggers'
    ]
  },
  {
    num: '04',
    title: 'AI Dashboard',
    tag: 'React · REST',
    slug: 'ai-dashboard',
    desc: 'A unified control interface for administering production machine learning models. It tracks model inference latencies, accuracy drift, data distributions, and overall system load across multiple cloud environments.',
    features: [
      'Latency distribution heatmaps',
      'Model performance accuracy tracking',
      'Input data distribution drift alerting',
      'Unified cloud provider administration console'
    ]
  },
  {
    num: '05',
    title: 'Data Analytics',
    tag: 'BigQuery · Viz',
    slug: 'data-analytics',
    desc: 'A serverless data warehousing pipeline built to process multi-million row event logs. Using BigQuery and scheduled SQL workflows, the pipeline outputs hourly business intelligence reports and visual dashboards.',
    features: [
      'Serverless ELT ingestion pipelines',
      'Automated hourly report aggregations',
      'High-performance interactive dashboards',
      'Cost-optimized BigQuery query partitioning'
    ]
  }
];

const DESIGN_PROJECTS = [
  {
    num: '01',
    title: 'Photography Studio Portfolio',
    tag: 'Product Design · CMS',
    slug: 'photography-studio-portfolio',
    desc: 'A self-managed portfolio platform that combines immersive visual storytelling with an intuitive content management system, giving photography studios complete control over their digital presence.',
    features: [
      'Custom Admin Dashboard',
      'Self-Service Content Management',
      'Dynamic Gallery Management',
      'Drag-and-Drop Organization',
      'Responsive Design',
      'Smooth Scroll Experience'
    ]
  },
  {
    num: '02',
    title: 'Digital Invitation Marketplace',
    tag: 'Product Design · UX',
    slug: 'digital-invitation-marketplace',
    desc: 'Designed a platform that helps couples browse, personalize, purchase, and distribute digital wedding invitations without switching between multiple apps.',
    features: [
      'Responsive Design',
      'Scalable Product Architecture',
      'Smooth Scroll Experience',
      'Seamless Checkout Journey',
      'Frictionless User Flow',
      'Share-Ready Digital Delivery'
    ]
  },
  {
    num: '03',
    title: 'Web Design',
    tag: 'Layout · Visual',
    slug: 'web-design',
    desc: 'Responsive, editorial-style website layouts created for digital portfolios and creative agencies, balancing strong layouts with micro-interactions.',
    features: [
      'Asymmetric visual grid layouts',
      'Responsive web layouts for mobile & desktop',
      'Custom web interactive elements',
      'Performant animation integration'
    ]
  },
  {
    num: '04',
    title: 'Landing Pages',
    tag: 'CRO · Motion',
    slug: 'landing-pages',
    desc: 'High-performance sales funnels and promotional landing pages optimized for maximum conversion rates and smooth scrolling animations.',
    features: [
      'A/B tested conversion flows',
      'Motion graphics & scroll triggers',
      'Conversion rate optimization layouts',
      'Performance audit passing scores'
    ]
  },
  {
    num: '05',
    title: 'Creative Direction',
    tag: 'Vision · Art',
    slug: 'creative-direction',
    desc: 'Strategic visual planning and art direction for cross-platform apps, setting design tokens, typography rules, and aesthetic visions.',
    features: [
      'Aesthetic theme definition manuals',
      'Cross-platform Figma design token libraries',
      'Interactive team asset guidelines',
      'Unified brand messaging & visuals'
    ]
  }
];

export default function ProjectsPage() {
  return (
    <div className="w-screen h-screen overflow-y-auto bg-[var(--background)] flex flex-col select-none scroll-smooth">
      {/* Sticky top accent bar */}
      <div className="sticky top-0 left-0 right-0 h-5 bg-[var(--accent)] border-b-2 border-[var(--text)] z-30 shrink-0" />

      {/* Header Container */}
      <header className="px-6 md:px-12 lg:px-20 py-8 border-b-2 border-[var(--text)] flex justify-between items-center bg-[var(--background)] shrink-0">
        <Link 
          href="/" 
          className="bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-2 px-5 font-afacad text-base md:text-lg font-bold text-[var(--text)] hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200"
        >
          ← Back to Portfolio
        </Link>
        <h1 className="font-sunroll text-3xl md:text-4xl lg:text-5xl text-[var(--text)] leading-none">
          ALL PROJECTS
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 md:px-12 lg:px-20 py-12 flex flex-col gap-20">
        
        {/* Design Projects Section */}
        <section id="design" className="flex flex-col gap-10">
          <h2 className="font-sunroll text-2xl md:text-3xl text-[var(--accent)] border-b-2 border-[var(--text)] pb-4">
            01 DESIGN PROJECTS
          </h2>
          <div className="flex flex-col gap-12">
            {DESIGN_PROJECTS.map((proj) => (
              <div 
                key={`design-${proj.num}`} 
                id={`design-${proj.num}`}
                className="bg-[var(--surface)] border-2 border-[var(--text)] shadow-[8px_8px_0px_0px_var(--text)] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Project Number */}
                <div className="font-sunroll text-4xl md:text-5xl text-[var(--accent)] shrink-0 leading-none">
                  {proj.num}
                </div>
                {/* Project Details */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--text)] pb-2">
                    <h3 className="font-afacad text-2xl md:text-3xl font-bold text-[var(--text)] leading-none">
                      {proj.title}
                    </h3>
                    <span className="bg-[var(--accent)] border border-[var(--text)] px-3 py-1 font-afacad text-sm font-bold text-[var(--text)] rounded-full">
                      {proj.tag}
                    </span>
                  </div>
                  <p className="font-afacad text-base md:text-lg text-[var(--text)] leading-relaxed opacity-95">
                    {proj.desc}
                  </p>
                  {/* Features List */}
                  <div className="mt-2">
                    <h4 className="font-afacad text-sm font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside font-afacad text-base text-[var(--text)] leading-relaxed opacity-90 pl-2">
                      {proj.features.map((feat, idx) => (
                        <li key={idx} className="mb-1">{feat}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-1.5 px-4 font-afacad text-sm font-bold text-[var(--text)] hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Projects Section */}
        <section id="technical" className="flex flex-col gap-10 pb-20">
          <h2 className="font-sunroll text-2xl md:text-3xl text-[var(--accent)] border-b-2 border-[var(--text)] pb-4">
            02 TECHNICAL PROJECTS
          </h2>
          <div className="flex flex-col gap-12">
            {TECH_PROJECTS.map((proj) => (
              <div 
                key={`tech-${proj.num}`} 
                id={`tech-${proj.num}`}
                className="bg-[var(--surface)] border-2 border-[var(--text)] shadow-[8px_8px_0px_0px_var(--text)] p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start"
              >
                {/* Project Number */}
                <div className="font-sunroll text-4xl md:text-5xl text-[var(--accent)] shrink-0 leading-none">
                  {proj.num}
                </div>
                {/* Project Details */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[var(--text)] pb-2">
                    <h3 className="font-afacad text-2xl md:text-3xl font-bold text-[var(--text)] leading-none">
                      {proj.title}
                    </h3>
                    <span className="bg-[var(--accent)] border border-[var(--text)] px-3 py-1 font-afacad text-sm font-bold text-[var(--text)] rounded-full">
                      {proj.tag}
                    </span>
                  </div>
                  <p className="font-afacad text-base md:text-lg text-[var(--text)] leading-relaxed opacity-95">
                    {proj.desc}
                  </p>
                  {/* Features List */}
                  <div className="mt-2">
                    <h4 className="font-afacad text-sm font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="list-disc list-inside font-afacad text-base text-[var(--text)] leading-relaxed opacity-90 pl-2">
                      {proj.features.map((feat, idx) => (
                        <li key={idx} className="mb-1">{feat}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-end mt-4">
                    <Link
                      href={`/projects/${proj.slug}`}
                      className="bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-1.5 px-4 font-afacad text-sm font-bold text-[var(--text)] hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200"
                    >
                      Case Study →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
