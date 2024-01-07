import React, { useEffect, useRef } from 'react'
import drone from "./Assets/3d/drone.glb"
import { useAnimations, useGLTF } from '@react-three/drei'


const Drone = ({isRotating,...props}) => {
    const ref = useRef()
    // Since this is a premitive model(the drone) it comes with a
    // Prebuilt animation that we can use
    const { scene, animations} = useGLTF(drone)
    // here we are extracting this animation into actions
    const {actions} = useAnimations(animations,ref)

    useEffect(()=>{
        // this to play and stop those prebuilt animations and rotating and not rotating respectively
        try{
            isRotating ? actions["Animation"].play() : actions["Animation"].stop()
        }catch{}
    },[actions,isRotating])

    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Drone