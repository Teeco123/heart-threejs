import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls'
import { AsciiEffect } from 'three/addons/effects/AsciiEffect';

let model

//Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(255, 255, 255)

//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 0, 10)

//Renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);

//Loading Heart
const loader = new GLTFLoader();

loader.load("/heart.glb", function(gltf) {
  model = gltf.scene;

  model.position.set(0, 0, 0)
  model.scale.set(1, 1, 1)

  scene.add(model)

}, undefined, function(error) {
  console.error(error);
})

//Lights
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xffffff, 3, 0, 0)
pointLight1.position.set(10, 10, 10);
scene.add(pointLight1)

const pointLight2 = new THREE.PointLight(0xffffff, 1, 0, 0)
pointLight2.position.set(-10, -10, -10);
scene.add(pointLight2)

//Effects
const ascii = new AsciiEffect(renderer, ' .:-+*=%@#')
ascii.setSize(window.innerWidth, window.innerHeight)
ascii.domElement.style.color = "red"
ascii.domElement.style.backgroundColor = "black"
document.body.appendChild(ascii.domElement)

//controls
const controls = new OrbitControls(camera, ascii.domElement)
controls.target.set(0, 0.5, 0)
controls.update()
controls.enablePan = false
controls.enambleDamping = true;

function renderScene() {

  controls.update()

  ascii.render(scene, camera)
}

renderer.setAnimationLoop(renderScene)
