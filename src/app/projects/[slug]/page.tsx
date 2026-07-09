'use client';

import { use, useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ProjectDetail {
  num: string;
  category: string;
  title: string;
  tag: string;
  backLink: string;
  desc: string;
  challenge: string;
  solution: string;
  impact?: string;
  liveLink?: string;
  image: string;
  images?: string[];
  features: string[];
}

const ALL_PROJECTS: Record<string, ProjectDetail> = {
  // Technical Projects
  'predictive-maintenance': {
    num: '01',
    category: 'Technical Projects',
    title: 'Predictive Maintenance',
    tag: 'ML · Python',
    backLink: '/#technical',
    image: '/images/tech-mockup.png',
    desc: 'An end-to-end machine learning system designed to monitor industrial machinery health and predict potential equipment failures before they occur.',
    challenge: 'Industrial clients suffer from unexpected machinery breakdowns, leading to high repair costs, inventory delays, and operational bottlenecks. Traditional scheduled maintenance often over-maintains healthy equipment or misses early signs of failure.',
    solution: 'We deployed a high-frequency telemetry ingestion pipeline coupled with a deep learning LSTM autoencoder model. The system flags subtle vibrational, thermal, and acoustic anomalies, calculating a precise anomaly score and forecasting time-to-failure.',
    impact: 'Reduced unscheduled machinery downtime by 35% and lowered maintenance costs by 20% for manufacturing test sites.',
    features: [
      'Real-time sensor stream ingestion (MQTT / Kafka)',
      'LSTM Autoencoder anomaly score calculation',
      'Predictive time-to-failure telemetry forecasting',
      'Interactive alerting dashboard'
    ]
  },
  'fleet-monitoring': {
    num: '02',
    category: 'Technical Projects',
    title: 'Fleet Monitoring',
    tag: 'IoT · Dashboard',
    backLink: '/#technical',
    image: '/images/tech-mockup.png',
    desc: 'A real-time IoT tracking and performance analytics platform for electric vehicle fleets.',
    challenge: 'Managing charging logs, route efficiency, battery state-of-health, and driver safety behaviors across hundreds of electric vehicles manually is highly error-prone and leads to increased fleet operations overhead.',
    solution: 'Designed an ingestion system that logs live telemetry data from EV batteries and GPS sensors, feeding into an interactive React dashboard with geospatial route overlays and heatmaps.',
    impact: 'Optimized charging queue times by 15%, tracked 100% of vehicles in real-time, and lowered battery degradation speed by 10%.',
    features: [
      'Geospatial live asset tracking and route mapping',
      'Battery state-of-health & thermal run telemetry',
      'Smart charging queue algorithms',
      'Driver behavior safety scoring modules'
    ]
  },
  'anomaly-detection': {
    num: '03',
    category: 'Technical Projects',
    title: 'Anomaly Detection',
    tag: 'AI · Signals',
    backLink: '/#technical',
    image: '/images/tech-mockup.png',
    desc: 'An unsupervised audio signal analysis pipeline developed for manufacturing quality control.',
    challenge: 'Identifying structural defects in components on high-speed assembly lines using visual inspection is unreliable and slow, leading to defective products escaping factory floors.',
    solution: 'Built an audio telemetry processing pipeline that records acoustic signatures of finished items, filters out factory ambient noise, and classifies quality metrics in real-time.',
    impact: 'Achieved a 99.4% defect detection rate, cutting product recall rates for manufacturing clients by more than half.',
    features: [
      'High-frequency acoustic signature profiling',
      'Adaptive ambient noise filtering algorithms',
      'Instant quality classification (defect detection)',
      'Automated robotic rejection triggers'
    ]
  },
  'ai-dashboard': {
    num: '04',
    category: 'Technical Projects',
    title: 'AI Dashboard',
    tag: 'React · REST',
    backLink: '/#technical',
    image: '/images/tech-mockup.png',
    desc: 'A unified control interface for administering production machine learning models.',
    challenge: 'ML engineers lacked visibility into deployed models, struggling to detect model accuracy degradation, data drift, or latency spikes in real-time.',
    solution: 'Built a modular monitoring dashboard in React that communicates with model gateway APIs, rendering live distribution charts and performance summaries.',
    impact: 'Drastically decreased model debugging times from hours to minutes, enabling rapid rollbacks and rolling deployments.',
    features: [
      'Latency distribution heatmaps and metrics',
      'Real-time model accuracy drift tracking',
      'Input data distribution shift alerting',
      'Unified cloud provider administration console'
    ]
  },
  'data-analytics': {
    num: '05',
    category: 'Technical Projects',
    title: 'Data Analytics',
    tag: 'BigQuery · Viz',
    backLink: '/#technical',
    image: '/images/tech-mockup.png',
    desc: 'A serverless data warehousing pipeline built to process multi-million row event logs.',
    challenge: 'Legacy analytics tools struggled to aggregate millions of customer interaction events daily, causing reports to load slowly and inflating cloud compute costs.',
    solution: 'Engineered a BigQuery pipeline that automatically ingests raw logs from cloud storage, runs scheduled partitioned SQL transformations, and populates high-speed visualizations.',
    impact: 'Aggregated report load times fell from minutes to under 2 seconds, while cloud warehousing costs were cut by 40%.',
    features: [
      'Serverless ELT ingestion pipelines',
      'Automated hourly report aggregations',
      'High-performance interactive dashboards',
      'Cost-optimized BigQuery query partitioning'
    ]
  },
  // Design Projects
  'digital-invitation-marketplace': {
    num: '02',
    category: 'Design Projects',
    title: 'Digital Invitation Marketplace',
    tag: 'Product Design · UX',
    backLink: '/#design',
    image: '/design project/D1.0.png',
    images: [
      '/design project/D1.0.png',
      '/design project/D1.1.png',
      '/design project/D1.2.png',
      '/design project/D1.3.png',
      '/design project/D1.4.png'
    ],
    desc: 'Designed a platform that helps couples browse, personalize, purchase, and distribute digital wedding invitations without switching between multiple apps.',
    challenge: 'Purchasing a digital wedding invitation is often a fragmented experience. Couples discover designs on social media, discuss requirements through messaging apps, complete payments on separate platforms, and receive final deliverables through another channel. This scattered journey creates friction, increases drop-offs, and makes the overall experience feel less premium.',
    solution: 'Designed a unified digital marketplace that brings the entire invitation journey into a single ecosystem. Users can browse curated invitation designs, personalize event details, complete purchases, and instantly share their invitations—all through one seamless experience. The platform simplifies decision-making, reduces friction, and elevates the perceived value of digital invitation products.',
    liveLink: 'https://varnaminvites.vercel.app/',
    features: [
      'Responsive Design',
      'Scalable Product Architecture',
      'Smooth Scroll Experience',
      'Seamless Checkout Journey',
      'Frictionless User Flow',
      'Share-Ready Digital Delivery'
    ]
  },
  'photography-studio-portfolio': {
    num: '01',
    category: 'Design Projects',
    title: 'Photography Studio Portfolio',
    tag: 'Product Design · CMS',
    backLink: '/#design',
    image: '/design project/D2.0.png',
    images: [
      '/design project/D2.0.png',
      '/design project/D2.1.png',
      '/design project/D2.2.png',
      '/design project/D2.3.png',
      '/design project/D2.4.png',
      '/design project/D2.5.png'
    ],
    desc: 'A self-managed portfolio platform that combines immersive visual storytelling with an intuitive content management system, giving photography studios complete control over their digital presence.',
    challenge: 'Studio owners frequently update their work, but traditional portfolio websites require developer intervention for even simple content changes. This dependency creates friction, delays updates, and discourages businesses from investing in custom websites.',
    solution: 'Created a self-managed portfolio ecosystem where photographers can update galleries, organize albums, manage featured work, and control website content through an intuitive admin dashboard—giving them complete ownership of their digital presence.',
    liveLink: 'https://studioportfolio-phi.vercel.app/',
    features: [
      'Custom Admin Dashboard',
      'Self-Service Content Management',
      'Dynamic Gallery Management',
      'Drag-and-Drop Organization',
      'Responsive Design',
      'Smooth Scroll Experience'
    ]
  },
  'web-design': {
    num: '03',
    category: 'Design Projects',
    title: 'Web Design',
    tag: 'Layout · Visual',
    backLink: '/#design',
    image: '/images/design-mockup.png',
    desc: 'Responsive, editorial-style website layouts created for digital portfolios and creative agencies, balancing strong layouts with micro-interactions.',
    challenge: 'Standard portfolio websites look identical, lacking a unique creative identity or the interactivity required to engage visitors effectively.',
    solution: 'Developed an asymmetric, high-contrast visual grid based on classic print design rules, combined with responsive layout frameworks and subtle micro-interactions.',
    impact: 'Doubled visitor average session durations and increased click-through rates to contact forms.',
    features: [
      'Asymmetric visual grid layouts',
      'Responsive web layouts for mobile & desktop',
      'Custom web interactive elements',
      'Performant animation integration'
    ]
  },
  'landing-pages': {
    num: '04',
    category: 'Design Projects',
    title: 'Landing Pages',
    tag: 'CRO · Motion',
    backLink: '/#design',
    image: '/images/design-mockup.png',
    desc: 'High-performance sales funnels and promotional landing pages optimized for maximum conversion rates and smooth scrolling animations.',
    challenge: 'Many landing pages suffer from slow loading times, generic layouts, and confusing product information, resulting in low signup conversion rates.',
    solution: 'Structured clear messaging paths, reduced asset payloads for faster load times, and introduced custom scroll triggers to guide the viewer\'s focus.',
    impact: 'Increased product signups by 24% and dropped page bounce rates to under 30%.',
    features: [
      'A/B tested conversion flows',
      'Motion graphics & scroll triggers',
      'Conversion rate optimization layouts',
      'Performance audit passing scores'
    ]
  },
  'creative-direction': {
    num: '05',
    category: 'Design Projects',
    title: 'Creative Direction',
    tag: 'Vision · Art',
    backLink: '/#design',
    image: '/images/design-mockup.png',
    desc: 'Strategic visual planning and art direction for cross-platform apps, setting design tokens, typography rules, and aesthetic visions.',
    challenge: 'Maintaining a cohesive look and feel across web, iOS, Android, and marketing channels as teams scale is incredibly difficult.',
    solution: 'Authored aesthetic guidelines and designed visual direction systems that mapped Figma design tokens directly to cross-platform code bases.',
    impact: 'Streamlined design-to-development handoffs, saving product design teams up to 8 hours of styling reviews per sprint.',
    features: [
      'Aesthetic theme definition manuals',
      'Cross-platform Figma design token libraries',
      'Interactive team asset guidelines',
      'Unified brand messaging & visuals'
    ]
  }
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectPage({ params }: PageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;
  const project = ALL_PROJECTS[slug];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add('scrollable-body');
    return () => {
      document.body.classList.remove('scrollable-body');
    };
  }, []);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage || !project?.images || project.images.length <= 1) return;
      const currentIndex = project.images.indexOf(selectedImage);
      if (currentIndex === -1) return;

      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % project.images.length;
        setSelectedImage(project.images[nextIdx]);
      } else if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + project.images.length) % project.images.length;
        setSelectedImage(project.images[prevIdx]);
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, project?.images]);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-screen h-screen overflow-y-auto bg-[var(--background)] flex flex-col select-none scroll-smooth">
      {/* Top accent bar */}
      <div className="h-5 bg-[var(--accent)] border-b-2 border-[var(--text)] shrink-0" />

      {/* Header Container */}
      <header className="px-4 md:px-12 lg:px-20 py-4 md:py-6 border-b-2 border-[var(--text)] flex justify-between items-center bg-[var(--background)] shrink-0">
        <Link 
          href={project.backLink}
          className="bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-1 px-3 md:py-2 md:px-5 font-afacad text-xs md:text-lg font-bold text-[var(--text)] hover:-translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200"
        >
          ← Back to Portfolio
        </Link>
        <span className="font-afacad text-[10px] md:text-sm font-bold text-[var(--accent)] uppercase tracking-widest bg-[var(--surface)] border-2 border-[var(--text)] px-2.5 py-1 md:px-4 md:py-1.5 rounded-full self-auto">
          {project.category}
        </span>
      </header>

      {/* Vertically scrollable content area wrapper */}
      <main className="w-full px-4 md:px-12 lg:px-20 py-8 md:py-12 flex flex-col gap-8 md:gap-12">
        {/* Single Big Box containing everything */}
        <div className="w-full border-2 border-[var(--text)] shadow-[8px_8px_0px_0px_var(--text)] bg-[var(--surface)] p-4 sm:p-6 md:p-10 flex flex-col gap-6 md:gap-8">
          
          {/* Project Title & Tag */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b border-[var(--text)] pb-4 gap-4">
            <h1 className="font-sunroll text-3xl min-[380px]:text-4xl md:text-5xl lg:text-6xl text-[var(--text)] leading-none pt-2">
              {project.num} {project.title}
            </h1>
            <span className="bg-[var(--accent)] border border-[var(--text)] px-3 py-1 md:px-4 md:py-1.5 font-afacad text-sm md:text-base font-bold text-[var(--text)] rounded-full shrink-0 self-start md:self-auto">
              {project.tag}
            </span>
          </div>

          {/* Project Description */}
          <p className="font-afacad text-base min-[380px]:text-lg md:text-xl text-[var(--text)] font-semibold leading-relaxed opacity-95">
            {project.desc}
          </p>

          {/* Challenge Section */}
          <div>
            <h3 className="font-afacad text-sm font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
              The Challenge
            </h3>
            <p className="font-afacad text-base text-[var(--text)] leading-relaxed opacity-90">
              {project.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div>
            <h3 className="font-afacad text-sm font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
              The Solution
            </h3>
            <p className="font-afacad text-base text-[var(--text)] leading-relaxed opacity-90">
              {project.solution}
            </p>
          </div>

          {/* Image Showcase - Added AFTER the Solution */}
          {project.images && project.images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-4">
              {project.images.map((imgSrc, index) => (
                <div 
                  key={index}
                  className="border-2 border-[var(--text)] shadow-[6px_6px_0px_0px_var(--text)] bg-[var(--background)] p-3 overflow-hidden flex justify-center items-center cursor-zoom-in hover:translate-y-[-2px] transition-transform duration-200"
                  onClick={() => setSelectedImage(imgSrc)}
                >
                  <img 
                    src={imgSrc} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    className="w-full h-auto max-h-[450px] object-contain border border-[var(--text)]" 
                  />
                </div>
              ))}
            </div>
          ) : (
            <div 
              className="border-2 border-[var(--text)] shadow-[6px_6px_0px_0px_var(--text)] bg-[var(--background)] p-3 overflow-hidden flex justify-center items-center my-4 cursor-zoom-in hover:translate-y-[-2px] transition-transform duration-200"
              onClick={() => setSelectedImage(project.image)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto max-h-[600px] object-contain border border-[var(--text)]" 
              />
            </div>
          )}

          {/* Impact Box */}
          {project.impact && (
            <div className="bg-[var(--accent)] border-2 border-[var(--text)] p-4 md:p-5 shadow-[4px_4px_0px_0px_var(--text)]">
              <h3 className="font-afacad text-sm font-bold text-[var(--text)] uppercase tracking-wider mb-2">
                Impact & Results
              </h3>
              <p className="font-afacad text-base md:text-lg font-medium text-[var(--text)] leading-relaxed">
                {project.impact}
              </p>
            </div>
          )}

          {/* Live Link Button */}
          {project.liveLink && (
            <div className="bg-[var(--accent)] border-2 border-[var(--text)] p-4 md:p-6 shadow-[6px_6px_0px_0px_var(--text)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h3 className="font-afacad text-lg font-bold text-[var(--text)] uppercase tracking-wider">
                  Experience the project
                </h3>
                <p className="font-afacad text-sm text-[var(--text)] opacity-90 mt-1">
                  Browse invitation designs, customize templates, and experience the checkout flow live.
                </p>
              </div>
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--background)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] py-2 px-4 md:py-2.5 md:px-6 font-afacad text-sm md:text-base font-bold text-[var(--text)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200 shrink-0 w-full md:w-auto text-center"
              >
                View Live Website →
              </a>
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h3 className="font-afacad text-sm font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
              Key Highlights
            </h3>
            <ul className="list-disc list-inside font-afacad text-base text-[var(--text)] leading-relaxed opacity-90 pl-2">
              {project.features.map((feat, idx) => (
                <li key={idx} className="mb-1">{feat}</li>
              ))}
            </ul>
          </div>

        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center cursor-zoom-out p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Neobrutalist Close Button */}
          <button 
            className="fixed top-6 right-6 bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] text-[var(--text)] font-bold py-2 px-5 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-100 z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            ✕ Close
          </button>

          {/* Left Navigation Arrow */}
          {project.images && project.images.length > 1 && (
            <button 
              className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] text-[var(--text)] font-bold w-12 h-12 flex items-center justify-center hover:translate-y-[calc(-50%+2px)] hover:translate-x-0.5 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-100 z-[110] text-2xl select-none pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = project.images!.indexOf(selectedImage);
                const prevIdx = (currentIndex - 1 + project.images!.length) % project.images!.length;
                setSelectedImage(project.images![prevIdx]);
              }}
            >
              ←
            </button>
          )}

          {/* Right Navigation Arrow */}
          {project.images && project.images.length > 1 && (
            <button 
              className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] text-[var(--text)] font-bold w-12 h-12 flex items-center justify-center hover:translate-y-[calc(-50%+2px)] hover:translate-x-0.5 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-100 z-[110] text-2xl select-none pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = project.images!.indexOf(selectedImage);
                const nextIdx = (currentIndex + 1) % project.images!.length;
                setSelectedImage(project.images![nextIdx]);
              }}
            >
              →
            </button>
          )}
          
          <div className="relative max-w-[95%] max-h-[95%] flex flex-col items-center justify-center pointer-events-none">
            <div className="border-2 border-[var(--text)] shadow-[8px_8px_0px_0px_var(--text)] bg-[var(--background)] p-3 overflow-hidden flex justify-center items-center pointer-events-auto">
              <img 
                src={selectedImage} 
                alt="Enlarged screenshot" 
                className="w-auto h-auto max-w-full max-h-[80vh] md:max-h-[85vh] object-contain border border-[var(--text)]" 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
