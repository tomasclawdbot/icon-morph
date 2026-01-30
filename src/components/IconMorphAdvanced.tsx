// Advanced Icon Morph with rotation effect
// Using WAAPI for smooth native animations

"use client";

import { useRef, useState, useCallback } from "react";

interface MorphButtonProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  size?: number;
}

export function MorphRotate({
  isOpen = false,
  onToggle,
  size = 24,
}: MorphButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);

  const animate = useCallback(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    if (!container || !icon) return;

    // Animate container rotation
    const rotation = container.animate(
      [
        { transform: "rotate(0deg)" },
        { transform: "rotate(90deg)" },
      ],
      {
        duration: 300,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "forwards",
      }
    );

    // Morph the path
    const path = icon.querySelector("path");
    if (path) {
      path.animate(
        isOpen
          ? [
              { d: "M18 9l-6 6-6-6" }, // Chevron down
              { d: "M18 6L6 18M6 6l12 12" }, // X
            ]
          : [
              { d: "M18 6L6 18M6 6l12 12" }, // X
              { d: "M18 9l-6 6-6-6" }, // Chevron down
            ],
        {
          duration: 300,
          easing: "cubic-bezier(0.16, 1, 0.3, 1)",
          fill: "forwards",
        }
      );
    }

    rotation.onfinish = () => {
      if (onToggle) onToggle(!isOpen);
    };
  }, [isOpen, onToggle]);

  return (
    <div
      ref={containerRef}
      onClick={animate}
      className="cursor-pointer p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors inline-flex items-center justify-center"
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        ref={iconRef}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size, height: size }}
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    </div>
  );
}

// Menu ↔ Close X with scale effect
export function MenuX({
  isOpen = false,
  onToggle,
  size = 24,
}: MorphButtonProps) {
  const ref = useRef<SVGSVGElement>(null);

  const animate = useCallback(() => {
    const svg = ref.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");

    // Menu (3 lines) → X (close)
    const menuToX = [
      { d: "M4 6h16M4 12h16M4 18h16" }, // Menu
      { d: "M6 18L18 6M6 6l12 12" }, // X
    ];

    // X → Menu
    const xToMenu = [
      { d: "M6 18L18 6M6 6l12 12" }, // X
      { d: "M4 6h16M4 12h16M4 18h16" }, // Menu
    ];

    // Animate first path (top line → top diagonal)
    paths[0].animate(isOpen ? xToMenu : menuToX, {
      duration: 300,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "forwards",
    });

    // Animate middle line (disappears)
    paths[1].animate(
      isOpen
        ? [{ d: "M4 12h16", opacity: 1 }, { d: "M4 12h16", opacity: 0 }]
        : [{ d: "M4 12h16", opacity: 0 }, { d: "M4 12h16", opacity: 1 }],
      {
        duration: 200,
        easing: "ease-out",
        fill: "forwards",
      }
    );

    // Animate last path (bottom line → bottom diagonal)
    paths[2].animate(isOpen ? xToMenu : menuToX, {
      duration: 300,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "forwards",
    });

    if (onToggle) onToggle(!isOpen);
  }, [isOpen, onToggle]);

  return (
    <button
      onClick={animate}
      className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size, height: size }}
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
        <path d="M6 18L18 6M6 6l12 12" />
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  );
}

// Plus ↔ Minus
export function PlusMinus({
  isOpen = false,
  onToggle,
  size = 24,
}: MorphButtonProps) {
  const ref = useRef<SVGSVGElement>(null);

  const animate = useCallback(() => {
    const svg = ref.current;
    if (!svg) return;

    const paths = svg.querySelectorAll("path");

    // Plus → Minus
    const plusToMinus = [
      { d: "M12 5v14M5 12h14" }, // Plus
      { d: "M5 12h14" }, // Minus (vertical disappears)
    ];

    // Minus → Plus
    const minusToPlus = [
      { d: "M5 12h14" }, // Minus
      { d: "M12 5v14M5 12h14" }, // Plus
    ];

    paths[0].animate(isOpen ? minusToPlus : plusToMinus, {
      duration: 200,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "forwards",
    });

    paths[1].animate(isOpen ? minusToPlus : plusToMinus, {
      duration: 200,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "forwards",
    });

    if (onToggle) onToggle(!isOpen);
  }, [isOpen, onToggle]);

  return (
    <button
      onClick={animate}
      className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size, height: size }}
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    </button>
  );
}
