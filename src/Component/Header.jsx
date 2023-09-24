import React from "react";

const Header = () => {
  return (
    <div
      id="home"
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url("img/h1.jpg")` }}
    >
      <div className="absolute inset-0 flex justify-center items-center text-white text-center">
        <div className="bg-gradient-to-b from-black via-transparent to-black opacity-80 w-3/6 h-3/6 rounded-lg p-6">
          <h1 className="text-4xl font-bold mb-4">Settawut Jirakannukun</h1>
          <p className="text-4xl font-bold">Full-stack Developer</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
