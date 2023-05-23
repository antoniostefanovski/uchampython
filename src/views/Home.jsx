import React, { useEffect } from "react";
import '../styles/HomeCSS.css';
import logo from '../assets/logo.png';
import landingPart from '../assets/landingPart.jpg';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { SiPython } from "react-icons/si";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home () {

    useEffect(() => {
        document.title = "Учам Python - Почетна";
      }, []);


    return(
        <>
        <div className="nav-bar-container">
            <img src={logo} alt="Logo"/>
        </div>
            <div className="landing-container">
                <Fade delay={500} duration={2000} when="mount">
                    <div className="two-column-container">
                        <div className="text-content">
                            <h1>Учам <span>Python</span></h1>
                            <hr/>
                            <p>Учам Python е платформа која ви овозможува да научите програмирање користејќи го програмскиот јазик Python. Нашиот курс е бесплатен и достапен за секој.</p>
                            <p>Курсот е дизајниран да биде достапен и привлечен, со интерактивни вежби и примери кои ќе ви помогнат да ги изградите вашите програмски вештини. Исто така не е потребно никакво предзнаење !</p>
                            <p>Без разлика дали сакате да научите нова вештина, да започнете кариера во технологијата или едноставно да ја истражите вашата љубопитност, Учам Python може да ви помогне да ги постигнете вашите цели.</p>
                            </div>
                        <div>
                            <img src={landingPart} alt="LandingPart"/>
                         </div>
                    </div>
                </Fade>
                {/* What will we learn container */}
                <div className="wwwl-container">
                    <Slide delay={500} duration={1500} when="mount" direction="down">
                        <h1><span><SiPython/></span> Што ќе <span>изучуваме</span> ?</h1>
                    </Slide>
                </div>
                
                <div className="cards-container">
                    <div className="card">
                        <h2>Python Syntax</h2>
                        <p>Колку се разликува од останатите програмски јазици</p>
                    </div>

                    <div className="card">
                        <h2>Variables</h2>
                        <p>Што се променливите и што може да сместиме во нив</p>
                    </div>

                    <div className="card">
                        <h2>Data Types</h2>
                        <p>Какви се податочни типови постојат</p>
                    </div>

                    <div className="card">
                        <h2>Operators</h2>
                        <p>За што ни служат операторите и каде да ги употребиме</p>
                    </div>
                </div>

                <div className="cards-container">
                    <div className="card">
                        <h2>Lists</h2>
                        <p>Служат за да сместиме повеќе податоци на едно место</p>
                    </div>

                    <div className="card">
                        <h2>Tuples</h2>
                        <p>Слична функционалност имаат со листите</p>
                    </div>

                    <div className="card">
                        <h2>Sets</h2>
                        <p>Како се разликуваат од листите и tuples</p>
                    </div>

                    <div className="card">
                        <h2>Math</h2>
                        <p>Библиотеката во Python која ни ја олеснува работата</p>
                    </div>
                </div>

                <div className="cards-container">
                    <div className="card">
                        <h2>If..Else</h2>
                        <p>Научете како да ги користите логичките услови</p>
                    </div>

                    <div className="card">
                        <h2>While Loops</h2>
                        <p>Циклуси кои вртат се додека не се исполне некој услов</p>
                    </div>

                    <div className="card">
                        <h2>For Loops</h2>
                        <p>Циклуси кои ви помагаат при сложени пресметки</p>
                    </div>

                    <div className="card">
                        <h2>Arrays & Matrix</h2>
                        <p>Како да работите со низи и матрици за складирање и манипулирање со големи групи на податоци</p>
                    </div>
                </div>

                <div className="cards-container">
                    <div className="card">
                        <h2>Functions</h2>
                        <p>Моќта на функциите е огромна и ви заштедува доста време</p>
                    </div>

                    <div className="card">
                        <h2>Classes & Objects</h2>
                        <p>Светот на објектно-ориентираното програмирање е составен од класи и објекти</p>
                    </div>
                </div>

                <div className="startnow-container">
                    <h1>Започнете уште одма</h1>
                    <p>Не двоумете се и впуштете се во забавата со кодирање со само еден клик</p>
                    <Link to="/Lecture/0"><button>ЗАПОЧНИ</button></Link>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;