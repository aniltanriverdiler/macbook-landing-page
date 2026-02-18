# MacBook Landing Page - TypeScript Type System Guide

## 📋 Table of Contents

1. [Overview](#overview)
2. [Project Architecture](#project-architecture)
3. [Type Definitions](#type-definitions)
4. [Usage Examples](#usage-examples)
5. [Best Practices](#best-practices)

---

## Overview

This project is a type-safe MacBook landing page application built with TypeScript. The following technologies are used:

- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Three.js + React Three Fiber** - 3D rendering
- **Zustand** - State management
- **GSAP** - Animations
- **Tailwind CSS** - Styling

## Project Architecture

```
src/
├── components/           # React components
│   ├── models/          # 3D model components (MacBook14, MacBook16, MacBook)
│   ├── three/           # Three.js specific components (ModelSwitcher, StudioLights)
│   ├── Features.tsx
│   ├── Performance.tsx
│   ├── ProductViewer.tsx
│   └── ...
├── constants/           # Static data and configurations
│   └── index.ts
├── store/              # Zustand state management
│   └── index.ts
└── types/              # TypeScript type definitions
    ├── index.ts        # Central export
    ├── store.ts        # Store types
    ├── constants.ts    # Constants data types
    ├── components.ts   # Component props types
    ├── common.ts       # Common/shared types
    └── README.md       # Types documentation
```

## Type Definitions

### 1. Store Types (`src/types/store.ts`)

#### MacBookStoreState
Defines the state portion of the store:

```typescript
export interface MacBookStoreState {
  color: string;        // Selected color
  scale: number;        // Model size (0.06 or 0.08)
  texture: string;      // Screen texture path
}
```

#### MacBookStoreActions
Defines store actions:

```typescript
export interface MacBookStoreActions {
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
}
```

#### MacBookStore
Defines the full store type (State + Actions):

```typescript
export type MacBookStore = MacBookStoreState & MacBookStoreActions;
```

**Usage:**
```typescript
import { create } from 'zustand';
import type { MacBookStore } from './types';

const useMacBookStore = create<MacBookStore>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),
  // ...
}));
```

---

### 2. Constants Types (`src/types/constants.ts`)

#### NavLink
For navigation menu items:

```typescript
export interface NavLink {
  label: string;
}
```

#### PerformanceImage
For images in the performance section:

```typescript
export interface PerformanceImage {
  id: string;
  src: string;
  alt?: string;
}
```

#### PerformanceImagePosition
For image position information:

```typescript
export interface PerformanceImagePosition {
  id: string;
  left?: number;
  right?: number;
  bottom?: number;
  transform?: string;
}
```

#### Feature
For feature cards:

```typescript
export interface Feature {
  id: number;
  icon: string;
  highlight: string;
  text: string;
  styles: string;  // Tailwind CSS classes
}
```

#### FeatureSequence
For video transitions:

```typescript
export interface FeatureSequence {
  videoPath: string;
  boxClass: string;
  delay: number;
}
```

#### FooterLink
For footer links:

```typescript
export interface FooterLink {
  label: string;
  link: string;
}
```

**Usage:**
```typescript
import type { Feature, FooterLink } from './types';

const features: Feature[] = [
  {
    id: 1,
    icon: "/icon.svg",
    highlight: "AI Feature",
    text: "Description here",
    styles: "left-5 top-[20%]"
  }
];

const footerLinks: FooterLink[] = [
  { label: "Privacy", link: "#" }
];
```

---

### 3. Component Props Types (`src/types/components.ts`)

#### ModelSwitcherProps
For the 3D model switcher component:

```typescript
export interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}
```

#### MacBookModelProps
General MacBook 3D model props:

```typescript
export interface MacBookModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}
```

#### MacBook14Props & MacBook16Props
Specific props for 14" and 16" models:

```typescript
export interface MacBook14Props extends MacBookModelProps {}
export interface MacBook16Props extends MacBookModelProps {}
```

**Usage:**
```typescript
import type { ModelSwitcherProps } from './types';

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  // Component logic
};
```

---

### 4. Common Types (`src/types/common.ts`)

#### MacBookColor, MacBookScale, MacBookSize
Base types:

```typescript
export type MacBookColor = "#adb5bd" | "#2e2c2e" | string;
export type MacBookScale = 0.06 | 0.08 | number;
export type MacBookSize = "14" | "16";
```

#### Position3D & Rotation3D
For 3D position and rotation:

```typescript
export type Position3D = [number, number, number];
export type Rotation3D = [number, number, number];
```

#### AnimationConfig
For GSAP animations:

```typescript
export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  opacity?: number;
  y?: number;
  x?: number;
}
```

#### Constants

```typescript
export const BREAKPOINTS = {
  mobile: "(max-width: 1024px)",
  desktop: "(min-width: 1025px)",
} as const;

export const SCALE_VALUES = {
  large: { desktop: 0.08, mobile: 0.05 },
  small: { desktop: 0.06, mobile: 0.03 },
} as const;
```

**Usage:**
```typescript
import type { Position3D, AnimationConfig } from './types';
import { BREAKPOINTS, SCALE_VALUES } from './types';

const position: Position3D = [0, 1, 2];
const animConfig: AnimationConfig = {
  duration: 1,
  ease: "power1.out"
};

// Constants
const isMobile = useMediaQuery({ query: BREAKPOINTS.mobile });
const scale = isMobile ? SCALE_VALUES.large.mobile : SCALE_VALUES.large.desktop;
```

---

## Usage Examples

### Example 1: Zustand Store Usage

```typescript
// src/store/index.ts
import { create } from "zustand";
import type { MacBookStore } from "../types";

const useMacBookStore = create<MacBookStore>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),
  
  scale: 0.08,
  setScale: (scale: number) => set({ scale }),
  
  texture: "/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),
  
  reset: () => set({ 
    color: "#2e2c2e", 
    scale: 0.08, 
    texture: "/videos/feature-1.mp4" 
  }),
}));

export default useMacBookStore;
```

### Example 2: Component Props

```typescript
// Component definition
import type { ModelSwitcherProps } from "../types";

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  // TypeScript now knows the types of scale and isMobile
  console.log(scale); // number
  console.log(isMobile); // boolean
  
  return <group>...</group>;
};

// Component usage
<ModelSwitcher scale={0.08} isMobile={false} />
```

### Example 3: Working with Constants

```typescript
// src/constants/index.ts
import type { Feature, NavLink } from "../types";

const features: Feature[] = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Email AI.",
    text: "AI powered email management",
    styles: "left-5 top-[20%]"
  },
  // TypeScript checks that each property has the correct type
];

const navLinks: NavLink[] = [
  { label: "Store" },
  { label: "Mac" },
  // Each item must have a label
];
```

### Example 4: 3D Model Props

```typescript
import type { MacBookModelProps } from "../types";

function MacBookModel({ scale = 0.08, position = [0, 0, 0], rotation }: MacBookModelProps) {
  // scale, position and rotation types are known; props are also optional
  
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* 3D content */}
    </group>
  );
}

// Usage
<MacBookModel scale={0.06} position={[0, -1, 0]} />
<MacBookModel /> // Uses defaults
```

### Example 5: Animation Config

```typescript
import type { AnimationConfig } from "../types";
import gsap from "gsap";

const animateElement = (element: HTMLElement, config: AnimationConfig) => {
  gsap.to(element, {
    duration: config.duration ?? 1,
    ease: config.ease ?? "power1.out",
    opacity: config.opacity,
    x: config.x,
    y: config.y,
    delay: config.delay ?? 0,
  });
};

// Usage
animateElement(myElement, {
  duration: 2,
  opacity: 1,
  y: 0,
  ease: "power2.inOut"
});
```

---

## Best Practices

### ✅ DO

1. **Use Type Import**
   ```typescript
   // ✅ Correct
   import type { Feature } from './types';
   
   // ❌ Wrong
   import { Feature } from './types';
   ```

2. **Explicit Type Annotations**
   ```typescript
   // ✅ Correct
   const features: Feature[] = [...];
   
   // ❌ Wrong
   const features = [...]; // implicit any
   ```

3. **Component Props Interface**
   ```typescript
   // ✅ Correct
   interface MyComponentProps {
     title: string;
     count: number;
   }
   
   const MyComponent = ({ title, count }: MyComponentProps) => { ... };
   
   // ❌ Wrong
   const MyComponent = ({ title, count }) => { ... }; // implicit any
   ```

4. **Central Type Export**
   ```typescript
   // ✅ Correct
   import type { Feature, FooterLink } from '@/types';
   
   // ❌ Wrong
   import type { Feature } from '@/types/constants';
   ```

5. **Mark Optional Props**
   ```typescript
   // ✅ Correct
   interface Props {
     required: string;
     optional?: number;
   }
   
   // ❌ Wrong - making everything optional
   interface Props {
     required?: string;
     optional?: number;
   }
   ```

### ❌ DON'T

1. **Avoid Using Any**
   ```typescript
   // ❌ Avoid
   const data: any = { ... };
   
   // ✅ Use a proper type instead
   const data: Feature = { ... };
   ```

2. **Excessive Type Assertions**
   ```typescript
   // ❌ Excessive assertion
   const value = (data as any).property;
   
   // ✅ Proper typing
   interface Data {
     property: string;
   }
   const value = data.property;
   ```

3. **Inline Type Definitions**
   ```typescript
   // ❌ Inline type definitions
   const Component = (props: { name: string; age: number }) => { ... };
   
   // ✅ Separate interface
   interface ComponentProps {
     name: string;
     age: number;
   }
   const Component = (props: ComponentProps) => { ... };
   ```

---

## TypeScript Configuration

The project runs with `strict` mode enabled:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

This ensures maximum type safety and catches potential errors at compile time.

---

## Useful Links

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Zustand TypeScript Guide](https://docs.pmnd.rs/zustand/guides/typescript)
- [Three.js TypeScript](https://threejs.org/docs/#manual/en/introduction/Typescript)

---

## Help and Support

For questions about type definitions:
1. Check the `src/types/README.md` file
2. Review existing usage examples
3. Read TypeScript compiler error messages (they are usually very helpful)

---

**Last Updated:** 2026-02-16
