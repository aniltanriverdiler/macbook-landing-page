# Type Definitions

This folder contains TypeScript type definitions for the MacBook Landing Page project.

## File Structure

### 📁 `index.ts`
Central export point for all types. Import types from this file when using them in other files.

```typescript
import type { MacBookStore, Feature, ModelSwitcherProps } from '@/types';
```

### 📁 `store.ts`
Type definitions for Zustand store.

**Contents:**
- `MacBookStoreState` - Store state interface
- `MacBookStoreActions` - Store actions
- `MacBookStore` - Complete store type (state + actions)

**Usage Example:**
```typescript
import { create } from 'zustand';
import type { MacBookStore } from '@/types';

const useMacBookStore = create<MacBookStore>((set) => ({
  // implementation
}));
```

### 📁 `constants.ts`
Type definitions for constant data.

**Contents:**
- `NavLink` - Navigation links
- `PerformanceImage` - Performance images
- `PerformanceImagePosition` - Image positions
- `Feature` - Feature cards
- `FeatureSequence` - Video sequence
- `FooterLink` - Footer links

**Usage Example:**
```typescript
import type { Feature } from '@/types';

const features: Feature[] = [
  { id: 1, icon: '/icon.svg', highlight: 'AI', text: 'Description', styles: 'css-classes' }
];
```

### 📁 `components.ts`
React component prop types.

**Contents:**
- `ModelSwitcherProps` - 3D model switcher
- `MacBookModelProps` - General MacBook model props
- `MacBook14Props` - 14" MacBook specific props
- `MacBook16Props` - 16" MacBook specific props
- `SectionProps` - General section component props

**Usage Example:**
```typescript
import type { ModelSwitcherProps } from '@/types';

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  // component implementation
};
```

### 📁 `common.ts`
Common types and constants used throughout the project.

**Contents:**
- `MacBookColor` - Color types
- `MacBookScale` - Scale values
- `MacBookSize` - Size options
- `Position3D` - 3D position tuple
- `Rotation3D` - 3D rotation tuple
- `TexturePath` - Texture path
- `AnimationConfig` - GSAP animation config
- `BREAKPOINTS` - Media query breakpoints
- `SCALE_VALUES` - Scale constants

**Usage Example:**
```typescript
import type { Position3D, AnimationConfig } from '@/types';
import { BREAKPOINTS, SCALE_VALUES } from '@/types';

const position: Position3D = [0, 1, 2];
const config: AnimationConfig = { duration: 1, ease: 'power1.out' };
```

## Best Practices

### 1. Type Import Usage
Use the `type` keyword for imports that are only used as types:

```typescript
// ✅ Correct
import type { Feature } from '@/types';

// ❌ Wrong (if not used at runtime)
import { Feature } from '@/types';
```

### 2. Central Export
Export and import all types through `index.ts`:

```typescript
// ✅ Correct
import type { Feature, FooterLink } from '@/types';

// ❌ Wrong
import type { Feature } from '@/types/constants';
```

### 3. Type Safety
Use explicit type definitions for arrays and objects:

```typescript
// ✅ Correct
const features: Feature[] = [...];

// ❌ Wrong
const features = [...]; // implicit any
```

### 4. Prop Types
Always define prop types for components:

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

## TypeScript Configuration

The project runs in `strict` mode (`tsconfig.app.json`):

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  }
}
```

This ensures:
- All variables must have explicitly defined types
- The `any` type should be avoided as much as possible
- Unused parameters will generate warnings

## Adding New Types

When adding a new type:

1. Identify the relevant file (store, constants, components, or common)
2. Add documentation with JSDoc
3. Export it from the `index.ts` file

**Example:**

```typescript
// src/types/components.ts
/**
 * New component props
 */
export interface NewComponentProps {
  /** Description of prop */
  title: string;
  /** Description of prop */
  onClick: () => void;
}

// src/types/index.ts
export type { NewComponentProps } from './components';
```

## Frequently Asked Questions

### Q: Why are there separate type files?
**A:** To improve code organization and categorize type definitions.

### Q: When should I use `type` vs `interface`?
**A:** 
- For object shapes: `interface` (extendable)
- For union types, primitives: `type`
- For component props: `interface` (better error messages)

### Q: Can I define props inline?
**A:** Yes, for small, non-reusable components. But generally, creating a separate interface is better.

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Zustand TypeScript Guide](https://docs.pmnd.rs/zustand/guides/typescript)
