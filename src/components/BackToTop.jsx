import React, { useState, useEffect } from "react";
import '../styles/BackToTopCSS.css';
import { HiOutlineArrowSmUp } from "react-icons/hi";


function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const show = scrollY > 300;
        setShowButton(show);
    };

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <>
                {showButton && (
                    <button className="bttbtn" onClick={scrollToTop}>
                    <HiOutlineArrowSmUp/>
                    </button>
                )}
            {/* <button className="bttbtn"><HiOutlineArrowSmUp/></button> */}
        </>
    );

}

export default BackToTop;