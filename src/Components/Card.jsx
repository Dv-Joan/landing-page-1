import React from 'react';
import calendar from './Images/calendar.png';
import report from './Images/report.png';
import correct from './Images/correct.png';

function Card() {
  return (
    <div>
      <div className='grid gap-20 grid-cols-3 pl-20 font-Roboto'>
        <div className='border-[1px]  border-purple-400 cursor-pointer w-48 backdrop-blur-xl bg-transparent bg-opacity-70  rounded-3xl  py-7 drop-shadow-xl ease-out duration-300 hover:scale-125 '>
          <div className='px-12'>
            <img src={calendar} alt='Image-1' className='pb-5 w-20 ' />
          </div>
          <h2 className='text-center text-black tracking-wide'>
            Rapid Implementation
          </h2>
        </div>
        <div className='border-[1px] border-purple-400 cursor-pointer w-48 backdrop-blur-xl bg-transparent bg-opacity-70  rounded-3xl  py-7 drop-shadow-xl ease-out duration-300 hover:scale-125  '>
          <div className='px-12'>
            <img src={report} alt='Image-1' className='pb-5 w-20 ' />
          </div>
          <h2 className=' text-black text-center tracking-wide'>
            Post-Implementation change reports
          </h2>
        </div>
        <div className='border-[1px] border-purple-400 cursor-pointer w-48 backdrop-blur-xl bg-transparent bg-opacity-70  rounded-3xl  py-7 drop-shadow-xl ease-out duration-300 hover:scale-125 '>
          <div className='px-12'>
            <img src={correct} alt='Image-1' className='pb-5 w-20 ' />
          </div>
          <h2 className=' text-black text-center tracking-wider font-Roboto'>
            Rapid Implementation
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
