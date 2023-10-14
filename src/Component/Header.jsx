import React from "react";
import ExampleComponent from "../../testanimation";
import "../Component/header.css";

const Header = () => {
  return (
    <>
      <div className="">
        <header className="min-h-screen flex items-center justify-center pt-8 gap-8 bg-[#18181b]">
          <div className="content text-center border-solid border-2 border-sky-500 rounded-xl w-3/5 h-3/5">
            <h1>
              Hi, I'm <span>Miw</span>
              <br /> Web Developer
            </h1>
            <div></div>

            <p className="text-lg mb-8 text-[#ccc]">
              I was interested in web apps and applications.
              <br /> I am eager to learn and grow in this field, and I am
              excited to collaborate with experienced team members.
            </p>
            <div>
              <a
                href="https://www.linkedin.com/in/settawut-jirakannukun-354080285/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-10 h-10 text-[#E2FF32] "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 15 15"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    clipRule="evenodd"
                  />
                  <path d="M3 5.012H0V15h3V5.012Z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="">
            <span className="blur"></span>
            <span className="blur"></span>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
