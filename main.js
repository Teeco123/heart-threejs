import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

const loader = new GLTFLoader();

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//Scene
scene.background = new THREE.Color(0xbfe3dd)

//camera
camera.position.set(0, 0, 10)

//Loading Heart
loader.load("/heart.glb", function(gltf) {
  let model = gltf.scene;

  model.position.set(0, 0, 0)
  model.scale.set(1, 1, 1)

  scene.add(model)

}, undefined, function(error) {
  console.error(error);
})

//Lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

//Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

function renderScene() {
  renderer.render(scene, camera)
}

renderer.setAnimationLoop(renderScene)
