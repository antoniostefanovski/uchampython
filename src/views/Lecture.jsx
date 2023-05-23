import React, { useEffect, useState } from 'react';
import { AiFillFilePdf, AiFillHome } from "react-icons/ai";
import { MdOutlineKeyboardReturn } from "react-icons/md";
import { useParams } from 'react-router';
import '../styles/LectureCSS.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

const lectureDetailsList = [
    {
        name: "Како да работиме со Python",
        videoUrl: "https://www.youtube.com/embed/thFwAjmIJLw",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=1ZI7gZmCEto4Sv8KS4BgqCndnWAnMgEL4"
    },
    {
        name: "Introduction (Запознавање со Python)",
        videoUrl: "https://www.youtube.com/embed/gJYKrtnO21g",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=1ZI7gZmCEto4Sv8KS4BgqCndnWAnMgEL4"
    },
    {
        name: "Variables (Варијабли)",
        videoUrl: "https://www.youtube.com/embed/gHxN89lJk6M",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=18rhy4p4mxxHQDvaYQLI1MAZJhgLsNGK1"
    },
    {
        name: "Operators (Оператори)",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=1sxBMiTDBUEX9koSo9hxRmGgv3QfakMEs"
    },
    {
        name: "Math Library",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=1DlLHZFP1l8IKKf90CC4cRvELW-elB3Yt"
    },
    {
        name: "If..Else, While Loops, For Loops",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "lecture05.pdf"
    },
    {
        name: "Сумаризација на сè што учевме досега",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "lecture06.pdf"
    },
    {
        name: "Lists, Tuples & Sets",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=1mNq1QUVBVOMyMcZUnVO_e0_VDgZ2CK2e"
    },
    {
        name: "Arrays & 2D Arrays[Matrix] (Низи и матрици)",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=1xqm0tNxlxzP12X_wN-p85c9SHWvdiYLi"
    },
    {
        name: "Functions (Функции)",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "https://drive.google.com/uc?export=download&id=15FZz1hG20itmiumODgrwoVZUbGH733kQ"
    },
    {
        name: "Classes & Objects (Класи и Објекти)",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "lecture10.pdf"
    },
    {
        name: "Classes & Objects 2 (Класи и Објекти 2)",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "lecture11.pdf"
    },
    {
        name: "Сумаризација на сè што учевме досега",
        videoUrl: "https://www.youtube.com/embed/EgqUJOudrcM",
        pdfMaterial: "lecture12.pdf"
    },
]

function Lecture() {

    const [state, setState] = useState({});
    const { id } = useParams();

    useEffect(() => {
        if (lectureDetailsList.length - 1 < id || id < 0) return;

        setState({ lectureDetails: lectureDetailsList[Number(id)]});

        document.title = `Учам Python - Предавање ${id}`;
    }, []);

    if (!Boolean(state.lectureDetails)) return;

    return (
        <>
            <div className="lecture-container">
                <div className="lecture-menu">
                    <h3><Link to={"/Lectures"}><span><MdOutlineKeyboardReturn/></span></Link> <Link to={"/"}><span><AiFillHome/></span></Link></h3>
                </div>
                 <div className='lecture-info'>
                    <h1>Предавање: <span>{state.lectureDetails.name}</span></h1>
                    <br />
                    <iframe width="800px" height="520px" src={state.lectureDetails.videoUrl} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <p><a href={state.lectureDetails.pdfMaterial}><span className="icon"><AiFillFilePdf/></span>Дополнителни материјали</a></p>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default Lecture;