import React from 'react';
import { machines } from '../assets';

function Middle() {
  return (
    <div className='mx-5 items-center justify-center flex flex-col mt-8'>
      <p className='font-medium'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
      <img 
        src={machines} 
        alt = 'machines'
        className='w-3/4 h-auto self-center'
        />
      <p className='font-medium'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      <div className='border-t-2 border-red-500 w-full mt-4 mx-8 self-center'></div>
      <p className='p-4 font-bold'>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
      <p className='my-2 text-center'>CHEMICALS & PROCESS <span className='text-red-500'>|</span> POWER <span className='text-red-500'>|</span> WATER & WASTE WATER <span className='text-red-500'>|</span> OILS & GAS <span className='text-red-500'>|</span> PHARMA <span className='text-red-500'>|</span> SUGARS & DISTILLERIES <span className='text-red-500'>|</span> PAPER & PULP <span className='text-red-500'>|</span> MARINE & DEFENCE <span className='text-red-500'>|</span> METAL & MINING <span className='text-red-500'>|</span> FOOD & BEVERAGE <br /> PETROCHEMICAL & REFINERIES <span className='text-red-500'>|</span> SOLAR <span className='text-red-500'>|</span> BUILDING <span className='text-red-500'>|</span> HVAC <span className='text-red-500'>|</span> FIRE FIGHTING <span className='text-red-500'>|</span> AGRICULTURE & RESIDENTIAL</p>
    </div>
  )
}

export default Middle