// import * as THREE from "three";
// import { Water } from "three/examples/jsm/objects/Water";
// import { Sky } from "three/examples/jsm/objects/Sky";

// let container;
// let camera, scene, renderer;
// let water, sun;

// export function init() {
//   container = document.getElementById("body");

//   // Set up renderer
//   renderer = new THREE.WebGLRenderer();
//   renderer.setPixelRatio(window.devicePixelRatio);
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   container.appendChild(renderer.domElement);

//   // Set up Scene
//   const scene = new THREE.Scene();
//   const camera = new THREE.PerspectiveCamera(
//     70,
//     window.innerWidth / window.innerHeight,
//     0.1,
//     100
//   );
//   camera.position.z = 1;

//   // The lighting
//   sun = new THREE.Vector3();

//   // Water mesh
//   const waterGeo = new THREE.PlaneGeometry(1000, 1000);

//   water = new Water(waterGeo, {
//     textureWidth: 256,
//     textureHeight: 256,
//     sunDirection: new THREE.Vector3(),
//     sunColor: 0xffffff,
//     waterColor: 0x001e0f,
//     distortionScale: 3.7,
//     fog: scene.fog !== undefined,
//   });

//   water.rotation.x = -Math.PI / 2;
//   scene.add(water);

//   // Sky
//   const sky = new Sky();
//   sky.scale.setScalar(1000);
//   scene.add(sky);

//   const skyUniforms = sky.material.uniforms;
//   skyUniforms["turbidity"].value = 10;
//   skyUniforms["rayleigh"].value = 2;
//   skyUniforms["mieCoefficient"].value = 0.005;
//   skyUniforms["mieDirectionalG"].value = 0.8;

//   const parameters = {
//     elevation: 2,
//     azimuth: 180,
//   };

//   const pmremGen = new THREE.PMREMGenerator(renderer);

//   function updateSun() {
//     const phi = THREE.MathUtils.degToRad(90 - parameters.elevation);
//     const theta = THREE.MathUtils.degToRad(parameters.azimuth);

//     sun.setFromSpherical(1, phi, theta);

//     water.material.uniforms["sunDirection"].value.copy(sun).normalize();
//   }

//   updateSun();
// }

// export function animate() {
//   requestAnimationFrame(animate);

//   //const time = performance.now() * 0.001;

//   water.material.uniforms["time"].value += 1.0 / 60.0;
//   renderer.render(scene, camera);
// }

// //create water effects
