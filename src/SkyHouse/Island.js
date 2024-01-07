import React, { useRef,useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import islandScene from "./Assets/3d/island.glb"
import {a} from "@react-spring/three"
// import Hello from "./Assets/3d/Hello";

const Island = (
    {isRotating,setIsRotating,
    setCurrentStage,
    currentFocusPoint,...props}
) => {

    const islandRef = useRef()

    // Getting access to the three js and the viewport
    const {gl,viewport} = useThree()

    const { nodes, materials } = useGLTF(islandScene);

    // Inside the Island component where you set up materials
    useEffect(() => {
        if (materials["11112_sheet_Material__25"]) {
            materials["11112_sheet_Material__25"].depthTest = true;
            materials["11112_sheet_Material__25"].depthWrite = true;
        }

        if (materials["11112_sheet_Material__37"]) {
            materials["11112_sheet_Material__37"].depthTest = true;
            materials["11112_sheet_Material__37"].depthWrite = true;
        }
    }, [materials]);

    // to get the last mouse position
    const lastX = useRef(0)
    // To get the rotation speed
    const rotationSpeed = useRef(0)

    // This is how fast does it move and how fast it continues moving afterwards
    const dampingFactor = 0.95;

    // This handles what happens when the mouse is held and dragged
    const handlePointerDown = (e) => {
        // Mouse hold will only do what it does in this function and won't touch any other element or functions on the screen
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(true);

        // To know if it a touch event on a phone or a mouse event
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        lastX.current = clientX;
    }

    // When not clicking anywhere
    const handlePointerUp = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setIsRotating(false);
    }

    // When moving mouse around without clicking anywhere
    const handlePointerMove = (e) => {
        e.stopPropagation();
        e.preventDefault();

        if (isRotating){
            try{
                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const delta = (clientX - lastX.current) / viewport.width
                islandRef.current.rotation.z += delta * 0.01 * Math.PI;
                lastX.current = clientX;
                rotationSpeed.current = delta * 0.01 * Math.PI;
            }catch(e){}
        }
    }

    // To add the ability to move with the keyboard
    const handleKeyDown = (e) => {
        if(e.key === "ArrowLeft"){
            if(!isRotating){
                setIsRotating(true);
            }
            try{
                islandRef.current.rotation.z += 0.01 * Math.PI;
            }catch(e){}
        }else if(e.key === "ArrowRight"){
            if(!isRotating){
                setIsRotating(true);
            }
            try{
                islandRef.current.rotation.z -= 0.01 * Math.PI;
            }catch(e){}
        }        
    }

    const handleKeyUp = (e) => {
        if(e.key === "ArrowLeft" || e.key === "ArrowRight"){
            setIsRotating(false);
        }
    }

    // This use to put all we have done to action
    useFrame(()=>{
        if(!isRotating){
            rotationSpeed.current *= dampingFactor;
            if(Math.abs(rotationSpeed.current) < 0.001){
                rotationSpeed.current = 0
            }
            try{
                islandRef.current.rotation.z += rotationSpeed.current;
            }catch{}
        }else{
            const rotation = islandRef.current.rotation.z;
            const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
            switch (true) {
                case normalizedRotation >= 2.86 && normalizedRotation <= 3.5:
                    setCurrentStage(4);
                    break;
                case normalizedRotation >= 0.62 && normalizedRotation <= 1.6:
                    setCurrentStage(3);
                    break;
                case normalizedRotation >= 4.4 && normalizedRotation <= 5:
                    setCurrentStage(2);
                    break;
                case normalizedRotation >= 5.5 && normalizedRotation <= 6.1:
                    setCurrentStage(1);
                    break;
                default:
                    setCurrentStage(null);
            }
        }
    })

    useEffect(()=>{
        // This is to make sure that we are touching the canvas and not the regular dom
        const canvas = gl.domElement

        // this is adding the events
        canvas.addEventListener("pointerdown", handlePointerDown)
        canvas.addEventListener("pointerup", handlePointerUp)
        canvas.addEventListener("pointermove", handlePointerMove)
        document.addEventListener("keydown", handleKeyDown)
        document.addEventListener("keyup", handleKeyUp)

        // And also removing once we exit the page
        return ()=>{
            canvas.removeEventListener("pointerdown", handlePointerDown)
            canvas.removeEventListener("pointerup", handlePointerUp)
            canvas.removeEventListener("pointermove", handlePointerMove)
            document.removeEventListener("keydown", handleKeyDown)
            document.removeEventListener("keyup", handleKeyUp)
        }
    },[gl,handlePointerDown,handlePointerUp,handlePointerMove])
    

    return (
        <a.group ref={islandRef} {...props}>
            <group >
                <mesh
                geometry={nodes.Object_2.geometry}
                material={materials["11112_sheet_Material__25"]}
                material-override

                />
                <mesh
                geometry={nodes.Object_3.geometry}
                material={materials["11112_sheet_Material__25"]}
                material-override

                />
                <mesh
                geometry={nodes.Object_4.geometry}
                material={materials["11112_sheet_Material__37"]}
                material-override

                />
                <mesh
                geometry={nodes.Object_5.geometry}
                material={materials["11112_sheet_Material__37"]}
                material-override

                />
                
            </group>
        </a.group>
    )
}

export default Island



