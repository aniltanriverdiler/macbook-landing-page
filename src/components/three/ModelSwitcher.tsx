import { useRef, useMemo } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import type { Group, Mesh } from "three";

import MacBookModel16 from "../models/MacBook16.js";
import MacBookModel14 from "../models/MacBook14.js";
import { useGSAP } from "@gsap/react";
import type { ModelSwitcherProps } from "../../types";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

// Fade Meshes
const fadeMeshes = (group: Group | null, opacity: number): void => {
  if (!group) return;

  group.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      if (mesh.material && "transparent" in mesh.material) {
        mesh.material.transparent = true;
        gsap.to(mesh.material, { opacity, duration: ANIMATION_DURATION });
      }
    }
  });
};

// Move Group
const moveGroup = (group: Group | null, x: number): void => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

// Check if the model is visible
const ModelSwitcher = ({ scale, isMobile }: ModelSwitcherProps) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const smallMacBookRef = useRef<Group>(null);
  const largeMacBookRef = useRef<Group>(null);

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  // Use GSAP to animate the models
  useGSAP(() => {
    if (showLargeMacbook) {
      moveGroup(smallMacBookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacBookRef.current, 0);

      fadeMeshes(smallMacBookRef.current, 0);
      fadeMeshes(largeMacBookRef.current, 1);
    } else {
      moveGroup(smallMacBookRef.current, 0);
      moveGroup(largeMacBookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacBookRef.current, 1);
      fadeMeshes(largeMacBookRef.current, 0);
    }
  }, [scale]);

  const controlsConfig = useMemo(
    () => ({
      snap: true,
      speed: 1,
      zoom: 1,
      azimuth: [-Infinity, Infinity] as [number, number],
      config: { mass: 1, tension: 0, friction: 26 },
    }),
    [],
  );

  return (
    <>
      {/* 16" MacBook */}
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      {/* 14" MacBook */}
      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;
