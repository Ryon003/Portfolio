import * as THREE from "three";
import type { RefObject } from "react";

const handleResize = (
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: RefObject<HTMLDivElement>,
  _character: THREE.Object3D
) => {
  if (!canvasDiv.current) return;
  const rect = canvasDiv.current.getBoundingClientRect();
  renderer.setSize(rect.width, rect.height);
  camera.aspect = rect.width / rect.height;
  camera.updateProjectionMatrix();
};

export default handleResize;
