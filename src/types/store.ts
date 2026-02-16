// Store Types
// Type definitions for Zustand store state and actions

// MacBook store state interface
export interface MacBookStoreState {
  color: string;
  scale: number;
  texture: string;
}

// MacBook store actions interface
export interface MacBookStoreActions {
  setColor: (color: string) => void;
  setScale: (scale: number) => void;
  setTexture: (texture: string) => void;
  reset: () => void;
}

// Complete MacBook store type combining state and actions
export type MacBookStore = MacBookStoreState & MacBookStoreActions;
