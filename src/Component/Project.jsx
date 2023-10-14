/* eslint-disable react/prop-types */
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const headerStyle = {
  borderBottom: "3px solid #E2FF32",
  padding: "6px",
  height: "35px",
};
const HorizontalLine = () => (
  <hr className="my-6 border-[#bbbbbb] w-full mx-auto border-[1.5px]" />
);

const ListProject = ({
  title,
  date,
  projectName,
  description,
  image,
  technologies,
}) => (
  <div>
    <div className="flex justify-between">
      <span>{title}</span>
      <span className="italic">{date}</span>
    </div>
    <span>Projectname: {projectName}</span>
    <div className="flex mt-6">
      <img src={image} className="p-3 rounded-[20px] w-2/3" alt={projectName} />
      <div className="flex flex-col">
        <p>{description}</p>
        <div className="m-6 grid grid-cols-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-red-400 rounded-xl p-1 m-3">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-5 justify-around">
          <button className="bg-[#121212] text-[#E2FF32] h-auto w-auto p-3 rounded-xl  hover:bg-[#E2FF32] hover:text-[#121212] text-lg font-semibold">
            View code
          </button>
          <button className="bg-[#121212] text-[#E2FF32] h-auto w-auto p-3 rounded-xl  hover:bg-[#E2FF32] hover:text-[#121212] text-lg font-semibold">
            App
          </button>
        </div>
      </div>
    </div>
    <HorizontalLine />
  </div>
);

const Project = () => {
  return (
    <>
      <div className="bg-[#d9d9d9] flex h-auto pt-10 justify-evenly text-black">
      <p className="border-b-4  font-bold text-xl" style={headerStyle}>
          Project
        </p>

        <div className="w-3/5 flex flex-col p-6">
          <ListProject
            title="1st Project"
            date="Aug2023-Oct2023"
            projectName="Keep fit"
            description="This is a web application. Related to exercise, it will be used to track the user's exercise using CRUD principles."
            image="../img/keep-fit.png"
            technologies={[
              "Javascript",
              "React Js",
              "Javascript",
              "Javascript",
            ]}
          />
          <ListProject
            title="1st Project"
            date="Aug2023-Oct2023"
            projectName="Keep fit"
            description="This is a web application. Related to exercise, it will be used to track the user's exercise using CRUD principles."
            image="../img/keep-fit.png"
            technologies={[
              "Javascript",
              "React Js",
              "Javascript",
              "Javascript",
            ]}
          />

<FontAwesomeIcon icon="fa-brands fa-linkedin" />this is icon
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
    <path fill-rule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clip-rule="evenodd"/>
    <path d="M3 5.012H0V15h3V5.012Z"/>
  </svg>
    
          {/* Repeat the Project component for other projects */}
        </div>
      </div>
    </>
  );
};

export default Project;
