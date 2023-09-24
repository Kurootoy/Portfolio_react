const Skills = () => {
  const headerStyle = {
    borderBottom: "3px solid #E2FF32",
    padding: "6px",
    height: "35px",
  };

  return (
    <>
      <div id="skills" className="bg-[#4A4A4A] flex h-80 pt-16 justify-evenly text-white">
        <p className="border-b-4 border-solid" style={headerStyle}>
          Skills
        </p>
        <div className="flex w-3/5 justify-evenly">
          <div className="pr-4">
            <span>Technical Skills</span>
            <ul className="list-disc">
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap, Tailwind</li>
              <li>JavaScript</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="border-r border-[#bbbbbb] mx-2 border-2 h-48"></div>
          <div className="pl-5">
            <span>Soft Skills</span>
            <ul className="list-disc">
              <li>Growth Mindset</li>
              <li>Teamwork</li>
              <li>Persistence</li>
            </ul>
          </div>
        </div>
      </div>

      {/* This is section Project */}
      <div className="bg-[#4A4A4A] h-auto text-white flex items-center  flex-col">
        <div className="border-r border-[#bbbbbb] border-2 w-5/6"></div>
      </div>

      <div className="bg-[#4A4A4A] flex h-80 pt-10 justify-evenly text-white">
        <p className="border-b-4 border-solid " style={headerStyle}>
          Project
        </p>
        <div className=" w-3/5 flex flex-col">
          <h2>1st Project </h2>
          <p>
            Projectname:<br></br>Describe your project at school, what you
            learned, what useful skills you have acquired etc.
          </p>
          <div className="bg-orange-300 m-4 h-40">This is image project</div>
          <h2>2nd Project </h2>
          <p>
            Projectname:<br></br>Describe your project at school, what you
            learned, what useful skills you have acquired etc.
          </p>
          <div className="bg-orange-300 m-4 h-40">This is image project</div>
        </div>
        
      </div>
    </>
  );
};

export default Skills;
