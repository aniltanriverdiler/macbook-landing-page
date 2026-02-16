// Common Types
// Shared type definitions used across the application

// Color values used for MacBook models
export type MacBookColor = "#adb5bd" | "#2e2c2e" | string;

// Scale values for MacBook sizes
export type MacBookScale = 0.06 | 0.08 | number;

// Size options for MacBook models
export type MacBookSize = "14" | "16";

// Position tuple for 3D objects [x, y, z]
export type Position3D = [number, number, number];

// Rotation tuple for 3D objects [x, y, z] in radians
export type Rotation3D = [number, number, number];

// Video/texture path for MacBook screen
export type TexturePath = string;

// GSAP animation configuration
export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  opacity?: number;
  y?: number;
  x?: number;
}

// Media query breakpoints
export const BREAKPOINTS = {
  mobile: "(max-width: 1024px)",
  desktop: "(min-width: 1025px)",
} as const;

// Default scale values for different viewport sizes
export const SCALE_VALUES = {
  large: {
    desktop: 0.08,
    mobile: 0.05,
  },
  small: {
    desktop: 0.06,
    mobile: 0.03,
  },
} as const;
