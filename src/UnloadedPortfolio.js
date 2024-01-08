import React, { useState } from 'react'
import { Tilt } from 'react-tilt'

const UnloadedPortfolio = () => {
    const [load,setLoad] =useState(true)
    setTimeout(() => {
        setLoad(false)
    }, 30000);
  return (
    <div className='p-2'>
        <Tilt options={{
            scale:1, 
            speed:450,
            max: 10,
        }} className='preLoaderPortfolioCover'>
            <div className="flex">
                <img src="/Images/gif.gif" alt="" />
                {load && <h1 className='LoadingColorS'>Loading...</h1>}
            </div>
            <div>
                <div className="pt-2">
                    You are here because your network/device is
                    loading or couldn't load the model for this page or 
                    just a just a coincidence you are here 😇. Little matter, we 
                    are here.
                </div>
                <div className="pt-2">
                    I am <span className='MyName'>Okenwa Anthony</span>
                </div>
                <div className='experience'>
                    Experienced Full-Stack Engineer
                </div>
                <div className='pt-3'>
                    I create engaging digital experiences and share the joy of programming with others.
                </div>
                <div className="pt-2">
                    <div className='text-white'>
                        Please check out my :
                    </div>
                    <div className="pt-1">
                        <a href={"/projects"} className='textColor'>
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <span>About page </span>
                        </a>
                        <a href={"/projects"} className='textColor'>
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <span>Recent Projects </span>
                        </a>
                        <a href={"/Pdf/resume.pdf"} className='textColor'>
                            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                            <span>Résumé </span>
                        </a>

                    </div>
                </div>
                <div className="pt-4">
                    Or you can <a href="/contact">contact</a> me, I am 
                    just a few keyboard strokes away.
                </div>
                <div className='iconsContainer'>
                    <a className='pr-1' href="/">
                        <img className='pointer' width="32" height="32" src="https://img.icons8.com/sf-black-filled/32/94A3B8/home.png" alt="home"/>
                    </a>
                    <a className='pr-1' href="https://github.com/RucksollyTech" target='_blank' rel="noreferrer">
                        <img width="27" height="27" src="https://img.icons8.com/material-sharp/27/94A3B8/github.png" alt="github"/>
                    </a>
                    <a className='pr-1' href="https://www.linkedin.com/in/chibuzor-anthony-907289191" target='_blank' rel="noreferrer">
                        <img width="27" height="27" src="https://img.icons8.com/ios-filled/27/94A3B8/linkedin.png" alt="linkedin"/>
                    </a>
                    <a className='pr-1' href="/contact">
                        <img width="28" height="28" src="https://img.icons8.com/material-rounded/28/94A3B8/mail.png" alt="mail"/>
                    </a>
                </div>
            </div>
        </Tilt>
    </div>
  )
}

export default UnloadedPortfolio