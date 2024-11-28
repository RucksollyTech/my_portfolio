import React, { Suspense, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Mydata from './DataContainer/Mydata'
import HoverRobot from './SkyHouse/HoverRobot'
import { Canvas } from '@react-three/fiber'
import { motion } from "framer-motion"
import NavDropdown from 'react-bootstrap/NavDropdown';


const Certificates = () => {
    const theData =  [
        {
            id: 1,
            title: 'The Ultimate Authentication Course with Django and React',
            body: `
                Authenticate with Access & Refresh Tokens, 
                2FA, Social Authentication with Google etc.
                Use Django Rest Framework,
                Connect Django with MySQL,
                Use Access & Refresh Tokens,
                Use HttpOnly Cookies,
                Send Emails,
                Login using 2 Factor Authentication (2FA) with Google Authenticator,
                Social Authentication using your Google Account,
                Use React Hooks,
                Use Redux Toolkit,
                Create QRCodes
            `,
            img: '/Images/Authentication_django.jpg',
            shortened: 'Authentication',
            url: 'https://ude.my/UC-6885c18e-15ae-4275-95ab-3acb30d945ce'
        },
        {
            id: 2,
            title: `
                Django with React | An Ecommerce Website.
            `,
            body: `
                Build an Ecommerce website using Django with React,
                Full featured shopping cart with PayPal & credit/debit payments,
                Product rating & review system,
                An actual real-world project built in a linear and progressive manner,
                Admin area to manage customers, products & orders,
                Product search, carousel, pagination & more
            `,
            img: '/Images/Django_and_react.jpg',
            shortened: 'Django with React ',
            url: 'https://ude.my/UC-050c92cc-8ac5-40e1-a40e-6fb6b65cc9cb'
        },
        {
            id: 3,
            title: 'Complete Next.js Developer in 2023: Zero to Mastery',
            body: `
                Make incredibly performant web apps using Next JS,
                Understand the differences between running Next JS in development and production environments,
                Utilize four different caching systems to speed up request response times,
                Use the latest React tech with Server Components to build streaming interfaces,
                Implement robust and secure user authentication with the Next Auth library,
                Automatically update and refresh data with the use of Server Actions with Revalidation,
                Optimize image fetching and loading through the use of Next's Image component,
                Add robust form validation and handling by implementing React's new useFormState hook
            `,
            img: '/Images/Nextjs.jpg',
            shortened: 'Next JS',
            url: 'https://ude.my/UC-035d09cf-9f79-4e46-a2bf-bc75e5715a87'
        }
    ]
    const [data,setData] = useState(theData[0])
    const lastId = theData[0].id
    const [pointerDown,setPointerDown] = useState(false)
    const getProject = id=> setData(theData.find(data => data.id === id))

    const adjustRobotScreenSize = () => {
        let screenScale
        let screenPosition
        if(window.innerWidth < 768){
            screenScale = [4,4,4]
            screenPosition =[-0.5,-1.5,0]
        }else{
            screenScale = [6,6,6]
            screenPosition =[0,-2,0]
        }
        return [screenScale,screenPosition]
    }
    const [robotScale,robotPosition] = adjustRobotScreenSize()

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
    }
        
    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    }
    const constraintsRef = useRef(null)

    const adjustHomeIconScreenSize = () => {
        let screenSize

        if(window.innerWidth < 768){
            screenSize = 30
        }else{
            screenSize = 40
        }
        return [screenSize]
    }
    const [homeIconSize] = adjustHomeIconScreenSize()

    return (
        <motion.div ref={constraintsRef}>
            <div className='projectPage'>
                <div className='projectNav'>
                    <div>
                        <Link to={"/"} className='pr_2 homeLogo'>
                            <img width={homeIconSize} height={homeIconSize} src={`https://img.icons8.com/sf-black-filled/${homeIconSize}/FFFFFF/home.png`} alt="home"/>
                        </Link>
                        <a href={"/Pdf/resume.pdf"} target='_blank' rel="noreferrer" className='textColor pr_2'>
                            My Resume
                        </a>
                        <Link to={"/about"} className='textColor'>
                            About
                        </Link>
                    </div>
                    <div className='contactMeShowIcons'>
                        <NavDropdown title="📧" id="navbarScrollingDropdown">
                            <Link to={"/contact"} className='dropdown-item'>
                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/94A3B8/mail.png" alt="mail"/>
                                <span className="pl_1 textColor">Contact</span>
                            </Link>
                            <NavDropdown.Divider />
                            <NavDropdown.Item target='_blank' rel="noreferrer" href="https://github.com/RucksollyTech">
                                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/94A3B8/github.png" alt="github"/>
                                <span className="pl_1 textColor">Github</span>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/chibuzor-anthony-907289191">
                                <img width="24" height="24" src="https://img.icons8.com/ios-filled/24/94A3B8/linkedin.png" alt="linkedin"/>
                                <span className="pl_1 textColor">LinkedIn</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <div className='iconsContainer'>
                            {/* <img width="30" height="30" src="https://img.icons8.com/windows/30/94A3B8/instagram-new.png" alt="instagram-new"/> */}
                            {/* <img width="27" height="27" src="https://img.icons8.com/ios-filled/27/94A3B8/twitter.png" alt="twitter"/> */}
                            <Link to={"/contact"}>
                                <img width="28" height="28" src="https://img.icons8.com/material-rounded/28/94A3B8/mail.png" alt="mail"/>
                            </Link>
                            <a href="https://github.com/RucksollyTech" target='_blank' rel="noreferrer">
                                <img width="27" height="27" src="https://img.icons8.com/material-sharp/27/94A3B8/github.png" alt="github"/>
                            </a>
                            <a href="https://www.linkedin.com/in/chibuzor-anthony-907289191" target='_blank' rel="noreferrer">
                                <img width="27" height="27" src="https://img.icons8.com/ios-filled/27/94A3B8/linkedin.png" alt="linkedin"/>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="projectPageContainer">
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="projectTitle" variants={item}>
                            {data.title}
                        </motion.div>
                        <motion.div className="projectBody pt-1" variants={item}>
                            {data.body}
                            {data.id === lastId &&  
                                <span className="text-white">Oh, of course, you can move the <span className='text-danger'>robot</span> around. 😇</span>
                            }
                            <div className="pt-3">
                                <a href={data.url} target='_blank'  rel="noreferrer" className='textColor'>
                                    <span>View Site </span>
                                    <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                    <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                    <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                </a>
                            </div>
                        </motion.div>
                        
                    </motion.div>
                    <div>
                        <div className="projectListHeader">
                            Projects
                        </div>
                        <div className='relative'>
                            <div className="projectListContainer">
                                {theData && theData.map(info=>(
                                    <div key={info.id} className='textColor pointer' onClick={()=>getProject(info.id)}>
                                        <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                        <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                        <label className='pointer'>{info.shortened}</label>
                                    </div>
                                ))}
                            </div>
                            <div className='listborder' />
                        </div>
                    </div>
                </div>
                <motion.div 
                    drag className={`hoverRobot ${pointerDown ? 'cursorGrabbing' : 'cursorGrab' }`} 
                    dragConstraints={constraintsRef}
                    onPointerDown={()=>setPointerDown(true)}
                    onPointerUp={()=>setPointerDown(false)}
                >
                    <Canvas camera={{ near: 0.1, far: 1000 }}>
                        <directionalLight position={[1, 1, 1]} intensity={2} />
                        <ambientLight intensity={0.5} />
                        <Suspense fallback={null}>
                            <HoverRobot
                                position={robotPosition}
                                rotation={[12.6, 0.05, 0]}
                                scale={robotScale}
                            />
                        </Suspense>
                    </Canvas>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Certificates