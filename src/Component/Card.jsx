import React from 'react';
import ExampleComponent from '../../testanimation';

const SkillSection = ({ title, skills }) => (
  <div className="bg-red-400 w-auto h-auto gird grid-cols-2  rounded-xl m-2">
    <span>{title}</span>

      {skills.map((skill, index) => (
        <Skill key={index} {...skill} />
      ))}
  
  </div>
);

const Skill = ({ name, iconSrc, }) => (
  <div className="h-auto  col-span-1  bg-yellow-400 border-solid border-2 border-sky-500  rounded-2xl p-2 m-2">
 
    <span>{name}</span>
    <img src={iconSrc} alt={`${name} Logo`} className="w-10 h-10" />

  </div>
);




const Card = () => {
  const frontendSkills = [
    { name: 'HTML', iconSrc: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-1024.png' },
    { name: 'CSS', iconSrc: 'https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-1024.png' },
    { name: 'Bootstrap', iconSrc: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' },
    { name: 'Tailwind', iconSrc: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png' },
    { name: 'Javascript', iconSrc: 'https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-1024.png' },
    { name: 'React', iconSrc: 'https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-1024.png' },
    // ... other skills
  ];
  const backendSkills=[
    {name:'node.js',iconSrc:''}
  ]

  return (
    <>
      <div className="bg-gray-200 flex flex-col items-center pb-24 pt-3">
        <div className='m-[20px] flex items-center flex-col'>
        <h2>Skills</h2>
        <span>This is my Skills</span>
        </div>
        <div className="flex gap-14">
          <SkillSection title="Frontend" skills={frontendSkills} />
          <SkillSection title="Backend" skills={backendSkills} />
          {/* Add more sections as needed */}
        </div>
      </div>
      <ExampleComponent/>
    </>
  );
};

export default Card;
