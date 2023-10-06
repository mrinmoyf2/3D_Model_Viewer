import { Environment, MeshPortalMaterial, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import * as THREE from 'three'
import { Fish } from "./Fish";
import { DragonEvolved } from "./Dragon_Evolved";
import { Cactoro } from "./Cactoro";
import { Text } from "@react-three/drei";
import { Dino } from "./Dino";


export const Experience = () => {


  return (
    <>
      {/* Adding Lights */}
      <ambientLight intensity={0.5}/>
      <Environment preset="sunset"/>

      <OrbitControls />
      {/* First One: */}
      <MonsterStage 
        texture={"textures/water.jpg"}
        name="Fish King"
        color="#38adcf"  
      >
        <Dino scale={0.6} position-y={-1}/>  
      </MonsterStage>
      {/* Second One: */}
      <MonsterStage 
        texture={"textures/lava.jpg"} 
        position-x={-2.5} 
        rotation-y={Math.PI / 8}
        name="Dragon"
        color={"#df8d52"}  
      >
        <DragonEvolved scale={0.5} position-y={-1}/>  
      </MonsterStage>
      {/* Third One: */}
      <MonsterStage 
        texture={"textures/cactus.jpg"} 
        position-x={2.5} 
        rotation-y={-Math.PI / 8}
        name= "Cactoro"
        color="#739d3c"  
      >
        <Cactoro scale={0.45} position-y={-1}/>  
      </MonsterStage>
    </>
  );
};


const MonsterStage = ({children,texture,name, color,...props}) => {
  const map = useTexture(
    texture)
  return(
    <group {...props }>
      <Text 
        font="fonts/Caprasimo-Regular.ttf" 
        fontSize={0.3} 
        position={[0,-2,0.050]} 
        anchorY={"bottom"}> 
        {name}
        <meshBasicMaterial color={color} toneMapped={false}/>
      </Text>

      <RoundedBox args={[2,3,0.1]}>
          
          <MeshPortalMaterial side={THREE.DoubleSide}>
            <ambientLight intensity={4.5}/>
            <Environment preset="sunset"/>
              {children}
              <mesh>
                <sphereGeometry
                  args={[5,64,64]}
                />
                {/* Use the textures here. */}
                <meshStandardMaterial map={map} side={THREE.BackSide}/>
              </mesh>
          </MeshPortalMaterial>
      </RoundedBox>
     
    </group>
  )
}
