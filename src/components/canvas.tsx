import React, { Component } from 'react'
import * as THREE from 'three'

interface Props {
  id: string
}

export default class Canvas extends Component<Props> {
  canvas = React.createRef()

  componentDidMount() {
    const scheme = getColorScheme()
    console.log(scheme)
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: this.canvas.current,
    })
    const [fov, aspect, near, far] = [70, 2, 0.1, 10]
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    camera.position.z = 1
    const scene = new THREE.Scene() // a container
    scene.background = new THREE.Color(scheme.background)
    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
    const material = new THREE.MeshNormalMaterial()
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    function animate() {
      const [shouldResize, container] = getCanvasDimensions(renderer.domElement)
      if (shouldResize) {
        renderer.setSize(container.width, container.height, false)
        camera.aspect = container.aspect
        camera.updateProjectionMatrix()
      }
      mesh.rotation.x += 0.01
      mesh.rotation.y += 0.02
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }

  render() {
    const { id } = this.props
    return (
      <canvas
        ref={this.canvas}
        style={{
          position: 'absolute',
          display: 'block',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
        id={id}
      />
    )
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
