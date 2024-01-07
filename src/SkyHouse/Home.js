import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import Loader from '../Loader';
import Island from './Island';
import HomeInfo from '../HomeInfo';
import Sky from './Sky';
import Drone from './Drone';
import Bird from './Bird';
import NavBar from './NavBar';

const Home = () => {
    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandScreenSize = () => {
        let screenScale
        let screenPosition = [0,-1,1]
        // let rotation = [-30,4.7,0]
        // const rotation = [-1.37,-0.08, 0];
        const rotation=[-Math.PI / 2 + 0.1, 0, 0]


        if(window.innerWidth < 768){
            screenScale = [0.0108,0.0108,0.0108]
        }else{
            screenScale = [0.012,0.012,0.012]
        }
        return [screenScale,screenPosition,rotation]
    }
    const [islandScale,islandPosition,islandRotation] = adjustIslandScreenSize()

    const adjustDroneScreenSize = () => {
        let screenScale,screenPosition
        if(window.innerWidth < 768){
            screenScale = [0.4,0.4,0.4]
            // screenPosition=[0,0,2.5]
            screenPosition=[0,-1,3.2]
        }else{
            screenScale = [0.5,0.5,0.5]
            screenPosition=[0,-1,3.2]
            // screenPosition=[0,0,2.5]

        }
        return [screenScale,screenPosition]
    }
    const [droneScale,dronePosition] = adjustDroneScreenSize()

    const adjustBirdScreenSize = () => {
        let screenScale
        let screenPosition =[0,0,2.7]
        if(window.innerWidth < 768){
            screenScale = [2,2,2]
        }else{
            screenScale = [3,3,3]
        }
        return [screenScale,screenPosition]
    }
    const [birdScale,birdPosition] = adjustBirdScreenSize()
    const [isRotatingCheck, setIsRotatingCheck] = useState(false);
    const [holder, setIsHolder] = useState(true);
    useEffect(()=>{
        if(holder && isRotating){
            setIsRotatingCheck(true)
            setIsHolder(false);
        }
    },[isRotating])
    
    return (
        <div className='canvasContainer'>
            <NavBar />    
            <div className="popUps">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`canvasMain ${isRotating ? 'cursorGrabbing' : 'cursorGrab' }`}
                camera={{near: 0.1, far : 1000}} 
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1,1,1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight 
                        skyColor="#b1e1ff" 
                        groundColor="#000000" 
                        intensity={1}
                    />
                    <Bird 
                        isRotating={isRotating}
                        scale={birdScale}
                        position={birdPosition}
                        setIsRotatingCheck={setIsRotatingCheck}
                        isRotatingCheck ={isRotatingCheck}
                    />
                    <Sky isRotating={isRotating} />
                    <Island 
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        scale={islandScale}
                        position={islandPosition}
                        rotation={islandRotation ? islandRotation : [-Math.PI / 2 + 0.1, 0, 0]}
                    />
                    <Drone 
                        isRotating={isRotating}
                        position={dronePosition}
                        scale={droneScale}
                        // rotation={[0,20,0]}
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Home