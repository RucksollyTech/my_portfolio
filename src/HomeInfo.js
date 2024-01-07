import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomeInfo = ({currentStage}) => {
    const router = useNavigate()
    return (
        <div className='popUpMessageContainer shadow-sm'>
            {currentStage === 1 &&
                <div>
                    <h1 className='textContainer pb-2 '>
                        Hello, I am Anthony, a fullstack developer
                    </h1>
                    <p className="bottomInfo">
                        Drag the screen to start 👉
                    </p>
                </div>
            }
            {currentStage === 2 &&
                <div>
                    <h1 className='textContainer pb-2 '>
                        About
                        <div className='font_12'>
                            I am a fullstack developer with incredible doings.
                            {/* I am a proficient full-stack developer with a track record of impressive accomplishments */}
                        </div>
                    </h1>
                    <div className="bottomInfo">
                        View more 😇
                    </div>
                </div>
            }
            {currentStage === 3 &&
                <div>
                    <h1 className='textContainer pb-2 '>
                        Looking for a Dev?
                        <div className='font_12'>
                            Let's have a talk, I am just a click away 😄.
                            {/* I am a proficient full-stack developer with a track record of impressive accomplishments */}
                        </div>
                    </h1>
                    <div className="textColor bottomInfo pointer text-white" onClick={()=>router("/contact")}>
                        <label>Contact me </label>
                        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                        <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                        <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                    </div>
                </div>
            }
            {currentStage === 4 &&
                <div>
                    <h1 className='textContainer pb-2 '>
                        Projects
                    </h1>
                    <div className="textColor bottomInfo pointer text-white" onClick={()=>router("/projects")}>
                        <label>View Projects </label>
                        <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                        <img width="24" height="24" className='d_none' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                        <img width="24" height="24" className='d_none1' src="https://img.icons8.com/material-rounded/24/E2E8F0/forward.png" alt="forward"/>
                    </div>
                </div>
            }
        </div>
    )
}

export default HomeInfo