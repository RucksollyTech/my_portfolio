import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import robots from "./Assets/3d/robot2.glb"


const HoverRobot = ({...props}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(robots);
    const { actions } = useAnimations(animations, ref);

    useEffect(()=>{
        actions["Scene"].play()
    },[])
    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default HoverRobot