import React, { useRef } from 'react'
import { Html } from '@react-three/drei'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Planet1Map from '../../../server/public/textures/Planet1.jpeg'
import { useFrame, useLoader } from '@react-three/fiber'
import '../../../server/public/main.css'
// import Info from '../Info'

export default function Planet({ position, args }) {
  const colorMap = useLoader(TextureLoader, Planet1Map)
  const planet1Ref = useRef()

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime()
    planet1Ref.current.rotation.y = elapsedTime / 1.4
  })
  return (
    <mesh ref={planet1Ref} position={position}>
      <sphereGeometry args={args} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}
