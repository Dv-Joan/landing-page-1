import React from 'react';
import calendar from './Images/calendar.png';
import report from './Images/report.png';
import correct from './Images/correct.png';

function Card() {
  return (
    <div>
      <div className='grid gap-20 grid-cols-3 pl-28'>
        <div className='w-40 bg-rose-400 rounded-3xl px-7 py-7 drop-shadow-xl ease-out duration-300 hover:scale-110 '>
          <img src={calendar} alt='Image-1' className='pb-5  w-20 ' />
          <h2 className='text-center text-white font-mono tracking-wide'>
            Rapid Implementation
          </h2>
        </div>
        <div className='w-40 bg-rose-400 rounded-3xl px-7 py-7 drop-shadow-xl '>
          <img src={report} alt='Image-1' className='pb-5  w-20 ' />
          <h2 className=' text-white font-mono tracking-wide'>
            Rapid Implementation
          </h2>
        </div>
        <div className='w-40 bg-rose-400 rounded-3xl px-7 py-7 drop-shadow-xl '>
          <img src={correct} alt='Image-1' className='pb-5  w-20 ' />
          <h2 className=' text-white font-mono tracking-wide'>
            Rapid Implementation
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
