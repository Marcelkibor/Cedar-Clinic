export const isInViewport = (element: HTMLElement | null, threshold = 0) => {
    if (!element) return false;
    const rect = element.getBoundingClientRect();
    return rect.top >= -threshold && rect.bottom <= window.innerHeight + threshold;
  };
