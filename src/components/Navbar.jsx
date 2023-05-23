import React, { useState } from "react";
import '../styles/NavbarCSS.css'
import logo from '../assets/logo.png';
import { ImMenu, ImCross } from "react-icons/im";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { AiFillHome, AiFillCode } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiComputerFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

function Navbar () {

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <>
            <div className="full-container">
                <div className="navbar-container">
                    <div className="navbar-menu">
                        <Link to="/"><img src={logo} alt="logo"/></Link>
                        <p onClick={handleClick}>
                            { isClicked ? <span><ImCross/></span> : <span><ImMenu/></span> }
                        </p>
                        <p><Link to="/"><MdOutlineKeyboardReturn/></Link></p>
                    </div>
                </div>
                <div className={ isClicked ? "nav-links-container" : "nav-links-hidden" }>
                        <ul className="nav-links">
                            <li>
                                <NavLink to={'/'}><span>Почетна</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/Lectures'}><span>Предавања</span></NavLink>
                            </li>
                            <li>
                                <NavLink to={'/About'}><span>За нас</span></NavLink>
                            </li>
                            <li>
                                {/* <NavLink to={'/'}><span>Компајлер</span></NavLink> */}
                                <a href="https://www.w3schools.com/python/trypython.asp?filename=demo_compiler" target="_blank"><span>Компајлер</span></a>
                            </li>
                        </ul>
                </div>
            </div>
            {/* <span><AiFillHome/></span> 
                <span><RiComputerFill/></span>
                <span><BsFillPeopleFill/></span>
                <span><AiFillCode/></span>
            */}
        </>
    )
}

export default Navbar;