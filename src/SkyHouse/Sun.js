import sun from "./Assets/3d/sun.glb"
import { useGLTF } from '@react-three/drei'

const Sun = ({...props}) => {
    const { scene} = useGLTF(sun)
    return (
        <mesh {...props}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Sun