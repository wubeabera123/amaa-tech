// types/aos.d.ts
declare module 'aos' {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    disable?: 'phone' | 'tablet' | 'mobile' | boolean | (() => boolean);
  }

  function init(options?: AosOptions): void;
  function refresh(): void;
  function refreshHard(): void;

  const AOS: {
    init: typeof init;
    refresh: typeof refresh;
    refreshHard: typeof refreshHard;
  };

  export = AOS;
}
