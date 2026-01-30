// WAAPI Utility Functions
// Helper functions for Web Animations API

/**
 * Create a smooth path morph animation
 */
export function morphPath(
  path: SVGPathElement,
  keyframes: Keyframe[],
  options: number | KeyframeAnimationOptions
): Animation {
  return path.animate(keyframes, typeof options === "number" ? { duration: options } : options);
}

/**
 * Create a rotation animation
 */
export function rotate(
  element: HTMLElement | SVGElement,
  degrees: number,
  duration: number = 300,
  easing: string = "cubic-bezier(0.16, 1, 0.3, 1)"
): Animation {
  return element.animate(
    [{ transform: "rotate(0deg)" }, { transform: `rotate(${degrees}deg)` }],
    { duration, easing, fill: "forwards" }
  );
}

/**
 * Create a scale animation
 */
export function scale(
  element: HTMLElement | SVGElement,
  to: number,
  duration: number = 200,
  easing: string = "cubic-bezier(0.16, 1, 0.3, 1)"
): Animation {
  return element.animate(
    [{ transform: "scale(1)" }, { transform: `scale(${to})` }],
    { duration, easing, fill: "forwards" }
  );
}

/**
 * Create a fade animation
 */
export function fade(
  element: HTMLElement | SVGElement,
  to: number,
  duration: number = 200,
  easing: string = "ease-out"
): Animation {
  return element.animate(
    [{ opacity: to === 0 ? 1 : 0 }, { opacity: to }],
    { duration, easing, fill: "forwards" }
  );
}

/**
 * Chain multiple animations
 */
export function chain(
  animations: Animation[],
  onComplete?: () => void
): void {
  if (animations.length === 0) {
    onComplete?.();
    return;
  }

  const [first, ...rest] = animations;
  
  first.onfinish = () => {
    if (rest.length > 0) {
      chain(rest, onComplete);
    } else {
      onComplete?.();
    }
  };
}

/**
 * Parallel animation execution
 */
export function parallel(
  animations: Animation[],
  onComplete?: () => void
): void {
  let completed = 0;
  
  if (animations.length === 0) {
    onComplete?.();
    return;
  }

  animations.forEach((anim) => {
    anim.onfinish = () => {
      completed++;
      if (completed === animations.length) {
        onComplete?.();
      }
    };
  });
}

// Easing presets
export const easings = {
  smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
  snappy: "cubic-bezier(0, 0, 0.2, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  linear: "linear",
} as const;

// Common duration presets
export const durations = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;
