import React from 'react';
import { award, photo } from '../assets';

function Award() {
  return (
    <div className='flex flex-col items-center w-full justify-around mt-5 sm:flex sm:flex-row'>
      <div className='w-full sm:w-1/2 justify-center items-center flex'>
        <img 
          src={award} 
          alt='award'
          className='w-[300px] h-[500px]'
          />
      </div>
      <div className='w-full px-4 sm:w-1/2'>
        <h3 className='font-bold'>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time</h3>
        <p className='my-4 ml-5'>
        <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li> 
        <li>
        C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. 
        </li>
        </p>
        <img 
          src={photo} 
          alt='photo'
          className='w-full h-[350px]'
          />
        <p>	Government of India has awarded the <span className='font-bold'>"National Energy Conservation Award 2018".</span> Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
      </div>
    </div>
  )
}

export default Award