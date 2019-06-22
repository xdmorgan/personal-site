import * as THREE from 'three'

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
    const [fov, aspect, near, far] = [70, 2, 0.1, 50]
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    this.camera.position.z = 12
    // create root scene
    this.scene = new THREE.Scene() // a container
    this.scene.background = new THREE.Color(this.scheme.background)
    // create grid
    const cube = 10
    const length = Math.pow(cube, 3)
    this.nodes = Array.from({ length }).map(
      (_, idx) =>
        new GridNode(
          {
            x: idx % cube,
            y: Math.floor(idx / 10) % cube,
            z: Math.floor(idx / 100) % cube,
          },
          this.scheme.foreground
        )
    )
    this.nodes.map(node => this.scene.add(node.mesh))
    this.scene.position.x = (cube - 1) / -2
    this.scene.position.y = (cube - 1) / -2
    const dir_light = new THREE.DirectionalLight(0xffffff, 0.5)
    dir_light.position.set(-1, 2, 4)
    this.scene.add(dir_light)
    const ambient_light = new THREE.AmbientLight(0xffffff, 0.5)
    ambient_light.position.set(-1, 2, 4)
    this.scene.add(ambient_light)
    ambient_light.position.set(-1, 2, 4)
    this.scene.add(ambient_light)
    this.scene.fog = new THREE.Fog(0xffffff, -1, 10)
    this.mouseX = 0
    this.mouseY = 0

    document.addEventListener('mousemove', this.onMouseMove)
    requestAnimationFrame(this.animate)
  }

  onMouseMove = e => ([this.mouseX, this.mouseY] = [e.clientX, e.clientY])

  animate = () => {
    const [shouldResize, container] = getCanvasDimensions(
      this.renderer.domElement
    )
    if (shouldResize) {
      this.renderer.setSize(container.width, container.height, false)
      this.camera.aspect = container.aspect
      this.camera.updateProjectionMatrix()
    }
    this.nodes.map(node => node.update())
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
