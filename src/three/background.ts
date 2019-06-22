import * as THREE from 'three'
import anime from 'animejs'

interface ColorScheme {
  background: string
  foreground: string
}

export class ThreeBackground {
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  scene: THREE.Scene
  scheme: { background: string; foreground: string }
  nodes: GridNode[]
  mouseX: number
  mouseY: number

  constructor({ canvas }) {
    // get color palette
    this.scheme = getColorScheme()
    // create renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, canvas })
    // create camera
    const [fov, aspect, near, far] = [35, 2, 0.1, 100]
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    this.camera.position.z = 10
    // create root scene
    this.scene = new THREE.Scene() // a container
    this.scene.background = new THREE.Color(this.scheme.background)
    // create grid
    const square = 10
    const length = Math.pow(square, 2)
    this.nodes = Array.from({ length }).map(
      (_, idx) =>
        new GridNode(
          {
            x: idx % square,
            y: (Math.floor(idx / square) % square) - (square - 1) / 2,
            z: 0,
          },
          this.scheme.foreground
        )
    )
    this.grid = new THREE.Object3D()
    this.grid.position.y = 3
    this.nodes.map(node => this.grid.add(node.mesh))
    this.scene.add(this.grid)
    this.scene.position.x = (square - 1) / -2
    this.scene.position.y = (square - 1) / -2
    const dir_light = new THREE.DirectionalLight(0xffffff, 0.5)
    dir_light.position.set(-1, 2, 4)
    this.scene.add(dir_light)
    const ambient_light = new THREE.AmbientLight(0xffffff, 0.5)
    ambient_light.position.set(-1, 2, 4)
    this.scene.add(ambient_light)
    this.scene.fog = new THREE.Fog(0xffffff, 0, 50)
    this.mouseX = 0
    this.mouseY = 0
    document.addEventListener('mousemove', this.onMouseMove)
    requestAnimationFrame(this.animate)
    anime({
      targets: this.grid.rotation,
      x: 90 * (Math.PI / 180),
      duration: 3000,
      easing: 'easeInOutExpo',
    })
  }

  onMouseMove = e => ([this.mouseX, this.mouseY] = [e.clientX, e.clientY])

  animate = () => {
    const [resize, view] = getCanvasDimensions(this.renderer.domElement)
    if (resize) {
      this.renderer.setSize(view.width, view.height, false)
      this.camera.aspect = view.aspect
      this.camera.updateProjectionMatrix()
    }
    // this.nodes.map(node => node.update())
    this.scene.rotation.x = (this.mouseY / window.innerHeight - 0.5) / 25
    this.scene.rotation.y = (this.mouseX / window.innerWidth - 0.5) / 25
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate)
  }
}

class GridNode {
  mesh: THREE.Mesh
  constructor(
    position: { x: number; y: number; z: number },
    color: string,
    size = 0.02
  ) {
    const geometry = new THREE.IcosahedronBufferGeometry(size)
    const material = new THREE.MeshLambertMaterial({ color })
    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.x = position.x
    mesh.position.y = position.y
    mesh.position.z = position.z
    this.mesh = mesh
  }

  update() {
    this.mesh.rotation.x += 0.01
    this.mesh.rotation.y += 0.02
  }
}

function getCanvasDimensions(canvas) {
  const [width, height] = [canvas.clientWidth, canvas.clientHeight]
  const needResize = canvas.width !== width || canvas.height !== height
  const aspect = canvas.clientWidth / canvas.clientHeight
  return [needResize, { width, height, aspect }]
}

function getColorScheme(): ColorScheme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? {
        background: 'black',
        foreground: '#0f0f0f',
      }
    : {
        background: '#ffffff',
        foreground: '#fefefe',
      }
}

export default ThreeBackground
