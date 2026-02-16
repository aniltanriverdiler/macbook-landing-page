// Types Index
// Central export point for all TypeScript type definitions

// Store Types
export type {
  MacBookStoreState,
  MacBookStoreActions,
  MacBookStore,
} from "./store";

// Constants Types
export type {
  NavLink,
  PerformanceImage,
  PerformanceImagePosition,
  Feature,
  FeatureSequence,
  FooterLink,
} from "./constants";

// Component Props Types
export type {
  ModelSwitcherProps,
  MacBookModelProps,
  MacBook14Props,
  MacBook16Props,
  SectionProps,
} from "./components";

// Common Types
export type {
  MacBookColor,
  MacBookScale,
  MacBookSize,
  Position3D,
  Rotation3D,
  TexturePath,
  AnimationConfig,
} from "./common";

export { BREAKPOINTS, SCALE_VALUES } from "./common";
