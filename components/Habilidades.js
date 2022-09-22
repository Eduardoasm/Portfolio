import React from "react";
import fachero from "../imagenes/habilidades/foto.jpg";
import Image from "next/image";
import html from "../imagenes/habilidades/html.png";
import css1 from "../imagenes/habilidades/css1.png";
import js from "../imagenes/habilidades/js.png";
import react from "../imagenes/habilidades/react.png";
import redux from "../imagenes/habilidades/redux.jpg";
import nodejs from "../imagenes/habilidades/nodejs.png";
import postgre from "../imagenes/habilidades/postgre.png";
import express from "../imagenes/habilidades/express.jpg";
import mongo from "../imagenes/habilidades/mongo.png";
import github from "../imagenes/habilidades/github.png";
import git from "../imagenes/habilidades/git.png";
import scrum from "../imagenes/habilidades/scrum.png";
import slack from "../imagenes/habilidades/slack.png";
import jira from "../imagenes/habilidades/jira.png";

export default function About() {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto mt-20 flex flex-col justify-center h-full">
        <h2 className="text-xl uppercase mb-10">Tecnologias</h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 p-5 mb-20">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={css1} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={js} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={react} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={redux} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Redux</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={nodejs} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={postgre} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={mongo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={express} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5">
          <h2 className="text-xl uppercase mb-10">Herramientas</h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={github} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>GitHub</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={git} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Git</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={scrum} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Scrum</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={jira} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Jira</h3>
                </div>
              </div>
            </div>
            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={slack} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>Slack</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
