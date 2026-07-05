'use client';

import Link from 'next/link';
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import HomeSlide       from '@/components/slides/HomeSlide';
import TechnicalSlide  from '@/components/slides/TechnicalSlide';
import DesignSlide     from '@/components/slides/DesignSlide';
import ContactSlide    from '@/components/slides/ContactSlide';
import Menu            from '@/components/Menu';
import PageIndicator   from '@/components/PageIndicator';

const TOTAL_SLIDES = 4;

export default function Home() {
  const { currentSlide, goTo, goNext, goPrev } = useSlideNavigation();

  return (
    <>
      {/* ── Persistent top accent bar ─────────────────────────── */}
      <div
        style={{ position: 'fixed', top: 0, left: 0, right: 0, height: '20px', zIndex: 60 }}
        className="bg-[var(--accent)] border-b-2 border-[var(--text)]"
      />

      {/* ── Slide deck ──────────────────────────────────────────── */}
      {/*
        All slides are permanently mounted in the DOM.
        Only the active slide has visibility:visible + pointer-events:auto.
        No display:none, no opacity transitions, no transforms.
        Slide changes are instantaneous.
      */}
      <div className="slide-deck" style={{ paddingTop: '20px' }}>

        <div className={`slide${currentSlide === 0 ? ' active' : ''}`}>
          <HomeSlide />
        </div>

        <div className={`slide${currentSlide === 1 ? ' active' : ''}`}>
          <DesignSlide />
        </div>

        <div className={`slide${currentSlide === 2 ? ' active' : ''}`}>
          <TechnicalSlide />
        </div>

        <div className={`slide${currentSlide === 3 ? ' active' : ''}`}>
          <ContactSlide />
        </div>

      </div>

      {/* ── Persistent overlays (never unmounted, never slide-specific) ── */}

      {/* Morphing menu — the ONLY animated element */}
      <Menu currentSlide={currentSlide} goTo={goTo} />

      {/* Projects CTA Button — Home page (slide 0) only */}
      {currentSlide === 0 && (
        <Link
          href="/projects"
          style={{ position: 'fixed', bottom: '64px', left: '120px', zIndex: 50 }}
          className="bg-[var(--accent)] border-2 border-[var(--text)] shadow-[6px_6px_0px_0px_var(--text)]
                     py-2 px-5 font-afacad text-base md:text-lg font-bold text-[var(--text)]
                     text-center whitespace-nowrap select-none block
                     hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-200"
        >
          Projects →
        </Link>
      )}

      {/* Pagination indicator — updates instantly, no animation */}
      <PageIndicator currentSlide={currentSlide} total={TOTAL_SLIDES} goTo={goTo} />
    </>
  );
}
