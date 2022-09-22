import React from "react";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGithub, AiOutlineMail } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

export default function About() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center flex-row">
        <div >
        <h2 className="uppercase">hola 👋, soy eduardo sequeira</h2>
        <h2 className="uppercase">full stack Developer</h2>
        <p className="p-10 text-gray-600 max-w-[50%] m-auto">Soy Full stack developer con orientación al Front-end con capacidad de realizar 
        y desarrollar proyectos web Soy una persona con facilidad de adaptación y capacidad de trabajar en equipo para lograr
        los objetivos. Disfruto mucho de enseñar y seguir aprendiendo. </p>
        <div className="flex text-center justify-center p-5">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black m-5">
                    <FaLinkedinIn size={25}/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black m-5">
                    <AiOutlineGithub size={25}/>
                        </div>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer text-black m-5">
                    <AiOutlineMail size={25}/>
                        </div>

                    </div>
        </div>
        {/* <Image src={fachero} alt="eduardo" width={1300} height={1300}/> */}
      </div>
    </div>
  );
}
