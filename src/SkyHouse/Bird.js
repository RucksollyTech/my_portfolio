import React, { useEffect, useRef, useState } from 'react'
import bird from "./Assets/3d/bird.glb"
import { useAnimations, useGLTF } from '@react-three/drei'

const Bird = ({isRotating,setIsRotatingCheck,isRotatingCheck,scale,...props}) => {
    const ref = useRef()
    const { scene, animations} = useGLTF(bird)
    const {actions} = useAnimations(animations,ref)
    const [flight,setFlight] = useState(false)
    const [scalee,setScale] = useState([0,0,0])
    useEffect(()=>{
        try{
            if(!flight && isRotating){
                setScale(scale)
                actions["05_Colibri_Bird.001Action"].play()
                setFlight(true)
                setTimeout(() => {
                    setScale([3.5,3.5,3.5])
                }, 25000);
                setTimeout(() => {
                    setScale([4,4,4])
                }, 25500);
                setTimeout(() => {
                    setScale([5,5,5])
                }, 26000);
                setTimeout(() => {
                    if(actions && actions["05_Colibri_Bird.001Action"]){
                        setScale([0,0,0])
                        actions["05_Colibri_Bird.001Action"].stop()
                        setIsRotatingCheck(false)
                    }
                }, 28000);
            }
        }catch{}
        
    },[actions,isRotating])

    return (
        <mesh scale={scalee} {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Bird