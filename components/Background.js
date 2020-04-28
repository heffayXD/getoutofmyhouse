import * as THREE from 'three'
import { throttle } from 'lodash'
import { useEffect, useRef } from 'react'

const Background = props => {
  const containerRef = useRef(null)
  var camera, scene, renderer
  var geometry, material, mesh, mouse

  useEffect(() => {
    const init = () => {
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10)
      camera.position.z = 1
      mouse = new THREE.Vector2()

      document.addEventListener('mousemove', throttle(e => {
        mouse.set(
          (e.clientX / window.innerWidth - 0.5) / 2,
          (e.clientY / window.innerHeight - 0.5) / 2
        )
      }, 20))

      scene = new THREE.Scene()

      renderer = new THREE.WebGLRenderer({ antialias: false })
      renderer.setSize(window.innerWidth, window.innerHeight)
      containerRef.current.appendChild(renderer.domElement)

      var loader = new THREE.TextureLoader()

      material = new THREE.MeshBasicMaterial({
        map: loader.load('/static/images/hero.jpg', (texture) => {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping
          texture.offset.set(0, 0)
          texture.repeat.set(3, 3)
        })
      })

      geometry = new THREE.PlaneBufferGeometry(6, 4.5)
      mesh = new THREE.Mesh(geometry, material)

      scene.add(mesh)

      var light = new THREE.PointLight(0xffffff, 1, 0)
      light.position.set(1, 1, 10)
      scene.add(light)
    }

    const animate = () => {
      // requestAnimationFrame(animate) // eslint-disable-line

      camera.rotation.x = mouse.y * 2 / Math.PI
      camera.rotation.y = mouse.x * 2 / Math.PI

      renderer.render(scene, camera)

      setTimeout(animate, 20) // ?!?! this is more performant than request animation frame lol
    }

    setTimeout(() => {
      init()
      animate()
    }, 0)
  }, [])

  return (
    <div className='background' ref={containerRef}>
      <div className='block-1' />
      <div className='block-2' />
    </div>
  )
}

export default Background
