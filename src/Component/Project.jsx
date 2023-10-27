/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const headerStyle = {
  borderBottom: "3px solid #E2FF32",
  padding: "40px",
  height: "35px",
};

const ListProject = ({ projectName, description, image, Skill, codeLink, demoLink }) => {
  const openCodeLink = () => {
    window.open(codeLink, "_blank"); 
  };

  const openDemoLink = () => {
    window.open(demoLink, "_blank");
  };

  return (
    <div data-aos="zoom-in"    data-aos-duration="2000">
    <div className="border-solid border-2 border-sky-500 rounded-xl m-3 mb-10 px-3 py-10">
      <div className="flex justify-between"></div>
      <span className="m-3 px-3 text-2xl  items-center flex font-bold">
        {projectName}
      </span>
      <div className="flex mt-6 m-3">
        <img src={image} className="p-3 rounded-[20px] w-2/3" alt={projectName} />
        <div className="flex flex-col">
          <p className="text-lg leading-relaxed">{description}</p>
          <div className="m-6 grid grid-cols-2">
            {Skill.map((tech, index) => (
              <span
                key={index}
                className=" rounded-xl  text-[#E2FF32] bg-[#16254c] p-1 m-3 flex justify-center font-bold"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex gap-5 justify-around">
            <button
              className="bg-[#121212] text-red-400 h-auto w-auto p-3 rounded-xl border-solid border-2 border-red-200  hover:bg-red-200 hover:text-[#121212] text-lg font-semibold"
              onClick={openCodeLink} 
            >
              View code
            </button>
            <button
              className="bg-[#121212] text-red-400 h-auto w-auto p-3 rounded-xl border-solid border-2 border-red-200 hover:bg-red-200 hover:text-[#121212] text-lg font-semibold"
              onClick={openDemoLink} 
            >
              Demo App
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

const Project = () => {
  return (
    <>
      <div
        className="bg-[#18181b] flex h-auto pt-10 justify-evenly text-white"
        id="project"
      >
        <p className="pb-3 font-bold text-xl" style={headerStyle}>
          Projects
        </p>
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="w-[65%] flex flex-col p-6">
          <ListProject
            projectName="Keep fit (In progress)"
            description="This is a web application related to exercise. It will be used to track the user's exercise by following CRUD (Create, Read, Update, Delete) principles"
            image="../img/keep-fit.png"
            Skill={["Javascript", "React Js", "MongoDB", "Tailwind"]}
            codeLink="https://github.com/Kurootoy/keepfit-react"
            demoLink="https://keepfit-demo.vercel.app/" 
          />
          <ListProject
            projectName="Portfolio React"
            description="I created a static portfolio website using React and Tailwind CSS. This website reflects my skills and showcases various mini-projects"
            image="../img/Resume.png"
            Skill={["Javascript", "React Js", "Tailwind"]}
            codeLink="https://github.com/Kurootoy/Resume_react"
            demoLink="/" 
          />
        
        </div>
      </div>
    </>
  );
};

export default Project;
