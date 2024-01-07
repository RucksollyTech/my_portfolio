import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import robot from "./Assets/3d/robot.glb"

const Robot = ({inPlayAnimation, ...props}) => {
    const ref = useRef();
    const { scene, animations } = useGLTF(robot);
    const { actions } = useAnimations(animations, ref);

    useEffect(()=>{
        try{
            Object.values(actions).forEach(action=>action.stop())
            if(actions[inPlayAnimation]){
                actions[inPlayAnimation].play()
            }
        }catch{}
        
    },[actions,inPlayAnimation])
    return (
        <mesh {...props} ref={ref}>
            <primitive object={scene} />
        </mesh>
    );
}

export default Robot