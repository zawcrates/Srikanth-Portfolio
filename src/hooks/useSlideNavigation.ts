'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export const SLIDE_HASHES = ['home', 'design', 'technical', 'contact'] as const;
export type SlideHash = (typeof SLIDE_HASHES)[number];

const LOCK_MS = 600;
const WHEEL_THRESHOLD = 10; // minimum delta to register a wheel event

function hashToIndex(hash: string): number {
  const h = hash.replace('#', '') as SlideHash;
  const i = SLIDE_HASHES.indexOf(h);
  return i >= 0 ? i : 0;
}

export function useSlideNavigation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  // Ref so event handlers always have fresh index without stale closures
  const slideRef = useRef(0);
  const locked = useRef(false);
  const touchStartY = useRef(0);

  // Keep ref in sync with state
  useEffect(() => {
    slideRef.current = currentSlide;
  }, [currentSlide]);

  // Read initial slide from URL hash on mount
  useEffect(() => {
    const idx = hashToIndex(window.location.hash);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentSlide(idx);
    slideRef.current = idx;
    // Ensure hash is always present in URL
    if (!window.location.hash) {
      window.history.replaceState({ slide: 0 }, '', '#home');
    }
  }, []);

  const navigate = useCallback((to: number) => {
    if (locked.current) return;
    const n = ((to % SLIDE_HASHES.length) + SLIDE_HASHES.length) % SLIDE_HASHES.length;
    locked.current = true;
    slideRef.current = n;
    setCurrentSlide(n);
    window.history.pushState({ slide: n }, '', `#${SLIDE_HASHES[n]}`);
    setTimeout(() => {
      locked.current = false;
    }, LOCK_MS);
  }, []);

  const goTo   = useCallback((i: number) => navigate(i), [navigate]);
  const goNext = useCallback(() => navigate(slideRef.current + 1), [navigate]);
  const goPrev = useCallback(() => navigate(slideRef.current - 1), [navigate]);

  // Browser back / forward
  useEffect(() => {
    const handler = (e: PopStateEvent) => {
      const idx =
        typeof e.state?.slide === 'number'
          ? e.state.slide
          : hashToIndex(window.location.hash);
      slideRef.current = idx;
      setCurrentSlide(idx);
    };
    window.addEventListener('popstate', handler);
    return () => window.removeEventListener('popstate', handler);
  }, []);

  // Mouse wheel / trackpad
  useEffect(() => {
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      if (Math.abs(e.deltaY) < WHEEL_THRESHOLD) return;
      if (e.deltaY > 0) goNext();
      else goPrev();
    };
    window.addEventListener('wheel', handler, { passive: false });
    return () => window.removeEventListener('wheel', handler);
  }, [goNext, goPrev]);

  // Keyboard: arrows + PageUp/Down
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown'].includes(e.key)) {
        e.preventDefault();
        goNext();
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        goPrev();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  // Touch swipe (vertical)
  useEffect(() => {
    const onStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };
    const onEnd = (e: TouchEvent) => {
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) > 50) {
        if (dy > 0) {
          goNext();
        } else {
          goPrev();
        }
      }
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onStart);
      window.removeEventListener('touchend', onEnd);
    };
  }, [goNext, goPrev]);

  return { currentSlide, goTo, goNext, goPrev };
}
