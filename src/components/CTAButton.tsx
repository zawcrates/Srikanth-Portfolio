'use client';

/**
 * CTAButton — persistent "Next Page →" button, bottom-left.
 * Label updates per slide. Calls goNext on click.
 */

const NEXT_LABELS: Record<number, string> = {
  0: '01 Technical Projects',
  1: '02 Design Projects',
  2: '03 Contact',
  3: '00 Home',
};

interface CTAButtonProps {
  currentSlide: number;
  goNext: () => void;
}

export default function CTAButton({ currentSlide, goNext }: CTAButtonProps) {
  return (
    <button
      onClick={goNext}
      style={{ position: 'fixed', bottom: '64px', left: '120px', zIndex: 50 }}
      className="bg-[var(--accent)] border-2 border-[var(--text)] shadow-[4px_4px_0px_0px_var(--text)]
                 py-1.5 px-4 font-afacad text-sm md:text-base font-medium text-[var(--text)]
                 text-center whitespace-nowrap select-none
                 hover:-translate-x-0.5 hover:font-bold transition-all duration-200 ease-out"
    >
      Next Page →
      <span className="block text-[10px] font-medium opacity-60 mt-0.5">
        {NEXT_LABELS[currentSlide]}
      </span>
    </button>
  );
}
