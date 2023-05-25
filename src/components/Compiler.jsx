import React, { useEffect } from "react";
import '../styles/CompilerCSS.css';
import Footer from "./Footer";

function Compiler () {

    useEffect(() => {
        document.title = "Учам Python - Компајлер";
      }, []);

    return(
        <>
            <iframe src="https://www.programiz.com/python-programming/online-compiler/" title="Compiler" width="100%" height="800px"></iframe>
            <Footer/>
        </>
    )
}

export default Compiler;