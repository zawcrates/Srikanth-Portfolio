'use client';

/**
 * PageIndicator — persistent pill dot indicator, bottom-center.
 * Active dot is a wide pill; inactive dots are circles.
 * Updates INSTANTLY — no transitions, no animations.
 */

interface PageIndicatorProps {
  currentSlide: number;
  total: number;
  goTo: (index: number) => void;
}

export default function PageIndicator({ currentSlide, total, goTo }: PageIndicatorProps) {
  return (
    <div
      style={{ position: 'fixed', bottom: '16px', left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}
      className="flex items-center gap-[5px] bg-[var(--text)] rounded-full px-3 py-[5px] select-none"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          aria-label={`Go to slide ${i + 1}`}
          className="rounded-full bg-[var(--accent)] block transition-none"
          style={{
            width:  i === currentSlide ? '18px' : '7px',
            height: '7px',
            opacity: i === currentSlide ? 1 : 0.4,
            // No CSS transition — width changes instantly
          }}
        />
      ))}
    </div>
  );
}
