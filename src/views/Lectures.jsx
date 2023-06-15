import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import '../styles/LecturesCSS.css'
import lecnav from '../assets/lecturesNavigationBackground.jpg';
import { AiFillFilePdf } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import BackToTop from "../components/BackToTop";


function Lectures () {

    useEffect(() => {
        document.title = "Учам Python - Предавања";
      }, []);

    return(
        <>
            <div className="lectures-container">
                <div className="lectures-navigation">
                    <Navbar/>
                    <div className="lectures-header">
                        <div className="lectures-title-header">
                            <Fade delay={300} duration={1500} when="mount">
                                <h1>Предавања</h1>
                                <hr/>
                                <p>Предавањата се во видео формат со цел подобрување на квалитетот на предавањето и олеснување на оние коишто ќе го учат истото.</p>
                                <p>Достапни ви се материјали од секоја лекција во посебен pdf документ. Можете да ги користите како додаток кој може да ви помогне полесно да ги разберете концептите на програмирањето и Python.</p>
                                <p>Предавањата започнуваат со објаснување за Python, како да инсталирате околина во којашто ќе работите и како да ја користите истата.</p>
                                <p>Пристап до секое предавање имате подолу на страната.</p>
                            </Fade>
                        </div>
                        <div className="lectures-title-image">
                            <Fade delay={300} duration={1500} when="mount">
                                <img src={lecnav} alt="Lectures Navigation" />
                            </Fade>
                        </div>
                    </div>
                    
                </div>
                    <div className="lectures-content-container">
                        <div className="title">
                            <Fade delay={300} duration={1500} when="mount">
                                <h1>Листа од <span>предавања</span></h1>
                            </Fade>
                        </div>
                        <div className="lectures-cards-container">
                            <Link to={"/Lecture/0"}>
                                <div className="lectures-card">
                                    <h2>Предавање 00</h2>
                                    <p>Како да користите Python</p>
                                    <p><a href="https://drive.google.com/uc?export=download&id=1ZI7gZmCEto4Sv8KS4BgqCndnWAnMgEL4"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/1"}>
                                <div className="lectures-card">
                                    <h2>Предавање 01</h2>
                                    <p>Introduction (Запознавање со Python)</p>
                                    <p><a href="lecture01.pdf" download="MATERIAL_lecture01.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/2"}>
                                <div className="lectures-card">
                                    <h2>Предавање 02</h2>
                                    <p>Variables (Варијабли)</p>
                                    <p><a href="lecture02.pdf" download="MATERIAL_lecture02.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/3"}>
                                <div className="lectures-card">
                                    <h2>Предавање 03</h2>
                                    <p>Operators (Оператори)</p>
                                    <p><a href="lecture03.pdf" download="MATERIAL_lecture03.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                        </div>
                        <div className="lectures-cards-container">
                            <Link to={"/Lecture/4"}>
                                <div className="lectures-card">
                                    <h2>Предавање 04</h2>
                                    <p>Math Library</p>
                                    <p><a href="lecture04.pdf" download="MATERIAL_lecture04.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/5"}>
                                <div className="lectures-card">
                                    <h2>Предавање 05</h2>
                                    <p>If..Else, While Loops, For Loops</p>
                                    <p><a href="lecture05.pdf" download="MATERIAL_lecture05.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/6"}>
                                <div className="lectures-card">
                                    <h2>Видео Сумаризација</h2>
                                    <p>Сумаризација на сè што учевме досега</p>
                                    <p><a href="lecture06.pdf" download="MATERIAL_lecture06.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/7"}>
                                <div className="lectures-card">
                                    <h2>Предавање 06</h2>
                                    <p>Lists, Tuples & Sets</p>
                                    <p><a href="lecture07.pdf" download="MATERIAL_lecture07.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                        </div>
                        <div className="lectures-cards-container">
                            <Link to={"/Lecture/8"}>
                                <div className="lectures-card">
                                    <h2>Предавање 07</h2>
                                    <p>Arrays & 2D Arrays[Matrix] (Низи и матрици)</p>
                                    <p><a href="lecture08.pdf" download="MATERIAL_lecture08.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/9"}>
                            <div className="lectures-card">
                                <h2>Предавање 08</h2>
                                <p>Functions (Функции)</p>
                                <p><a href="lecture09.pdf" download="MATERIAL_lecture09.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                            </div>
                            </Link>
                            <Link to={"/Lecture/10"}>
                                <div className="lectures-card">
                                    <h2>Предавање 09</h2>
                                    <p>Classes & Objects (Класи и Објекти)</p>
                                    <p><a href="lecture10.pdf" download="MATERIAL_lecture10.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                            <Link to={"/Lecture/11"}>
                                <div className="lectures-card">
                                    <h2>Предавање 10</h2>
                                    <p>Classes & Objects 2 (Класи и Објекти 2)</p>
                                    <p><a href="lecture11.pdf" download="MATERIAL_lecture11.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                        </div>
                        <div className="lectures-cards-container">
                            <Link to={"/Lecture/12"}>
                                <div className="lectures-card" id="lastCard">
                                    <h2>Видео Сумаризација 2</h2>
                                    <p>Сумаризација на сè што учевме досега</p>
                                    <p><a href="lecture12.pdf" download="MATERIAL_lecture12.pdf"><span className="icon"><AiFillFilePdf/></span>МАТЕРИЈАЛИ</a></p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="facts">
                        <h2>Fun Facts</h2>

                        <h3>Python was a hobby project</h3>
                        <p>In December 1989, Python’s creator Guido Van Rossum was looking for a hobby project to keep him occupied in the week around Christmas. He had been thinking of writing a new scripting language that’d be a descendant of ABC and also appeal to Unix/C hackers. He chose to call it Python.</p>
                    
                        <h3>Why it was called Python</h3>
                        <p>The language’s name isn’t about snakes, but about the popular British comedy troupe Monty Python (from the 1970s). Guido himself is a big fan of Monty Python’s Flying Circus. Being in a rather irreverent mood, he named the project ‘Python’. Isn’t it an interesting Python fact?</p>
                        
                        <h3>No braces</h3>
                        <p>Unlike Java and C++, Python does not use braces to delimit code. Indentation is mandatory with Python. If you choose to import it from the __future__ package, it gives you a witty error.</p>
                        
                        <h3>Python influenced JavaScript</h3>
                        <p>Python is one of the 9 languages that influenced the design of JavaScript. Others include AWK, C, HyperTalk, Java, Lua, Perl, Scheme, and Self.</p>

                        <h3>For and While Loops can have else statements</h3>
                        <p>The else statement is not limited to if and try statements. If you add an else block after a for- or while- loop, the statements inside the else block are executed only after the loop completes normally. If the loop raises an exception or reaches a break statement, the code under else does not execute. This can be good for search operations.</p>
                    
                        <h3>People prefer Python over French</h3>
                        <p>According to a recent survey, in the UK in 2015, Python overtook French to be the most popular language taught in primary schools. Out of 10, 6 parents preferred their children to learn Python over French. One of my favorite facts about Python programming.</p>

                        <h3>Big Companies Using Python</h3>
                        <p>Many big names use (or have used) Python for their products/services. Some of these are: NASA, Google, Facebook, Netflix, IBM</p>

                        <h3>Poem Written about Python Programming</h3>
                        <p>Believe it or not, a man named Tim Peters composed a poem called ‘The Zen of Python’ about Python programming. Simply type ‘import this’ into an interpreter to read this poetry.</p>
                    
                        <h3>There are C and Java Variants in Python</h3>
                        <p>Python offers variations for the C and Java programming languages, despite being a self-contained programming language. The C derivative, known as CPython,Jython is Python’s Java implementation.</p>
                    </div>
            <BackToTop/>
            <Footer/>
            </div>
        </>
    )
}

export default Lectures;