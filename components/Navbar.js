// import Link from "next/link";
import React from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { useState } from "react"
import * as Scroll from 'react-scroll';



// import s from "./navbar.module.css"

function Navbar() {

    let Link = Scroll.Link
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


    return ( 
        <div className='fixed w-full h-20 shadow-2xl z-[100]'>
            <div className='flex justify-end items-center w-full h-full px-2 2xl:px-16'>
            <ul className='hidden md:flex '>
                <Link activeClass="active" to="sobre mi" spy={true} smooth={true} offset={50} duration={500} >
                    <li className="ml-10 text-sm text-black uppercase hover:border-b">Sobre mi</li>
                </Link>
                <Link activeClass="active" to="habilidades" spy={true} smooth={true} offset={50} duration={500} >
                    <li className="ml-10 text-sm text-black uppercase hover:border-b">Habilidades</li>
                </Link>
                <Link activeClass="active" to="proyectos" spy={true} smooth={true} offset={50} duration={500} >
                    <li className="ml-10 text-sm text-black uppercase hover:border-b">Proyectos</li>
                </Link>
                <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={50} duration={500}>
                    <li className="ml-10 text-sm text-black uppercase hover:border-b">Contacto</li>
                </Link>
            </ul>
            <div onClick={handleNav} className="md:hidden text-black">
            <AiOutlineMenu size={25} />
            </div>
            </div>
            <div className={nav ? "fixed left-0 top-0 w-full h-screen bg-slate-900/80 " : ""}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"}>
                    <div className="flex justify-end">
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black">
                    <AiOutlineClose/>
                        </div>
                    </div>
                    <div>
                    <ul className='mt-5 uppercase text-black'>
                <Link activeClass="active" to="sobre mi" spy={true} smooth={true} offset={50} duration={500}>
                    <li className="py-5">Sobre mi</li>
                </Link>
                <Link activeClass="active" to="habilidades" spy={true} smooth={true} offset={50} duration={500}>
                    <li className="py-5">Habilidades</li>
                </Link>
                <Link activeClass="active" to="proyectos" spy={true} smooth={true} offset={50} duration={500} >
                    <li className="py-5">Proyectos</li>
                </Link>
                <Link activeClass="active" to="contacto" spy={true} smooth={true} offset={50} duration={500}>
                    <li className="py-5">Contacto</li>
                </Link>
            </ul>
                    </div>
                    <div className="mt-40 text-center text-black uppercase ">
                        Me puedes visitar en:
                    </div>
                    <div className="flex text-center justify-center p-5">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-red text-black m-5">
                    <a href="https://www.linkedin.com/in/eduardo-sequeira/" target="_blank" rel="noopener noreferrer">
                     <FaLinkedinIn size={25} /> 
                    </a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black m-5">
                        <a href="https://github.com/Eduardoasm" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub size={25}/>
                    </a>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black m-5">
                    <AiOutlineMail size={25}/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Navbar;