import React, { Suspense, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'
import Earth1 from './SkyHouse/Earth1'
import Sun from './SkyHouse/Sun'
import Stars from './Stars'
import LightSwitch from './SkyHouse/LightSwitch'
import { Tilt } from 'react-tilt'
import Loader from './Loader'
import ScrollSpy from "react-ui-scrollspy";
import ExperienceData from './DataContainer/ExperienceData'
import Mydata from './DataContainer/Mydata'


const About = () => {
    const router = useNavigate()
    const [activateSpace,setActivateSpace] = useState(false)
    const [Earth1Position,setEarth1Position] = useState([-2,0,0])

    const experience_data = ExperienceData()
    const project_data = Mydata(). slice(0, 3)
    const adjustEarth1ScreenSize = () => {
        let screenScale
        if(window.innerWidth < 768){
            screenScale = [1.2,1.2,1.2]
        }else{
            screenScale = [1,1,1]
        }
        return [screenScale]
    }
    const [Earth1Scale] = adjustEarth1ScreenSize()
    const [prevScrollY2, setPrevScrollY2] = useState(0);
    useEffect(()=>{
        if(prevScrollY2 && prevScrollY2 > 0) {
            setEarth1Position([-2,0,(prevScrollY2 * 0.001)])
        }
    },[prevScrollY2])

    useEffect(() => {
        const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setPrevScrollY2(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY2]);

    return (
        <div className='MainContainer'>
            <div>
                <div className='AboutIntro SunCover'>
                    <div className='MyName'>
                        Okenwa Anthony
                    </div>
                    <div className='LeftContainer'>
                        <div className='experience'>
                            Experienced Full-Stack Engineer
                        </div>
                        <div className='pt-3'>
                            I create engaging digital experiences and share the joy of programming with others.
                        </div>
                    </div>
                    <div className='LeftSideContent'>
                        <a href="#about">
                            <div data-to-scrollspy-id="about">
                                <span className='crossBar'></span>
                                <span className='crossBarContent'>ABOUT</span>
                            </div>
                        </a>
                        <a href="#experience">
                            <div data-to-scrollspy-id="experience">
                                <span className='crossBar'></span>
                                <span className='crossBarContent'>EXPERIENCE</span>
                            </div>
                        </a>
                        <a href="#projects">
                            <div data-to-scrollspy-id ="projects">
                                <span className='crossBar'></span>
                                <span className='crossBarContent'>PROJECTS</span>
                            </div>
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className={`LeftHand ${activateSpace ? "Open" : ""}`}>
                <div className='MyName'>
                    Okenwa Anthony
                </div>
                <div className='LeftContainer'>
                    <div className='experience'>
                        Experienced Full-Stack Engineer
                    </div>
                    <div className='pt-3'>
                        I create engaging digital experiences and share the joy of programming with others.
                    </div>
                </div>
                <div className='LeftSideContent'>
                    <a href="#about">
                        <div data-to-scrollspy-id="about">
                            <span className='crossBar'></span>
                            <span className='crossBarContent'>ABOUT</span>
                        </div>
                    </a>
                    <a href="#experience">
                        <div data-to-scrollspy-id="experience">
                            <span className='crossBar'></span>
                            <span className='crossBarContent'>EXPERIENCE</span>
                        </div>
                    </a>
                    <a href="#projects">
                        <div data-to-scrollspy-id ="projects">
                            <span className='crossBar'></span>
                            <span className='crossBarContent'>PROJECTS</span>
                        </div>
                    </a>
                    
                </div>
                <div className='iconsContainer'>
                    <img className='pointer' onClick={()=>router("/")} width="32" height="32" src="https://img.icons8.com/sf-black-filled/32/94A3B8/home.png" alt="home"/>
                    <a href="https://github.com/RucksollyTech" target='_blank' rel="noreferrer">
                        <img width="27" height="27" src="https://img.icons8.com/material-sharp/27/94A3B8/github.png" alt="github"/>
                    </a>
                    <a href="https://www.linkedin.com/in/chibuzor-anthony-907289191" target='_blank' rel="noreferrer">
                        <img width="27" height="27" src="https://img.icons8.com/ios-filled/27/94A3B8/linkedin.png" alt="linkedin"/>
                    </a>
                    <Link to={"/contact"}>
                        <img width="30" height="30" src="https://img.icons8.com/sf-black-filled/30/94A3B8/contact-card.png" alt="contact-card"/>
                    </Link>
                </div>
            </div>

            <div className={`SunCover ${activateSpace ? "Open" : ""}`}>
                <ScrollSpy>
                    <div id='about'>
                        <div>
                            In 2016, my journey into the world of coding 
                            began during my university days when C++ 
                            sparked my imagination with its transformative capabilities. 
                            This initial spark evolved into a passion for coding, leading 
                            me through the realms of Python, Flask, Django, and eventually 
                            into the expansive landscape of JavaScript, React, Next.js, and 
                            a diverse array of tech stacks (refer to my resume for a detailed 
                            list).
                        </div>
                        <div className='pt-3'>
                            My coding adventure extended beyond personal exploration 
                            as I began assisting friends in the computer department 
                            with their assignments and projects. This hands-on experience
                             naturally progressed into crafting websites for 
                             entrepreneurial friends. Along the way, I've had the 
                             privilege of sharing my knowledge with over 500 students 
                             in the art of web development. As a testament to my dedication,
                              I spend my free time conducting live web development classes 
                              and have 
                            aspirations to release online courses in the near future.
                        </div>
                        <div className='pt-3'>
                            Away from the screen, I enjoy online gaming with friends, 
                            particularly engaging in
                            Call of Duty, or indulging in console gaming with PES.
                            When not in the gaming realm, I'm captivating my girlfriend 
                            with the endless possibilities of programming 
                            and showcasing the cool things that code can bring to life.
                        </div>
                        <div className="pt-3">
                            Just as my coding journey started with curiosity and evolved 
                            into a wealth of experiences, I look forward to further 
                            contributions and the exciting prospect of sharing my 
                            knowledge through online courses.
                        </div>
                        <div className="pt-3">
                            <span className="text-warning">
                                Oh, about the light switch, you can turn/spin it but avoid clicking it, you might turn off the light.
                            </span>
                            <p className='flex'>
                                <span className='highter pointer'>
                                    <Canvas
                                        shadows
                                        gl={{preserveDrawingBuffer: true}}
                                        camera={{
                                            fov: 45,
                                            near: 0.1,
                                            far: 200,
                                            position: [-4, 3, 6],
                                        }}
                                        onClick={() =>setActivateSpace(!activateSpace)}
                                    >
                                        <Suspense fallback={null}>
                                            <ambientLight intensity={5} />
                                            <pointLight position={[10, 10, 10]} />
                                            <OrbitControls 
                                                enableZoom={false}
                                            />
                                            
                                            <LightSwitch 
                                                activateSpace={activateSpace}
                                            />
                                            <Preload all/>
                                        </Suspense>
                                    </Canvas>
                                </span>
                            </p>

                        </div>
                    </div>
                    <div id='experience'>
                        <div className='pt_project'>
                            {experience_data && experience_data.map((experience,index)=>(
                                <Tilt options={{
                                    scale:1, 
                                    speed:450,
                                }} className='projectContainer' key={index}>
                                    <div className='colorMuted font_13'>
                                        {experience.date}
                                    </div>
                                    <div>
                                        <div className='text_white bold6 font_18'>
                                            {experience.name}
                                        </div>
                                        <div className='text_color_muted font_18'>
                                            {experience.position}
                                        </div>
                                        <div className="pt-1">
                                            {experience.description}
                                        </div>
                                        <div className="pt-2">
                                            {experience.tech_stack && experience.tech_stack.map((stack, index)=>(
                                                <span key={index}>
                                                    {stack}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </Tilt>
                            ))}
                            
                        </div>

                        {/* Resume section */}
                        <div className='pt-5'>
                            <a href="/Pdf/resume.pdf" target='_blank' rel="noreferrer" className='textColor'>
                                <span>View Full Résumé </span>
                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            </a>
                        </div>
                    </div>
                    <div id='projects'>
                        <div className='pt_project'>
                            {project_data && project_data.map((project,index)=>(
                                <div className='projectContainer' key={index}>
                                    <div className='colorMuted font_13'>
                                        {project.img && <img src={project.img} alt={`${project.title} photo`} />}
                                    </div>
                                    <div>
                                        <div className='text_white bold6 font_18'>
                                            {project.title}
                                        </div>
                                        <div className="pt-1">
                                            {project.shortened}
                                        </div>
                                        <div className="pt-2">
                                            {project.tech_stack && project.tech_stack.map((stack, index)=>(
                                                <span key={index}>
                                                    {stack}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                        {/* Resume section */}
                        <div className='pt-5'>
                            <Link to={"/projects"} className='textColor'>
                                <span>Recent Projects </span>
                                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                                <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            </Link>
                        </div>
                    </div>
                    <div className="pt-5 font_14">
                        First of all, I want to thank you for viewing this portfolio. Knowing that you
                        are going to see it on this day gave me strength I needed to keep going and finally came up with this master piece.
                        Oh, before I forget, I want to give credit to the person that inspired this page design Brittany Chiang. 
                    </div>
                    <div className='iconsContainer AboutIntro'>
                        <img className='pointer' onClick={()=>router("/")} width="32" height="32" src="https://img.icons8.com/sf-black-filled/32/94A3B8/home.png" alt="home"/>
                        <a href="https://github.com/RucksollyTech" target='_blank' rel="noreferrer">
                            <img width="27" height="27" src="https://img.icons8.com/material-sharp/27/94A3B8/github.png" alt="github"/>
                        </a>
                        <a href="https://www.linkedin.com/in/chibuzor-anthony-907289191" target='_blank' rel="noreferrer">
                            <img width="27" height="27" src="https://img.icons8.com/ios-filled/27/94A3B8/linkedin.png" alt="linkedin"/>
                        </a>
                        <Link to={"/contact"}>
                            <img width="30" height="30" src="https://img.icons8.com/sf-black-filled/30/94A3B8/contact-card.png" alt="contact-card"/>
                        </Link>
                    </div>
                </ScrollSpy>
            </div>
            {activateSpace &&
                <div className='starsBackground'>
                    <Canvas
                        shadows
                        // frameloop='demand'
                        gl={{preserveDrawingBuffer: true}}
                        camera={{
                            fov: 45,
                            near: 0.1,
                            far: 200,
                            position: [-4, 3, 6],
                        }}
                    >
                        <Suspense fallback={<Loader />}>
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />
                            <OrbitControls 
                                autoRotate
                                enableZoom={false}
                                maxPolarAngle={Math.PI / 2}
                                minPolarAngle={Math.PI / 2}
                            />
                            <Earth1 
                                scale={Earth1Scale}
                                position={Earth1Position}
                            />
                            <Sun 
                                scale={0.014}
                            />
                            <Preload all/>
                        </Suspense>
                    </Canvas>
                    <Stars />
                </div>
            }
        </div>
    )
}

export default About