import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Fish(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Fish.gltf')
  const { actions } = useAnimations(animations, group)
  console.log(actions)
  
  useEffect(() => {
    actions["Idle"].reset().fadeIn(0.5).play()
    return () => actions["Idle"].fadeOut(0.5)
  }, [])
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Fish">
            <skinnedMesh name="Sphere026" geometry={nodes.Sphere026.geometry} material={materials.Fish_Main} skeleton={nodes.Sphere026.skeleton} />
            <skinnedMesh name="Sphere026_1" geometry={nodes.Sphere026_1.geometry} material={materials.Fish_Secondary} skeleton={nodes.Sphere026_1.skeleton} />
            <skinnedMesh name="Sphere026_2" geometry={nodes.Sphere026_2.geometry} material={materials.Eye_Black} skeleton={nodes.Sphere026_2.skeleton} />
            <skinnedMesh name="Sphere026_3" geometry={nodes.Sphere026_3.geometry} material={materials.Eye_White} skeleton={nodes.Sphere026_3.skeleton} />
            <skinnedMesh name="Sphere026_4" geometry={nodes.Sphere026_4.geometry} material={materials.Mouth} skeleton={nodes.Sphere026_4.skeleton} />
            <skinnedMesh name="Sphere026_5" geometry={nodes.Sphere026_5.geometry} material={materials.Fish_Flaps} skeleton={nodes.Sphere026_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Fish.gltf')