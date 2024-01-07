import React, { Suspense, useRef } from 'react'
import * as random from "maath/random/dist/maath-random.esm"
import { Canvas, useFrame } from '@react-three/fiber'
import { PointMaterial, Points, Preload } from '@react-three/drei'

const Star = (props) => {
    const ref =useRef()
    const sphere =  random.inSphere(new Float32Array(5000),{radius:1.2})
    useFrame((_,delta) => {
        ref.current.rotation.x -= delta/10
        ref.current.rotation.y -= delta/15
    })
    return (
        <group rotation={[0,0,Math.PI/4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props} >
                <PointMaterial 
                    transparent
                    color="#f272c8"
                    size={0.0025}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}
const Stars = ({...props}) => {
    return (
        <div className='starsBackground2'>
            <Canvas camera={{position:[0,0,1]}}>
                <Suspense fallback={null}>
                    <Star />
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Stars