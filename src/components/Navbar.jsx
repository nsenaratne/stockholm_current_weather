import React from 'react';

import logo from '../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className='w-full flex py-2 justify-center items-center navbar bg-sky-100'>
      <img src={logo} alt='Weather' className='w-[-270px] h-[72px] ' />
    </nav>
  );
};

export default Navbar;
