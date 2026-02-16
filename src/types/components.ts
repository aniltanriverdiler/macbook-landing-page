// Component Props Types
// Type definitions for React component props

import type { ReactNode } from "react";

// ModelSwitcher component props
export interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}

// MacBook 3D model component props
export interface MacBookModelProps {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

// MacBook14 3D model component props
export interface MacBook14Props extends MacBookModelProps {}

// MacBook16 3D model component props
export interface MacBook16Props extends MacBookModelProps {
  /** Optional additional props specific to MacBook 16" model */
}

// Common section props for layout components
export interface SectionProps {
  id?: string;
  className?: string;
  children?: ReactNode;
}
