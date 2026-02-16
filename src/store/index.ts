import { create } from "zustand";
import type { MacBookStore } from "../types";

const useMacBookStore = create<MacBookStore>((set) => ({
  color: "#2e2c2e",
  setColor: (color: string) => set({ color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale }),

  texture: "/public/videos/feature-1.mp4",
  setTexture: (texture: string) => set({ texture }),

  reset: () =>
    set({ color: "#2e2c2e", scale: 0.08, texture: "/videos/feature-1.mp4" }),
}));

export default useMacBookStore;
