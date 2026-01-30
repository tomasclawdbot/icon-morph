"use client";

import { useState } from "react";
import { ChevronX, MenuX, PlusMinus, MorphRotate } from "@/components/IconMorphAdvanced";

const demos = [
  {
    name: "X ↔ Chevron Left",
    component: "ChevronX",
    description: "X morphs into chevron with rotation",
  },
  {
    name: "Menu ↔ Close",
    component: "MenuX",
    description: "Hamburger menu morphs into X",
  },
  {
    name: "Plus ↔ Minus",
    component: "PlusMinus",
    description: "Expand/collapse indicator",
  },
  {
    name: "Rotate + Morph",
    component: "MorphRotate",
    description: "Container rotation combined with icon change",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b py-8 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight">Icon Morph Demo</h1>
          <p className="text-muted-foreground mt-2">
            Using Native Web Animations API (WAAPI) — no external libraries
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API"
              target="_blank"
              className="text-sm text-primary hover:underline"
            >
              MDN WAAPI Docs →
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-8 py-12 space-y-12">
        {/* Demo Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Interactive Demos</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {demos.map((demo) => (
              <DemoCard key={demo.name} demo={demo} />
            ))}
          </div>
        </section>

        {/* Code Example */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <pre className="bg-zinc-900 text-zinc-100 p-6 rounded-lg overflow-x-auto">
{`// Import the component
import IconMorph from "@/components/IconMorph";

// Use in your app
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconMorph
      isOpen={isOpen}
      onToggle={setIsOpen}
      duration={300}
    />
  );
}`}
          </pre>
        </section>

        {/* WAAPI Key Concepts */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">WAAPI Key Concepts</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <h3 className="font-semibold mb-2">Element.animate()</h3>
              <p className="text-sm text-muted-foreground">
                Native method to create animations on any DOM element
              </p>
              <pre className="mt-3 text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
{`element.animate(keyframes, options)`}
              </pre>
            </Card>
            <Card>
              <h3 className="font-semibold mb-2">Keyframes</h3>
              <p className="text-sm text-muted-foreground">
                Array of property values at specific points in time
              </p>
              <pre className="mt-3 text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
{`[
  { d: "M18 6L6 18" },
  { d: "M15 18L9 12L15 6" }
]`}
              </pre>
            </Card>
            <Card>
              <h3 className="font-semibold mb-2">Options</h3>
              <p className="text-sm text-muted-foreground">
                Duration, easing, fill mode, and iteration count
              </p>
              <pre className="mt-3 text-xs bg-zinc-100 dark:bg-zinc-800 p-2 rounded">
{`{
  duration: 300,
  easing: "cubic-bezier(...)",
  fill: "forwards"
}`}
              </pre>
            </Card>
          </div>
        </section>

        {/* Benefits */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Why WAAPI?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>No external libraries (smaller bundle)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>GPU accelerated animations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>Fine-grained control with play(), pause(), reverse()</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>Performance monitoring with getAnimations()</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>Works with CSS, SVG, and HTML elements</span>
            </li>
          </ul>
        </section>
      </main>

      <footer className="border-t py-8 px-8 mt-12">
        <div className="max-w-4xl mx-auto text-sm text-muted-foreground">
          <p>Icon Morph Demo — Built with Next.js + WAAPI</p>
          <p className="mt-1">
            Inspired by{" "}
            <a
              href="https://x.com/"
              target="_blank"
              className="hover:underline"
            >
              @username's icon morphing animation
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

function DemoCard({ demo }: { demo: (typeof demos)[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold">{demo.name}</h3>
        <span className="text-xs text-muted-foreground">{demo.component}</span>
      </div>
      <p className="text-sm text-muted-foreground mb-6">{demo.description}</p>
      <div className="flex items-center justify-center py-8 bg-zinc-50 dark:bg-zinc-900 rounded-lg">
        {demo.component === "ChevronX" && (
          <ChevronX isOpen={isOpen} onToggle={setIsOpen} />
        )}
        {demo.component === "MenuX" && (
          <MenuX isOpen={isOpen} onToggle={setIsOpen} />
        )}
        {demo.component === "PlusMinus" && (
          <PlusMinus isOpen={isOpen} onToggle={setIsOpen} />
        )}
        {demo.component === "MorphRotate" && (
          <MorphRotate isOpen={isOpen} onToggle={setIsOpen} />
        )}
      </div>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border rounded-lg p-5 bg-card">
      {children}
    </div>
  );
}
