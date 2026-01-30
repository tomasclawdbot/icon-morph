// IconMorph Component
// Using Native Web Animations API (WAAPI)
// No external libraries - pure browser API

"use client";

import { useRef, useEffect, useState } from "react";

interface IconMorphProps {
  isOpen?: boolean;
  size?: number;
  strokeWidth?: number;
  duration?: number;
  onToggle?: (isOpen: boolean) => void;
}

export default function IconMorph({
  isOpen = false,
  size = 24,
  strokeWidth = 2,
  duration = 300,
  onToggle,
}: IconMorphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // WAAPI Animation Controller
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg || isAnimating) return;

    // Get all path elements
    const paths = svg.querySelectorAll("path");
    
    // X Define keyframes for → Chevron (open) and Chevron → X (close)
    const openKeyframes: Keyframe[] = [
      // From X to Chevron Left
      { d: "M18 6L6 18M6 6l12 12" }, // X
      { d: "M15 18L9 12L15 6" }, // Chevron Left
    ];

    const closeKeyframes: Keyframe[] = [
      // From Chevron to X
      { d: "M15 18L9 12L15 6" }, // Chevron Left
      { d: "M18 6L6 18M6 6l12 12" }, // X
    ];

    // Apply animation using WAAPI
    const animation = isOpen
      ? (paths[0] as SVGPathElement).animate(closeKeyframes, {
          duration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        })
      : (paths[0] as SVGPathElement).animate(openKeyframes, {
          duration,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        });

    // Handle animation events
    animation.onfinish = () => {
      setIsAnimating(false);
      if (onToggle) onToggle(!isOpen);
    };

    setIsAnimating(true);

    return () => {
      animation.cancel();
      setIsAnimating(false);
    };
  }, [isOpen, duration, onToggle]);

  return (
    <button
      onClick={() => onToggle?.(!isOpen)}
      className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      style={{ width: size + 16, height: size + 16 }}
      disabled={isAnimating}
    >
      <svg
        ref={svgRef}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors"
        style={{ width: size, height: size }}
      >
        {/* Initial state: X icon (will be animated by WAAPI) */}
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </button>
  );
}
