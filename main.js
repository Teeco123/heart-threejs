import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'
import { OrbitControls } from 'three/addons/controls/OrbitControls'

let model, loader, scene, camera, renderer;


loader = new GLTFLoader();

scene = new THREE.Scene()
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

//Scene
scene.background = new THREE.Color(0xbfe3dd)

//camera
camera.position.set(0, 0, 10)

//Renderer
renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement)

//controls
const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(0, 0.5, 0)
controls.update()
controls.enablePan = false
controls.enambleDamping = true;

//Loading Heart
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


function renderScene() {

  controls.update()

  renderer.render(scene, camera)
}

renderer.setAnimationLoop(renderScene)
