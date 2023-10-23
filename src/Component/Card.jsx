/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
const headerStyle = {
  borderBottom: "3px solid #E2FF32",
  padding: "40px",
  height: "35px",
};
const SkillSection = ({ title, skills }) => (
  <div className="rounded-xl w-auto  ">
    <span className="flex justify-center text-xl font-bold">{title}</span>
    <div className="w-auto h-auto grid grid-cols-2 rounded-xl m-2">
      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
    </div>
  </div>
);

const Skill = ({ name, iconSrc }) => (
  <div className=" col-span-1  rounded-2xl p-2 m-3 flex justify-around items-center">
    <span>{name}</span>
    <img src={iconSrc} alt={`${name} Logo`} className="w-10 h-10" />
  </div>
);

const Card = () => {
  const frontendSkills = [
    {
      name: "HTML",
      iconSrc:
        "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png",
    },
    {
      name: "CSS",
      iconSrc:
        "https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png",
    },
    {
      name: "Bootstrap",
      iconSrc:
        "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    },
    {
      name: "Tailwind",
      iconSrc:
        "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
    },
    {
      name: "Javascript",
      iconSrc:
        "https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png",
    },
    {
      name: "React",
      iconSrc:
        "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-1024.png",
    },
    // ... other skills
  ];

  const backendSkills = [
    {
      name: "Node.js",
      iconSrc:
        "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-1024.png",
    },
    {
      name: "SQL",
      iconSrc: "https://cdn-icons-png.flaticon.com/512/2772/2772128.png",
    },
    {
      name: "MongoDB",
      iconSrc:
        "https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-1024.png",
    },
    // ... other backend skills
  ];
  const Tools = [
    {
      name: "VS Code",
      iconSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
    },
    {
      name: "Figma",
      iconSrc:
        "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-1024.png",
    },
    {
      name: "Postman",
      iconSrc: "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
    },
    {
      name: "Github",
      iconSrc:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    },
    // ... other backend skills
  ];

  return (
    <>
      <div className="bg-[#18181b] flex flex-col items-center pb-24 pt-3 text-[white] ">
        <div className="m-4 flex items-center flex-col">
          <div className=" font-bold p-3 mb-5 border-b-4  pb-3  text-2xl" style={headerStyle} >Skills</div>
    
        </div>
        <div className="flex gap-14">
        <div data-aos="fade-right" data-aos-duration="2000"><SkillSection title="Frontend" skills={frontendSkills} /></div>
         <div data-aos="fade-up" data-aos-duration="2000"> <SkillSection title="Backend" skills={backendSkills} /></div>
         <div data-aos="fade-left" data-aos-duration="2000"> <SkillSection title="Tools" skills={Tools} /></div>
          {/* Add more sections as needed */}
          <div>
            <span className="blur"></span>
            <span className="blur"></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
