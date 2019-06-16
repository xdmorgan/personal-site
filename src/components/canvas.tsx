import React, { Component } from 'react'
import ThreeBackground from '../three/background'

interface Props {
  id: string
}

export default class Canvas extends Component<Props> {
  canvas = React.createRef()

  componentDidMount() {
    new ThreeBackground({ canvas: this.canvas.current })
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
