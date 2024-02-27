import React from 'react';
import { logo } from '../assets';

function Header() {
  return (
    <div className='w-full flex justify-center'>
      <img 
        src={logo} 
        alt="logo"
        className='w-[350px] h-[110px]'
        />
    </div>
  )
}

export default Header