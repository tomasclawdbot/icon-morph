# Icon Morph Demo

> Exploring native Web Animations API (WAAPI) for smooth icon transitions

## What is WAAPI?

The **Web Animations API** is a native browser API for animations — no external libraries needed.

- **GPU accelerated** for smooth 60fps animations
- **Fine-grained control** — play, pause, reverse, timeline
- **Smaller bundles** — no framer-motion, GSAP, or animation libraries
- **Works everywhere** — supported in all modern browsers

## Demo Icons

| Animation | Description |
|-----------|-------------|
| X ↔ Chevron Left | Path morphing between close and back icons |
| Menu ↔ Close | Hamburger to X with line fade |
| Plus ↔ Minus | Expand/collapse indicator |
| Rotate + Morph | Container rotation + path animation |

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Usage

```tsx
import IconMorph from "@/components/IconMorph";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconMorph
      isOpen={isOpen}
      onToggle={setIsOpen}
      duration={300}
    />
  );
}
```

## WAAPI Basics

```tsx
// Create animation
const animation = element.animate(keyframes, options);

// Control
animation.play();
animation.pause();
animation.reverse();
animation.currentTime = 500;

// Get state
animation.playState; // 'running', 'paused', 'finished'
animation.effect; // Get animation effect
```

## Resources

- [MDN Web Animations API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API)
- [WAAPI Keyframe Formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats)

## Credits

Inspired by icon morphing animations seen on X/Twitter.
