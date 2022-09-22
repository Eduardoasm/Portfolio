import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import image1 from "../imagenes/Proyecto1/musicfyApp-pfGroup.png"
import image2 from "../imagenes/Proyecto1/foto1pi.png"

import ProjectItem from './ProyectoItem';

const Projects = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto mt-20 flex flex-col justify-center h-full">
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h1 className="text-xl uppercase mb-10">
          Proyectos
        </h1>
        <div className='grid md:grid-cols-2 gap-8 mb-20'>
          <ProjectItem
            title='Music App'
            backgroundImg={image1}
            projectUrl='https://app-musicfy.vercel.app/'
            tech='React JS'
          />
          <ProjectItem
            title='Recipe App'
            backgroundImg={image2}
            projectUrl='https://pi-recipe-book.vercel.app/'
            tech='React JS'

          />
</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Projects;