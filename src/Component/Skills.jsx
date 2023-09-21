const Skills = () => {
    const headerStyle = {
      borderBottom: "3px solid #E2FF32",
      padding: "6px",
      height: "35px",
    };
  
    return (
      <>
        <div className="bg-[#4A4A4A] flex h-80 pt-16 justify-evenly text-white">
       
          <p className="" style={headerStyle}>
            Skills
          </p>
          <div className="flex w-3/5 justify-evenly">
            <div className="pr-4">
              <span>Technical Skills</span>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Bootstrap, Tailwind</li>
                <li>JavaScript</li>
                <li>React.js</li>
              </ul>
            </div>
            <div className="border-r border-[#bbbbbb] mx-2 border-2 h-48"></div>
            <div className="pl-5 ">
              <span>Soft Skills</span>
              <ul>
                <li>Growth Mindset</li>
                <li>Teamwork</li>
                <li>Persistence</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Skills;
  