import * as THREE from "three";

export const handleMouseMove = (
  event: MouseEvent,
  setMouse: (x: number, y: number) => void
) => {
  const x = (event.clientX / window.innerWidth) * 2 - 1;
  const y = -(event.clientY / window.innerHeight) * 2 + 1;
  setMouse(x, y);
};

export const handleTouchMove = (
  event: TouchEvent,
  setMouse: (x: number, y: number) => void
) => {
  const touch = event.touches[0];
  if (!touch) return;
  const x = (touch.clientX / window.innerWidth) * 2 - 1;
  const y = -(touch.clientY / window.innerHeight) * 2 + 1;
  setMouse(x, y);
};

export const handleTouchEnd = (
  resetMouse: (x: number, y: number, interpolationX: number, interpolationY: number) => void
) => {
  resetMouse(0, 0, 0.1, 0.2);
};

export const handleHeadRotation = (
  bone: THREE.Object3D,
  mouseX: number,
  mouseY: number,
  interpolationX: number,
  interpolationY: number,
  lerp: (x: number, y: number, a: number) => number
) => {
  bone.rotation.y = lerp(bone.rotation.y, mouseX * 0.3, interpolationX);
  bone.rotation.x = lerp(bone.rotation.x, mouseY * 0.15, interpolationY);
};
