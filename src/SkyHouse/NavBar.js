import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
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
        <div className="navBar">
            <div>
                <Link to={"/home"} className='pr_2 homeLogo'>
                    <img width={homeIconSize} height={homeIconSize} src={`https://img.icons8.com/sf-black-filled/${homeIconSize}/FFFFFF/home.png`} alt="home"/>
                </Link>
                <a href={"/Pdf/resume.pdf"} target='_blank' rel="noreferrer">
                    My Resume
                </a>
            </div>
            <div>
                <Link to={"/about"} className=' pr_2'>
                    About
                </Link>
                <Link to={"/projects"} >
                    Projects
                </Link>
            </div>
        </div>
    )
}

export default NavBar