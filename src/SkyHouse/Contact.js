import React, { Suspense, useState } from 'react'
import emailjs from "@emailjs/browser"
import { Canvas } from '@react-three/fiber'
import Loader from '../Loader'
import Robot from './Robot'
import Toast from 'react-bootstrap/Toast';
import NavBar from './NavBar'

const Contact = () => {
    const [forms,setForms] =useState({email:"",name : "",message :""})
    const [isLoading,setIsLoading] = useState(false)
    const [inPlayAnimation,setInPlayAnimation] = useState("Static Pose")
    const [showA, setShowA] = useState(false);
    const [err, setErr] = useState(false);

    const adjustRobotScreenSize = () => {
        let screenScale
        let screenPosition
        if(window.innerWidth < 768){
            screenScale = [0.022,0.022,0.022]
            screenPosition =[0,-0.6,0]
        }else{
            screenScale = [0.029,0.029,0.029]
            screenPosition =[0.5,-1.5,0]
        }
        return [screenScale,screenPosition]
    }
    const [robotScale,robotPosition] = adjustRobotScreenSize()
    

    // this function handles the change event
    const handleChange = (e) => {
        setForms({...forms, [e.target.name]:e.target.value})
    }
    const handleSubmit = (e) => {
        setErr(false)
        e.preventDefault()
        setIsLoading(true)
        setInPlayAnimation("Sprint_Front")
        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
                from_name: `${forms.name} with email ${forms.email}`,
                to_name : "Rucksolly",
                from_email : forms.email,
                to_email: "rucksolly@gmail.com",
                message: forms.message
            },
            process.env.REACT_APP_PUBLIC_KEY,
        ).then(()=>{
            setShowA(true)
            setTimeout(()=>{
                setInPlayAnimation("Static Pose")
                setForms({email:"",name : "",message :""})
            },[1500])
            setTimeout(() => {
                setShowA(false)
            }, 10000);
            setIsLoading(false)
        }).catch(error=>{
            console.log(error)
            setErr(true)
            setShowA(true)
            setIsLoading(false)
            setInPlayAnimation("Static Pose")
            setTimeout(() => {
                setShowA(false)
            }, 10000);
        })
    }

    // When there focus on the mouse
    const handleFocus = () => setInPlayAnimation("Walk_Front")

    const handleBlur = () => setInPlayAnimation("idle")


    return (
        <div className='ContactMee'>
            <NavBar />
            
            <div className='contactAnimated'>
                <form
                    onSubmit={handleSubmit}
                    className='p-2'
                >
                    <div className="form-group">
                        <label>Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="name" 
                            placeholder="Enter your name" 
                            value={forms.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="form-group pt-3">
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            name="email" 
                            value={forms.email}
                            placeholder="Enter email" 
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </div>
                    <div className="form-group pt-3">
                        <label>Your message</label>
                        <textarea 
                            className="form-control" 
                            name="message" 
                            value={forms.message}
                            placeholder="Enter your message" 
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        ></textarea>
                    </div>
                    
                    <div className="pt-3">
                        <button 
                            type="submit" 
                            className="btn btn-primary"
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            disabled={isLoading}
                        >
                            {isLoading ? "Sending" : "Send message"}
                        </button>
                        
                    </div>
                </form>
                <div className='hunVh'>
                    <Canvas
                        camera={{near: 0.1, far : 1000}} 
                    >
                        <directionalLight position={[1,1,1]} intensity={2}/>
                        <ambientLight intensity={0.5}/>
                        <Suspense fallback={<Loader />}>
                            <Robot 
                                inPlayAnimation={inPlayAnimation}
                                position={robotPosition}
                                rotation={[12.6,0.05,0]}
                                scale ={robotScale}
                            />
                        </Suspense>
                    </Canvas>
                </div>
            </div>
            <div className={`toasts ${showA ? "" : "d_non"}`}>
                <Toast show={showA} onClose={()=>setShowA(false)}>
                    <Toast.Header>
                        {err ? <img className='me-2' width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/DC3545/rounded-square.png" alt="rounded-square"/> : <img className='me-2' width="20" height="20" src="https://img.icons8.com/ios-glyphs/20/28A745/rounded-square.png" alt="rounded-square"/>}
                        <strong className={`me-auto ${err ? "text-danger" : "text-success"}`}>
                            {err ? "Message not delivered" : "Message received"}
                        </strong>
                        <small>Just now</small>
                    </Toast.Header>
                    <Toast.Body className='rounded text-dark'>{err ? "An error occurred, please try again " : "Thank you for reaching out to Anthony. I'll get in touch with you shortly"}</Toast.Body>
                </Toast>
            </div>
        </div>
    )
}

export default Contact