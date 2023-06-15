import React, { useState } from "react";
import '../styles/NavbarCSS.css'
import logo from '../assets/logo.png';
import { ImMenu, ImCross } from "react-icons/im";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));


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
                        <p><Link to="/"><LightTooltip title="Back to Lectures"><MdOutlineKeyboardReturn/></LightTooltip></Link></p>
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
                                <NavLink to={'/Compiler'}><span>Компајлер</span></NavLink>
                            </li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;