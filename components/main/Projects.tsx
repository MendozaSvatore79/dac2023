import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Modulos Integrados
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Cifrados Otp con Seguridad"
          description="El usuario tendra la certeza de que sus datos estan siendo encriptados por medio del metodo Otp ."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Chat En Tiempo Real"
          description="El usuario de la plataforma SGUP tendra la opcion para conectarse con el personal de soporte tecnico para cualquier incoveniente ."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Buzon de Correos Electronicos de Soporte"
          description="El usuario tendra la funcion disponible de enviar mensaje de soporte mediante correo electronico ."
        />
      </div>
    </div>
  );
};

export default Projects;
