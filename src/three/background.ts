import * as THREE from 'three'

export class ThreeBackground {
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  scheme: { background: string; foreground: string }
  meshes: THREE.Mesh[]

  constructor({ canvas }) {
    // get color palette
    this.scheme = getColorScheme()
    // create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    // create camera
    const [fov, aspect, near, far] = [70, 2, 0.1, 10]
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    this.camera.position.z = 1
    // create root scene
    this.scene = new THREE.Scene() // a container
    this.scene.background = new THREE.Color(this.scheme.background)
    // create test box
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    this.meshes = [mesh]
    this.scene.add(mesh)

    requestAnimationFrame(this.animate)
  }

  animate = () => {
    const [shouldResize, container] = getCanvasDimensions(
      this.renderer.domElement
    )
    if (shouldResize) {
      this.renderer.setSize(container.width, container.height, false)
      this.camera.aspect = container.aspect
      this.camera.updateProjectionMatrix()
    }
    this.meshes.map(mesh => {
      mesh.rotation.x += 0.01
      mesh.rotation.y += 0.02
    })
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate)
  }
}

function getCanvasDimensions(canvas) {
  const [width, height] = [canvas.clientWidth, canvas.clientHeight]
  const needResize = canvas.width !== width || canvas.height !== height
  const aspect = canvas.clientWidth / canvas.clientHeight
  return [needResize, { width, height, aspect }]
}

function getColorScheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? {
        background: 'black',
        foreground: 'white',
      }
    : {
        background: 'white',
        foreground: 'black',
      }
}

export default ThreeBackground
