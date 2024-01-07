import earth1 from "./Assets/3d/earth1.glb"
import { useGLTF } from '@react-three/drei'


const Earth1 = ({...props}) => {
    const { scene} = useGLTF(earth1)
    
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Earth1