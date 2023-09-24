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
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}
        className="text-white hover:text-orange-400"
      >
        Home
      </a>

      <a
        href="/about"
        onClick={(e) => {
          e.preventDefault(); 
          scrollToSection("about");
        }}
        className="text-white hover:text-orange-400"
      >
        About
      </a>

      <a
        href="/skills"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("skills");
        }}
        className="text-white hover:text-orange-400"
      >
        Skills
      </a>
    </nav>
  );
};

export default Navbar;
