import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Dino(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/Dino.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    actions["Idle"].reset().fadeIn(0.5).play()
    return () => actions["Idle"].fadeOut(0.5)
  }, [])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Root} />
          <group name="Dino">
            <skinnedMesh name="Cube081" geometry={nodes.Cube081.geometry} material={materials.Dino_Main} skeleton={nodes.Cube081.skeleton} />
            <skinnedMesh name="Cube081_1" geometry={nodes.Cube081_1.geometry} material={materials.Dino_Secondary} skeleton={nodes.Cube081_1.skeleton} />
            <skinnedMesh name="Cube081_2" geometry={nodes.Cube081_2.geometry} material={materials.Eye_Black} skeleton={nodes.Cube081_2.skeleton} />
            <skinnedMesh name="Cube081_3" geometry={nodes.Cube081_3.geometry} material={materials.Eye_White} skeleton={nodes.Cube081_3.skeleton} />
            <skinnedMesh name="Cube081_4" geometry={nodes.Cube081_4.geometry} material={materials.Dino_Teeth} skeleton={nodes.Cube081_4.skeleton} />
            <skinnedMesh name="Cube081_5" geometry={nodes.Cube081_5.geometry} material={materials.Dino_Tongue} skeleton={nodes.Cube081_5.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Dino.gltf')
