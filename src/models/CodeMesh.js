import { TextGeometry, MeshBasicMaterial, Mesh, Vector3 } from 'three'
import useExampleCode from '../helpers/useExampleCode'

class CodeMesh {
  constructor (font) {
    this.fallSpeed = 0.02
    this.fadeSpeed = 0.02
    this.fadeOutSpeed = 0.1
    this.text = useExampleCode()
    this.createMesh(font)
    this.reset()
  }

  reset () {
    this.fading = false
    this.mesh.position.x = Math.floor(Math.random() * 30)
    this.mesh.position.y = Math.floor(Math.random() * 5) + 5
    this.mesh.position.z = Math.floor(Math.random() * 5)
    this.mesh.material.opacity = 0
  }

  createMesh (font) {
    const geometry = new TextGeometry(this.text, { font, size: 0.3, height: 0.01, curveSegments: 10 })

    const material = new MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true
    })
    this.mesh = new Mesh(geometry, material)
  }

  changeY (value) {
    this.mesh.position.y += value
  }

  animateFall () {
    this.mesh.position.y -= this.fallSpeed

    if (this.mesh.material.opacity !== 1) {
      this.mesh.material.opacity += this.fadeSpeed
    }
  }

  animateFade () {
    if (this.mesh.material.opacity <= 0) {
      this.reset()
    } else {
      this.mesh.position.y -= this.fallSpeed
      this.mesh.material.opacity -= this.fadeOutSpeed
    }
  }

  getPosition () {
    const { x, y, z } = this.mesh.position

    return new Vector3(x, y, z)
  }

  beginFade () {
    this.fading = true
    this.mesh.material.opacity -= this.fadeOutSpeed
  }
}

export default CodeMesh
