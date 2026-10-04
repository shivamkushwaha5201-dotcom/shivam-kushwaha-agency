// Centralized Single-Loop Scroll & Viewport Coordinator
// Ensures ONE passive scroll listener, ONE resize listener, batched layout reads,
// and ONE unified requestAnimationFrame pass across the entire website.

export interface ScrollMetrics {
  scrollY: number;
  winWidth: number;
  winHeight: number;
  docHeight: number;
  progress: number;
  now: number;
}

type ScrollSubscriber = (metrics: ScrollMetrics) => boolean | void;
type ResizeSubscriber = (metrics: ScrollMetrics) => void;

class ScrollCoordinator {
  private scrollSubscribers = new Set<ScrollSubscriber>();
  private resizeSubscribers = new Set<ResizeSubscriber>();
  private rafId: number | null = null;
  private initialized = false;
  private resizeObserver: ResizeObserver | null = null;

  public metrics: ScrollMetrics = {
    scrollY: typeof window !== 'undefined' ? window.scrollY || window.pageYOffset || 0 : 0,
    winWidth: typeof window !== 'undefined' ? window.innerWidth : 1440,
    winHeight: typeof window !== 'undefined' ? window.innerHeight : 900,
    docHeight: 1,
    progress: 0,
    now: typeof performance !== 'undefined' ? performance.now() : 0,
  };

  private init() {
    if (this.initialized || typeof window === 'undefined') return;
    this.initialized = true;

    this.measureDimensions();
    this.readScroll();

    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize, { passive: true });

    if (typeof ResizeObserver !== 'undefined' && document.body) {
      this.resizeObserver = new ResizeObserver(() => {
        this.measureDimensions();
        this.notifyResize();
        this.wake();
      });
      this.resizeObserver.observe(document.body);
    }
  }

  private measureDimensions = () => {
    if (typeof window === 'undefined') return;
    this.metrics.winWidth = window.innerWidth;
    this.metrics.winHeight = window.innerHeight;
    this.metrics.docHeight = Math.max(
      1,
      document.documentElement.scrollHeight - this.metrics.winHeight
    );
  };

  private readScroll = () => {
    if (typeof window === 'undefined') return;
    const y = window.scrollY || window.pageYOffset || 0;
    this.metrics.scrollY = y;
    this.metrics.progress =
      this.metrics.docHeight > 0
        ? Math.min(1, Math.max(0, y / this.metrics.docHeight))
        : 0;
  };

  private onScroll = () => {
    this.readScroll();
    this.wake();
  };

  private onResize = () => {
    this.measureDimensions();
    this.readScroll();
    this.notifyResize();
    this.wake();
  };

  private notifyResize() {
    for (const sub of this.resizeSubscribers) {
      sub(this.metrics);
    }
  }

  public wake = () => {
    if (this.rafId === null && typeof window !== 'undefined') {
      this.rafId = requestAnimationFrame(this.loop);
    }
  };

  private loop = (now: number) => {
    this.metrics.now = now;
    // Batch single scroll read at start of frame before any subscriber writes styles
    this.readScroll();

    let keepAlive = false;
    for (const sub of this.scrollSubscribers) {
      const needsMoreFrames = sub(this.metrics);
      if (needsMoreFrames === true) {
        keepAlive = true;
      }
    }

    if (keepAlive) {
      this.rafId = requestAnimationFrame(this.loop);
    } else {
      this.rafId = null;
    }
  };

  public subscribe(
    onFrame: ScrollSubscriber,
    onResizeCallback?: ResizeSubscriber
  ): () => void {
    this.init();
    this.scrollSubscribers.add(onFrame);
    if (onResizeCallback) {
      this.resizeSubscribers.add(onResizeCallback);
      onResizeCallback(this.metrics);
    }
    // Execute initial frame sync
    onFrame(this.metrics);
    this.wake();

    return () => {
      this.scrollSubscribers.delete(onFrame);
      if (onResizeCallback) {
        this.resizeSubscribers.delete(onResizeCallback);
      }
    };
  }
}

export const scrollCoordinator = new ScrollCoordinator();
