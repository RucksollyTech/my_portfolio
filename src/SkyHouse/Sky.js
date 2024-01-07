import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import skyScene from "./Assets/3d/sky.glb"
import { useFrame } from '@react-three/fiber'


const Sky = ({isRotating}) => {
    const sky = useGLTF(skyScene)
    const skyRef = useRef()

    useFrame((_,delta)=>{
        // this is to make the sky as we rotate  and it should move at
        // a speed equivalent to 0.025 the speed our animation is on
        if(isRotating){
            try{
                skyRef.current.rotation.y += 0.15 * delta
            }catch(e){}
        }
    })
    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene}/>
        </mesh>
    )
}

export default Sky