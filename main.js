import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader'

const loader = new GLTFLoader();

const scene =  new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000)



//Renderer
const renderer =  new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement)
