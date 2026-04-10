import * as THREE from "three";

const setLighting = (scene: THREE.Scene) => {
  const ambient = new THREE.AmbientLight(0xffffff, 0.2);
  const point = new THREE.PointLight(0xffffff, 0.2);
  point.position.set(0, 10, 10);
  scene.add(ambient, point);

  return {
    turnOnLights: () => {
      ambient.intensity = 0.8;
      point.intensity = 1;
    },
    setPointLight: (screenLight: THREE.Object3D | null) => {
      if (screenLight) {
        point.position.copy(screenLight.position);
      }
    },
  };
};

export default setLighting;
