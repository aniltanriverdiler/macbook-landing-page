// Constants Types
// Type definitions for constant data structures used throughout the app

// Navigation link item
export interface NavLink {
  label: string;
}

// Performance image item
export interface PerformanceImage {
  id: string;
  src: string;
  alt?: string;
}

// Position configuration for performance images
export interface PerformanceImagePosition {
  id: string;
  left?: number;
  right?: number;
  bottom?: number;
  transform?: string;
}

// Feature item with icon, text, and styling
export interface Feature {
  id: number;
  icon: string;
  highlight: string;
  text: string;
  styles: string;
}

// Feature sequence item for video transitions
export interface FeatureSequence {
  videoPath: string;
  boxClass: string;
  delay: number;
}

// Footer link item
export interface FooterLink {
  label: string;
  link: string;
}
