import type { GLTF } from "three-stdlib";
import * as THREE from "three";

const setAnimations = (gltf: GLTF) => {
  const mixer = new THREE.AnimationMixer(gltf.scene);
  const clip = gltf.animations[0];
  if (clip) {
    const action = mixer.clipAction(clip);
    action.play();
  }

  return {
    mixer,
    hover: () => () => undefined,
    startIntro: () => undefined,
  };
};

export default setAnimations;
