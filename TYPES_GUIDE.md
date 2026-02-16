# MacBook Landing Page - TypeScript Type System Guide

## 📋 İçindekiler

1. [Genel Bakış](#genel-bakış)
2. [Proje Mimarisi](#proje-mimarisi)
3. [Tip Tanımlamaları](#tip-tanımlamaları)
4. [Kullanım Örnekleri](#kullanım-örnekleri)
5. [Best Practices](#best-practices)

---

## Genel Bakış

Bu proje, TypeScript ile tip güvenli bir MacBook landing page uygulamasıdır. Aşağıdaki teknolojiler kullanılmaktadır:

- **React 19** - UI library
- **TypeScript 5.9** - Type safety
- **Three.js + React Three Fiber** - 3D rendering
- **Zustand** - State management
- **GSAP** - Animations
- **Tailwind CSS** - Styling

## Proje Mimarisi

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

## Tip Tanımlamaları

### 1. Store Types (`src/types/store.ts`)

#### MacBookStoreState
Store'un state kısmını tanımlar:

```typescript
export interface MacBookStoreState {
  color: string;        // Seçili renk
  scale: number;        // Model boyutu (0.06 veya 0.08)
  texture: string;      // Ekran texture yolu
}
```

#### MacBookStoreActions
Store action'larını tanımlar:

```typescript
export interface MacBookStoreActions {
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
}
```

#### MacBookStore
Tam store tipini tanımlar (State + Actions):

```typescript
export type MacBookStore = MacBookStoreState & MacBookStoreActions;
```

**Kullanım:**
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
Navigasyon menü öğeleri için:

```typescript
export interface NavLink {
  label: string;
}
```

#### PerformanceImage
Performans bölümündeki görseller için:

```typescript
export interface PerformanceImage {
  id: string;
  src: string;
  alt?: string;
}
```

#### PerformanceImagePosition
Görsellerin pozisyon bilgileri için:

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
Özellik kartları için:

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
Video geçişleri için:

```typescript
export interface FeatureSequence {
  videoPath: string;
  boxClass: string;
  delay: number;
}
```

#### FooterLink
Footer linkleri için:

```typescript
export interface FooterLink {
  label: string;
  link: string;
}
```

**Kullanım:**
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
3D model değiştirici component için:

```typescript
export interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}
```

#### MacBookModelProps
Genel MacBook 3D model props:

```typescript
export interface MacBookModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}
```

#### MacBook14Props & MacBook16Props
14" ve 16" model için özel props:

```typescript
export interface MacBook14Props extends MacBookModelProps {}
export interface MacBook16Props extends MacBookModelProps {}
```

**Kullanım:**
```typescript
import type { ModelSwitcherProps } from './types';

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  // Component logic
};
```

---

### 4. Common Types (`src/types/common.ts`)

#### MacBookColor, MacBookScale, MacBookSize
Temel tipler:

```typescript
export type MacBookColor = "#adb5bd" | "#2e2c2e" | string;
export type MacBookScale = 0.06 | 0.08 | number;
export type MacBookSize = "14" | "16";
```

#### Position3D & Rotation3D
3D pozisyon ve rotasyon için:

```typescript
export type Position3D = [number, number, number];
export type Rotation3D = [number, number, number];
```

#### AnimationConfig
GSAP animasyonları için:

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

#### Sabitler

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

**Kullanım:**
```typescript
import type { Position3D, AnimationConfig } from './types';
import { BREAKPOINTS, SCALE_VALUES } from './types';

const position: Position3D = [0, 1, 2];
const animConfig: AnimationConfig = {
  duration: 1,
  ease: "power1.out"
};

// Sabitler
const isMobile = useMediaQuery({ query: BREAKPOINTS.mobile });
const scale = isMobile ? SCALE_VALUES.large.mobile : SCALE_VALUES.large.desktop;
```

---

## Kullanım Örnekleri

### Örnek 1: Zustand Store Kullanımı

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

### Örnek 2: Component Props

```typescript
// Component tanımı
import type { ModelSwitcherProps } from "../types";

const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  // TypeScript artık scale ve isMobile'ın tiplerini biliyor
  console.log(scale); // number
  console.log(isMobile); // boolean
  
  return <group>...</group>;
};

// Component kullanımı
<ModelSwitcher scale={0.08} isMobile={false} />
```

### Örnek 3: Constants ile Çalışma

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
  // TypeScript her property'nin doğru tipte olduğunu kontrol eder
];

const navLinks: NavLink[] = [
  { label: "Store" },
  { label: "Mac" },
  // Her item'da label olması zorunlu
];
```

### Örnek 4: 3D Model Props

```typescript
import type { MacBookModelProps } from "../types";

function MacBookModel({ scale = 0.08, position = [0, 0, 0], rotation }: MacBookModelProps) {
  // scale, position ve rotation'ın tipleri bellialso optional
  
  return (
    <group position={position} rotation={rotation} scale={scale}>
      {/* 3D content */}
    </group>
  );
}

// Kullanım
<MacBookModel scale={0.06} position={[0, -1, 0]} />
<MacBookModel /> // Defaults kullanılır
```

### Örnek 5: Animation Config

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

// Kullanım
animateElement(myElement, {
  duration: 2,
  opacity: 1,
  y: 0,
  ease: "power2.inOut"
});
```

---

## Best Practices

### ✅ DO (Yapılması Gerekenler)

1. **Type Import Kullan**
   ```typescript
   // ✅ Doğru
   import type { Feature } from './types';
   
   // ❌ Yanlış
   import { Feature } from './types';
   ```

2. **Explicit Type Annotations**
   ```typescript
   // ✅ Doğru
   const features: Feature[] = [...];
   
   // ❌ Yanlış
   const features = [...]; // implicit any
   ```

3. **Component Props Interface**
   ```typescript
   // ✅ Doğru
   interface MyComponentProps {
     title: string;
     count: number;
   }
   
   const MyComponent = ({ title, count }: MyComponentProps) => { ... };
   
   // ❌ Yanlış
   const MyComponent = ({ title, count }) => { ... }; // implicit any
   ```

4. **Merkezi Type Export**
   ```typescript
   // ✅ Doğru
   import type { Feature, FooterLink } from '@/types';
   
   // ❌ Yanlış
   import type { Feature } from '@/types/constants';
   ```

5. **Optional Props Belirt**
   ```typescript
   // ✅ Doğru
   interface Props {
     required: string;
     optional?: number;
   }
   
   // ❌ Yanlış - her şeyi optional yapmak
   interface Props {
     required?: string;
     optional?: number;
   }
   ```

### ❌ DON'T (Yapılmaması Gerekenler)

1. **Any Kullanma**
   ```typescript
   // ❌ Kaçının
   const data: any = { ... };
   
   // ✅ Bunun yerine proper type kullanın
   const data: Feature = { ... };
   ```

2. **Type Assertions Aşırı Kullanımı**
   ```typescript
   // ❌ Aşırı assertion
   const value = (data as any).property;
   
   // ✅ Proper typing
   interface Data {
     property: string;
   }
   const value = data.property;
   ```

3. **İnline Type Definitions**
   ```typescript
   // ❌ Inline tip tanımları
   const Component = (props: { name: string; age: number }) => { ... };
   
   // ✅ Ayrı interface
   interface ComponentProps {
     name: string;
     age: number;
   }
   const Component = (props: ComponentProps) => { ... };
   ```

---

## TypeScript Konfigürasyonu

Proje `strict` mode ile çalışmaktadır:

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

Bu, maksimum tip güvenliği sağlar ve potansiyel hataları derleme zamanında yakalar.

---

## Yararlı Linkler

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Zustand TypeScript Guide](https://docs.pmnd.rs/zustand/guides/typescript)
- [Three.js TypeScript](https://threejs.org/docs/#manual/en/introduction/Typescript)

---

## Yardım ve Destek

Tip tanımlamaları hakkında sorularınız için:
1. `src/types/README.md` dosyasına bakın
2. Mevcut kullanım örneklerini inceleyin
3. TypeScript compiler hata mesajlarını okuyun (genellikle çok yardımcıdır)

---

**Son Güncelleme:** 2026-02-16
