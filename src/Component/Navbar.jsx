import React from 'react';

const Navbar = () => {
  return (
    // <nav className="relative z-10">
          <nav className="absolute top-0 left-0 right-0  p-4 z-10">
      <div className="blur-sm absolute inset-0 backdrop-blur-sm  opacity-50 w-full h-full"></div>
      <div className="flex justify-evenly p-4 relative">
        
      <a href='/' className='text-white hover:text-orange-400'>Home</a>
        <a href='/' className='text-white hover:text-orange-400'>About</a>
        <a href='/' className='text-white hover:text-orange-400'>Education</a>
     
      </div>
    </nav>
  );
};

export default Navbar;
