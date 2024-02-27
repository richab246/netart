import React from 'react';
import { FaPhoneAlt, FaFacebook, FaGlobe } from "react-icons/fa";

function Footer() {
  return (
    <div className='m-2 bg-red-600 flex flex-col sm:flex-row justify-evenly p-8'>
      <div className='flex items-center gap-2'>
      <FaPhoneAlt className='bg-white text-red-600 p-1 rounded-full'/>
        <p className='text-white'>Toll free 1800 200 1234</p>
      </div>
      <div className='flex items-center gap-2'>
        <FaFacebook className='text-white'/>
        <p className='text-white'>www.facebook.com/cripumps</p>
      </div>
      <div className='flex items-center gap-2'>
        <FaGlobe className='text-white'/>
        <p className='text-white'>www.crigroups.com</p>
      </div>
    </div>
  )
}

export default Footer