import React from "react";
import '../styles/FooterCSS.css';
import { NavLink, Routes } from "react-router-dom";
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';


function Footer () {
    return(
        <>
            <div className="footer-container">
                <div className="over">
                    <div className="orientation">
                        <h4>Ориентација</h4>
                        <ul className="footer-nav-links">
                            <li>
                                <HashLink to={'/#'} className="link">Почетна</HashLink>
                            </li>
                            <li>
                                <HashLink to={'/About#'}>За нас</HashLink>
                            </li>
                        </ul>
                    </div>
                    <div className="course">
                        <h4>Курс</h4>
                        <ul className="footer-nav-links">
                            <li>
                                <HashLink to={'/Lectures#'} className="link">Скокни на лекции</HashLink>
                            </li>
                            <li>
                                <HashLink to={'/Lecture/0'}>Како да инсталирам PyCharm?</HashLink>
                            </li>
                            <li>
                                <HashLink to={'/Compiler'}>Компајлер</HashLink>
                                {/* <a href="https://www.w3schools.com/python/trypython.asp?filename=demo_compiler" target="_blank">Online Компајлер</a> */}
                            </li>
                        </ul>
                    </div>
                    <div className="contact-links">
                        <ul className="footer-social-links">
                            <li>
                                <span><a href="https://www.youtube.com/channel/UC9S7flsOxIRuhKB8bzVIDHw" target="_blank"><AiFillYoutube/></a></span>
                            </li>
                            <li>
                                <span><a href="https://www.facebook.com/FINKI.ukim.mk" target="_blank"><FaFacebookSquare/></a></span>
                            </li>
                            <li>
                                <span><a href="https://github.com/finki-mk" target="_blank"><FaGithubSquare/></a></span>
                            </li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4>Контакт</h4>
                        <p><span><MdEmail/></span> <a href="mailto:ucampython@gmail.com?subject=Ucham%20Python">ucampython@gmail.com</a></p>
                    </div>
                </div>
                <div className="copyright-content">
                    <p>© Copyright {new Date().getFullYear()} |   Учам Python  |   All Rights Reserved   | Сите права се задржани. </p>
                </div>
            </div>
        </>
    )
}

export default Footer;