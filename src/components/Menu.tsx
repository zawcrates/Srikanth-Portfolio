'use client';

import { useState } from 'react';

/**
 * Menu — the ONLY animated element in the portfolio.
 *
 * Home  (slide 0) : floating neo-brutalist card anchored to bottom-right.
 * Sub-pages (1-3) : morphs into a full-height right sidebar.
 *
 * Transition: 0.6s cubic-bezier(0.16, 1, 0.3, 1) on top, height, and width.
 * No other animations exist in this application.
 */

const ALL_SLIDES = [
  { index: 0, num: '00', label: 'Home' },
  { index: 1, num: '01', label: 'Design Projects' },
  { index: 2, num: '02', label: 'Technical Projects' },
  { index: 3, num: '03', label: 'Contact' },
];

// Fixed card dimensions for home-state morph calculation
const CARD_HEIGHT   = 222; // px — must fit [Menu] + 3 links with padding
const BOTTOM_MARGIN =  64; // px — distance from viewport bottom (xl:bottom-16)
const CARD_WIDTH    = 360; // px
const SIDEBAR_WIDTH = 360; // px

interface MenuProps {
  currentSlide: number;
  goTo: (index: number) => void;
}

export default function Menu({ currentSlide, goTo }: MenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isHome = currentSlide === 0;
  const otherSlides = ALL_SLIDES.filter((s) => s.index !== currentSlide);

  // Computed positional styles for the morph
  const posStyle = isHome
    ? {
        top: `calc(100vh - ${CARD_HEIGHT + BOTTOM_MARGIN}px)`,
        height: `${CARD_HEIGHT}px`,
        width: `${CARD_WIDTH}px`,
        right: '-20px',
      }
    : {
        top: '0',
        height: '100vh',
        width: `${SIDEBAR_WIDTH}px`,
        right: '0',
      };

  return (
    <>
      {/* ── Desktop Menu ────────────────────────────────────────── */}
      <div
        style={{
          position: 'fixed',
          zIndex: 50,
          transition:
            'top 0.6s cubic-bezier(0.16, 1, 0.3, 1), height 0.6s cubic-bezier(0.16, 1, 0.3, 1), width 0.6s cubic-bezier(0.16, 1, 0.3, 1), right 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
          overflow: 'hidden',
          boxShadow: '8px 8px 0px 0px var(--text)',
          ...posStyle,
        }}
        className="hidden md:block bg-[var(--accent)] border-2 border-[var(--text)] select-none"
      >
        <div className="flex flex-col h-full">
          {/* [Menu] label */}
          <div className={`font-afacad text-xl font-medium text-[var(--text)] opacity-80 text-right ${isHome ? 'pt-5 pb-2 pr-[50px] pl-6' : 'pt-12 pb-2 pr-[50px] pl-8'}`}>
            [Menu]
          </div>

          {/* Navigation links */}
          <nav className={`flex flex-col gap-2 ${isHome ? 'pt-2 pb-4' : 'pt-4'}`}>
            {otherSlides.map((slide) => (
              <button
                key={slide.index}
                onClick={() => goTo(slide.index)}
                className={[
                  'flex justify-end items-center gap-4',
                  'font-afacad text-xl md:text-2xl font-medium text-[var(--text)]',
                  'hover:-translate-x-2 hover:font-bold transition-all duration-200 ease-out',
                  isHome ? 'pr-[50px] pl-6' : 'pr-[50px] pl-8',
                ].join(' ')}
              >
                <span>{slide.num}</span> {slide.label}
              </button>
            ))}
          </nav>

          {/* Contact info — pinned to sidebar bottom */}
          {!isHome && (
            <div className="mt-auto pb-10 pr-[50px] pl-8 text-right font-afacad text-sm text-[var(--text)] opacity-70 leading-relaxed">
              <p>+91 6379237294</p>
              <a href="mailto:srikanthk.work@gmail.com" className="hover:underline block">srikanthk.work@gmail.com</a>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile Hamburger Button ─────────────────────────────── */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{ position: 'fixed', top: '24px', right: '24px', zIndex: 60 }}
        className="block md:hidden w-12 h-12 bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)] flex flex-col justify-center items-center gap-1.5 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-[2px_2px_0px_0px_var(--text)] transition-all duration-100"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-[var(--text)] transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-[var(--text)] transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-[var(--text)] transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* ── Mobile Full-screen Overlay Menu ───────────────────────── */}
      {isOpen && (
        <div
          onTouchStart={(e) => e.stopPropagation()}
          onTouchEnd={(e) => e.stopPropagation()}
          onWheel={(e) => e.stopPropagation()}
          style={{ position: 'fixed', zIndex: 50 }}
          className="block md:hidden inset-0 bg-[var(--background)] border-2 border-[var(--text)] flex flex-col justify-between p-8 pt-28 pb-12 select-none"
        >
          {/* Mobile Navigation links */}
          <nav className="flex flex-col gap-6">
            {ALL_SLIDES.map((slide) => (
              <button
                key={slide.index}
                onClick={() => {
                  goTo(slide.index);
                  setIsOpen(false);
                }}
                className={[
                  'flex items-center gap-4',
                  'font-afacad text-3xl font-medium text-[var(--text)] text-left',
                  currentSlide === slide.index ? 'font-bold underline decoration-2 underline-offset-4' : 'opacity-85',
                ].join(' ')}
              >
                <span>{slide.num}</span> {slide.label}
              </button>
            ))}
          </nav>

          {/* Contact info at bottom */}
          <div className="font-afacad text-base text-[var(--text)] opacity-85 leading-relaxed mt-auto border-t-2 border-[var(--text)] pt-6">
            <p className="font-bold mb-1">[Contact Info]</p>
            <p>+91 6379237294</p>
            <a href="mailto:srikanthk.work@gmail.com" className="hover:underline block">srikanthk.work@gmail.com</a>
          </div>
        </div>
      )}
    </>
  );
}

