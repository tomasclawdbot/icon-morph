// Advanced Icon Morph with CSS transitions
// Simple, reliable approach using show/hide states

"use client";

import { useState } from "react";

interface MorphButtonProps {
  isOpen?: boolean;
  onToggle?: (isOpen: boolean) => void;
  size?: number;
}

// Menu ↔ Close X - using conditional rendering
export function MenuX({
  isOpen = false,
  onToggle,
  size = 24,
}: MorphButtonProps) {
  return (
    <button
      onClick={() => onToggle?.(!isOpen)}
      className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size, height: size }}
      >
        {isOpen ? (
          // Close X icon
          <>
            <line x1="18" y1="6" x2="6" y2="18" className="icon-fade-in" />
            <line x1="6" y1="6" x2="18" y2="18" className="icon-fade-in" />
          </>
        ) : (
          // Menu (hamburger) icon
          <>
            <line x1="4" y1="6" x2="20" y2="6" className="icon-fade-in" />
            <line x1="4" y1="12" x2="20" y2="12" className="icon-fade-in" />
            <line x1="4" y1="18" x2="20" y2="18" className="icon-fade-in" />
          </>
        )}
      </svg>
    </button>
  );
}

// Plus ↔ Minus - using conditional rendering
export function PlusMinus({
  isOpen = false,
  onToggle,
  size = 24,
}: MorphButtonProps) {
  return (
    <button
      onClick={() => onToggle?.(!isOpen)}
      className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ width: size, height: size }}
      >
        {isOpen ? (
          // Minus
          <line x1="5" y1="12" x2="19" y2="12" className="icon-fade-in" />
        ) : (
          // Plus
          <>
            <line x1="12" y1="5" x2="12" y2="19" className="icon-fade-in" />
            <line x1="5" y1="12" x2="19" y2="12" className="icon-fade-in" />
          </>
        )}
      </svg>
    </button>
  );
}

// Chevron Left ↔ X
export function ChevronX({
  isOpen = false,
  onToggle,
  size = 24,
}: MorphButtonProps) {
  return (
    <button
      onClick={() => onToggle?.(!isOpen)}
      className="p-3 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ 
          width: size, 
          height: size,
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" className="icon-fade-in" />
            <line x1="6" y1="6" x2="18" y2="18" className="icon-fade-in" />
          </>
        ) : (
          <path d="M15 18l-6-6 6-6" className="icon-fade-in" />
        )}
      </svg>
    </button>
  );
}

// Rotate + Morph (full example)
export function MorphRotate({
  isOpen = false,
  onToggle,
  size = 24,
}: MorphButtonProps) {
  return (
    <button
      onClick={() => onToggle?.(!isOpen)}
      className="morph-rotate-container p-3 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors inline-flex items-center justify-center"
      style={{ width: size + 24, height: size + 24 }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ 
          width: size, 
          height: size,
          transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
          transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {isOpen ? (
          <>
            <line x1="18" y1="6" x2="6" y2="18" className="icon-fade-in" />
            <line x1="6" y1="6" x2="18" y2="18" className="icon-fade-in" />
          </>
        ) : (
          <path d="M15 18l-6-6 6-6" className="icon-fade-in" />
        )}
      </svg>
    </button>
  );
}
