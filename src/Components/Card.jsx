import React from 'react';
import calendar from './Images/calendar.png';
import report from './Images/report.png';
import correct from './Images/correct.png';

function Card() {
  return (
    <div className='justify-center z-10 mb-7'>
      <div className='flex gap-14 font-Montserrat justify-center'>
        <div className='border-[1px]  border-purple-400 cursor-pointer w-64 backdrop-blur-xl bg-transparent rounded-3xl  py-7 drop-shadow-xl ease-out duration-300 hover:scale-125 '>
          <div className='px-20'>
            <img src={calendar} alt='calendar-icon ' className='pb-5 w-20 ' />
          </div>
          <h2 className='text-center text-white font-Montserrat font-bold tracking-wide'>
            Rapid <br></br>Implementation
          </h2>
        </div>
        <div className='border-[1px] blur-xs border-purple-400 cursor-pointer w-64 backdrop-blur-xl bg-transparent rounded-3xl  py-7 drop-shadow-xl ease-out duration-300 hover:scale-125  '>
          <div className='px-20'>
            <img src={report} alt='report_icon' className='pb-5 w-20 ' />
          </div>
          <h2 className=' text-white font-bold text-center tracking-wide'>
            Post-Implementation <br></br>change reports
          </h2>
        </div>
        <div className='border-[1px] border-purple-400 cursor-pointer w-64 backdrop-blur-xl bg-transparent  rounded-3xl  py-7 drop-shadow-2xl ease-out duration-300 hover:scale-125 '>
          <div className='px-20'>
            <img src={correct} alt='correct-icon' className='pb-5 w-20 ' />
          </div>
          <h2 className=' text-white font-bold  text-center tracking-wide font-Roboto'>
            Correct <br></br>presentation of data
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
