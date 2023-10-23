// eslint-disable-next-line no-unused-vars
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="top-0 left-0 right-0 p-4 z-10 fixed flex justify-evenly bg-[#121212]">
      <div
        onClick={() => {
          scrollToSection("home");
        }}
        className="text-white hover:text-orange-400 cursor-pointer"
      >
        Home
      </div>

      <div
        onClick={() => {
          scrollToSection("about");
        }}
        className="text-white hover:text-orange-400 cursor-pointer"
      >
        About Me
      </div>

      <div
        onClick={() => {
          scrollToSection("project");
        }}
        className="text-white hover:text-orange-400 cursor-pointer"
      >
        Proeject
      </div>
    </nav>
  );
};

export default Navbar;
