import { useEffect, useRef, useState } from "react"
import light from "./Assets/3d/light_switch.glb"
import { useAnimations, useGLTF } from '@react-three/drei'


const LightSwitch = ({activateSpace,...props}) => {
    const ref = useRef()

    const { scene,animations} = useGLTF(light)
    const {actions} = useAnimations(animations,ref)
    const [firstTry,setFirstTry] = useState(true)
    useEffect(()=>{
        try{
            if(!firstTry){
                actions["LightSwitch.001|TurnOn/Off"].play()
                setTimeout(() => {
                    if( actions && actions["LightSwitch.001|TurnOn/Off"]){
                        actions["LightSwitch.001|TurnOn/Off"].stop()
                    }
                }, 1250);
            }
        }catch{}
        setFirstTry(false)
    },[activateSpace])
    return (
        <mesh {...props} ref={ref} position={[-0.7,0,0]} scale={20} >
            <primitive object={scene} />
        </mesh>
    )
}

export default LightSwitch