import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
import '../styles/AboutCSS.css';
import finkiLogo from '../assets/finkiLogo.png';
import Antonio from '../assets/Antonio.png';
import Enes from '../assets/Enes.jpg';
import Ivan from '../assets/Ivan.jpg';
import Teodora from '../assets/Teodora.png';
import { AiFillLinkedin } from "react-icons/ai";
import { FaInstagramSquare, FaGithubSquare, FaRegCheckCircle, FaPeopleArrows } from "react-icons/fa";
GiProgression
import { GiProgression } from "react-icons/gi";


function About () {

    useEffect(() => {
        document.title = "Учам Python - За нас";
      }, []);

    return (
        <>
            <div className="about-container">
                <div className="about-navigation">
                    <Navbar/>
                    <div className="title-header">
                        <div className="title-content-container">
                            <Fade delay={300} duration={1500} when="mount">
                                <h1>Кои сме ние</h1>
                                <hr/>
                                <p>Курсот е креиран со цел да го направи програмирањето достапно и забавно за секого без оглед на 
                                    нивното претходно искуство.</p>
                                <p>Ние веруваме дека учењето треба да биде практично и интерактивно, поради што нашиот курс е дизајниран да вклучува многу практични вежби и примери од реалниот свет.</p>
                                <p>Платформата <span className="paragraph-text">Учам Python</span> е направена од страна на студенти на <span className="paragraph-text">Факултетот за информатички науки и компјутерско инженерство</span> - Скопје како проект под менторство на проф. д-р Владимир Трајковиќ.</p>
                                <p>Нашата визија беше да креираме платформа која ќе биде од корист на сите училишта во Македонија, каде учениците можат да ги користат бесплатните материјали за да научат програмирање во современиот јазик <span className="paragraph-text">Python</span>.</p>
                            </Fade>
                        </div>
                        <div className="finki-logo-container">
                            <Fade delay={300} duration={1500} when="mount">
                                <img src={finkiLogo} alt="finkiLogo"/>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="theteam-header">
                    <Fade delay={300} duration={1500} direction="left" when="mount">
                        <h1>Запознајте се со тимот на Учам <span className="paragraph-text">Python</span></h1>
                        <hr />
                    </Fade>
                </div>
                <div className="theteam-container">
                    <div className="theteam-cards">
                        <img src={Antonio} alt="Antonio" />
                        <p>Антонио Стефановски</p>
                        <p><span className="icon-contact"><a href="https://www.linkedin.com/in/antonio-stefanovski-6bb534238/" target="_blank"><AiFillLinkedin/></a></span>  <span className="icon-contact"><a href="https://www.instagram.com/_astefanovsky_/" target="_blank"><FaInstagramSquare/></a></span></p>
                    </div>
                    <div className="theteam-cards">
                        <img src={Enes} alt="Enes" />
                        <p>Енес Сејфовски</p>
                        <p><span className="icon-contact"><a href="https://www.linkedin.com/in/enes-sejfovski-866607272/" target="_blank"><AiFillLinkedin/></a></span>  <span className="icon-contact"><a href="https://www.instagram.com/eness_9999/" target="_blank"><FaInstagramSquare/></a></span></p>
                    </div>
                    <div className="theteam-cards">
                        <img src={Ivan} alt="Ivan" />
                        <p>Иван Николов</p>
                        <p><span className="icon-contact"><a href="https://www.linkedin.com/in/ivan-nikolov-09b667228/" target="_blank"><AiFillLinkedin/></a></span>  <span className="icon-contact"><a href="https://www.instagram.com/nikooloov/" target="_blank"><FaInstagramSquare/></a></span></p>
                    </div>
                    <div className="theteam-cards">
                        <img src={Teodora} alt="Teodora" />
                        <p>Теодора Саздовска</p>
                        <p><span className="icon-contact"><a href="https://www.linkedin.com/in/teodora-sazdovska-483373269/" target="_blank"><AiFillLinkedin/></a></span>  <span className="icon-contact"><a href="https://www.instagram.com/t.sazdovska/" target="_blank"><FaInstagramSquare/></a></span></p>
                    </div>
                </div>
                <div className="vision-scope">
                    <Fade delay={500} duration={2000} when="mount">
                        <h1>Визија на <span className="paragraph-text">проектот</span></h1>
                        <hr />
                    </Fade>
                    <div className="cards-container">
                        <div className="card">
                            <Fade delay={500} duration={2000} when="mount">
                            <h2 className="icon-card"><FaRegCheckCircle/></h2>
                            <h2>Достапност</h2>
                            <p>Целта на овој проект беше да овозможиме извор на информации и материјали кои ќе бидат достапни за сите</p>
                            </Fade>
                        </div>
                        <div className="card">
                            <Fade delay={500} duration={2000} when="mount">
                            <h2 className="icon-card"><GiProgression/> </h2>
                            <h2>Ефективност</h2>
                            <p>Направивме материјали дизајнирани на начин на кој ќе може да бидат лесни за сфаќање и да придонесат во ефективно учење</p>
                            </Fade>
                        </div>
                        <div className="card">
                            <Fade delay={500} duration={2000} when="mount">
                            <h2 className="icon-card"><FaPeopleArrows/> </h2>
                            <h2>Community</h2>
                            <p>Сакаме да направиме мрежа од луѓе каде сите учат од нашата платформа и стекнуваат знаења за програмирањето</p>
                            </Fade>
                        </div>
                    </div>
                    {/* <div>
                        <a href="raspored.pdf" download="Raspored Finki">Finki</a>
                    </div> */}
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default About;