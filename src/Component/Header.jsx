/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";


const Header = () => {
  return (
    <div className="" id="home">
      <header className="min-h-screen flex items-center justify-center pt-8 gap-8 bg-[#18181b]">
      <div className="">
            <span className="blur"></span>
            <span className="blur"></span>
          </div>
        <div className="content text-center border-solid border-2 border-sky-500 rounded-xl w-3/5 h-3/5 p-5">
          <h1>
            Hi, I'm <span>Miw</span>
            <br /> Web Developer
          </h1>
          <div></div>
          <p className="text-xl mb-6 text-[#ccc] leading-relaxed">
          I'm interested in web app development and love picking up new skills regularly<br/>I'm excited about teaming up with someone experienced. 
            <br />I am ready to learn from my team members to continuously improve myself. 🚀
          </p>
          <div className="bodyIcon flex justify-center items-center animate-bounce">
            {socialLink(
              "https://www.linkedin.com/in/sattawut/",
              "linkedin-square",
              "#0072b1"
            )}
            {socialLink("https://github.com/Kurootoy", "github", "#0072b1")}
          </div>
        </div>
      
      </header>
    </div>
  );
};

const socialLink = (href, iconName, color) => (
  <a
    className="m-3 rounded-full box-content w-24 h-24 flex flex-col justify-center items-center text-center  transition duration-500 bg-transparent text-var(--color) text-2xl"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{ "--color": color }}
  >
    <box-icon name={iconName} type="logo" size="lg" color={color}></box-icon>
  </a>
);

export default Header;
