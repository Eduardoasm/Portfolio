import React from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn, FaFileDownload } from "react-icons/fa"
import fachero from "../imagenes/habilidades/foto.jpg"
import {ImFolderDownload} from "react-icons/im"


export default function About() {
  return (
    <div className="w-full h-screen text-center" id="sobre mi">
      <div className="flex max-w-[1240px] sm:flex-row w-full h-full p-2 mt-500 justify-center items-center flex-col">
        <div className="flex flex-col">
          <div className="p-5 mt-50">
        <Image className="bg-red-200 rounded" src={fachero} alt="eduardo" width={300} height={300}/>
          </div>
        <h2 className="uppercase text-black">hola 👋, soy eduardo sequeira</h2>
        <h2 className="uppercase text-black">full stack Developer</h2>
        <p className="p-5 sm:max-w-[50%] text-gray-600 max-w-[70%] m-auto text-justify">Soy Full stack developer con orientación al Front-end con capacidad de realizar 
        y desarrollar proyectos web Soy una persona con facilidad de adaptación y capacidad de trabajar en equipo para lograr
        los objetivos. Disfruto mucho de enseñar y seguir aprendiendo. </p>
        <div className="flex justify-center items-center align-center flex-col p-[-5] text-black">
          <p>Visualizar CV</p>
        <div className="p-1 cursor-pointer">
        <a href="https://drive.google.com/file/d/1y6PASzQlQsoojHC2WdxQR2Yfc_55MzCx/view" target="_blank" rel="noopener noreferrer" download="Eduardo_Sequeira_CV.pdf"> 
        <FaFileDownload size={40} />
        </a>
        </div>
        </div>
        <div className="flex text-center justify-center ">
                    <div className="rounded-full shadow-lg bg-[#ecf0f3] shadow-gray-400 p-3 cursor-pointer text-black m-5">
                    <a href="https://www.linkedin.com/in/eduardo-sequeira/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn size={30}/>
                    </a>
                        </div>
                        <div className="rounded-full shadow-lg bg-[#ecf0f3] shadow-gray-400 p-3 cursor-pointer text-black m-5">
                    <a href="https://github.com/Eduardoasm" target="_blank" rel="noopener noreferrer">
                    <AiOutlineGithub  size={30}/>
                    </a>
                        </div>
                        <div className="rounded-full shadow-lg bg-[#ecf0f3] shadow-gray-400 p-3 cursor-pointer text-black m-5">
                    <AiOutlineMail size={30}/>
                        </div>

                    </div>
        </div>
      </div>
    </div>
  );
}
