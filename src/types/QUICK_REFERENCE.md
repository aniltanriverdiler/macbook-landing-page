# TypeScript Types - Quick Reference

## 🚀 Quick Start

```typescript
// Import all types
import type { 
  MacBookStore,           // Store type
  Feature,                // Feature cards
  ModelSwitcherProps,     // Component props
  Position3D              // 3D position
} from '@/types';

// Import constants
import { BREAKPOINTS, SCALE_VALUES } from '@/types';
```

---

## 📦 Store Types

### Zustand Store

```typescript
import type { MacBookStore } from '@/types';

create<MacBookStore>((set) => ({
  color: string,
  scale: number,
  texture: string,
  setColor: (color: string) => void,
  setScale: (scale: number) => void,
  setTexture: (texture: string) => void,
  reset: () => void,
}))
```

**Usage:**
```typescript
const { color, setColor } = useMacBookStore();
setColor("#2e2c2e"); // ✅
```

---

## 🎨 Constants Types

### Feature (Feature Cards)

```typescript
const features: Feature[] = [
  {
    id: number,
    icon: string,
    highlight: string,
    text: string,
    styles: string
  }
]
```

### NavLink (Navigation)

```typescript
const navLinks: NavLink[] = [
  { label: string }
]
```

### PerformanceImage & Position

```typescript
const images: PerformanceImage[] = [
  { id: string, src: string, alt?: string }
]

const positions: PerformanceImagePosition[] = [
  {
    id: string,
    left?: number,
    right?: number,
    bottom?: number,
    transform?: string
  }
]
```

### FeatureSequence (Video Transitions)

```typescript
const sequence: FeatureSequence[] = [
  {
    videoPath: string,
    boxClass: string,
    delay: number
  }
]
```

### FooterLink

```typescript
const links: FooterLink[] = [
  { label: string, link: string }
]
```

---

## 🧩 Component Props

### ModelSwitcher

```typescript
interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}

<ModelSwitcher scale={0.08} isMobile={false} />
```

### MacBook Models (14" & 16")

```typescript
interface MacBookModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

<MacBookModel scale={0.08} position={[0, -1, 0]} />
```

### Section (General Layout)

```typescript
interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}
```

---

## 🎯 Common Types

### Colors and Sizes

```typescript
type MacBookColor = "#adb5bd" | "#2e2c2e" | string;
type MacBookScale = 0.06 | 0.08 | number;
type MacBookSize = "14" | "16";
```

### 3D Position & Rotation

```typescript
type Position3D = [number, number, number];
type Rotation3D = [number, number, number];

const pos: Position3D = [0, 1, 2];
const rot: Rotation3D = [Math.PI, 0, 0];
```

### Animation Config

```typescript
interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  opacity?: number;
  y?: number;
  x?: number;
}

const config: AnimationConfig = {
  duration: 1,
  ease: "power1.out",
  opacity: 1
};
```

---

## 🔧 Constants

### Breakpoints

```typescript
import { BREAKPOINTS } from '@/types';

BREAKPOINTS.mobile    // "(max-width: 1024px)"
BREAKPOINTS.desktop   // "(min-width: 1025px)"

// Usage
const isMobile = useMediaQuery({ 
  query: BREAKPOINTS.mobile 
});
```

### Scale Values

```typescript
import { SCALE_VALUES } from '@/types';

SCALE_VALUES.large.desktop  // 0.08
SCALE_VALUES.large.mobile   // 0.05
SCALE_VALUES.small.desktop  // 0.06
SCALE_VALUES.small.mobile   // 0.03

// Usage
const scale = isMobile 
  ? SCALE_VALUES.large.mobile 
  : SCALE_VALUES.large.desktop;
```

---

## ✨ Code Snippets

### Add New Constant

```typescript
// src/types/constants.ts
export interface MyNewType {
  id: string;
  name: string;
}

// src/types/index.ts
export type { MyNewType } from './constants';

// src/constants/index.ts
import type { MyNewType } from '../types';

const myData: MyNewType[] = [
  { id: "1", name: "Item 1" }
];
```

### Add New Component Props

```typescript
// src/types/components.ts
export interface MyComponentProps {
  title: string;
  onClick: () => void;
}

// Component
import type { MyComponentProps } from '@/types';

const MyComponent = ({ title, onClick }: MyComponentProps) => {
  return <button onClick={onClick}>{title}</button>;
};
```

### Extend Store State

```typescript
// src/types/store.ts
export interface MacBookStoreState {
  // ... existing
  newField: string;  // Add new field
}

export interface MacBookStoreActions {
  // ... existing
  setNewField: (value: string) => void;  // Add action
}

// src/store/index.ts
const useMacBookStore = create<MacBookStore>((set) => ({
  // ... existing
  newField: "default",
  setNewField: (value: string) => set({ newField: value }),
}));
```

---

## 🎓 Common Errors and Solutions

### Error: "Property does not exist on type"

```typescript
// ❌ Error
const data = { name: "test" };
console.log(data.age); // Error!

// ✅ Solution
interface Data {
  name: string;
  age?: number;
}
const data: Data = { name: "test" };
console.log(data.age); // OK (undefined)
```

### Error: "Type 'X' is not assignable to type 'Y'"

```typescript
// ❌ Error
const scale: MacBookScale = "large"; // Error!

// ✅ Solution
const scale: MacBookScale = 0.08; // OK
```

### Error: "Argument of type '...' is not assignable"

```typescript
// ❌ Error
<ModelSwitcher scale="0.08" isMobile={false} /> // Error!

// ✅ Solution
<ModelSwitcher scale={0.08} isMobile={false} /> // OK
```

---

## 📝 Checklist

Check when writing new code:

- [ ] Are all props typed?
- [ ] Do arrays have explicit types?
- [ ] Are optional fields marked with `?`?
- [ ] Is `any` usage avoided?
- [ ] Are type imports using the `type` keyword?
- [ ] Does the build pass without errors? (`npm run build`)

---

## 🔗 Related Documentation

- **Detailed Documentation:** [TYPES_GUIDE.md](../../TYPES_GUIDE.md)
- **Type Definitions:** [src/types/](.)
- **README:** [README.md](./README.md)

---

**Tip:** Hover over a variable in VS Code to see its full type information!
