import React from 'react';
import rapid from './Images/calendar.png';

function Card() {
  return (
    <div>
      <div className='font-Montserrat'>
        <div className='border-[1px]  border-purple-400 cursor-pointer w-64 backdrop-blur-xl bg-transparent rounded-3xl  py-7 drop-shadow-xl ease-out duration-300 hover:scale-125 '>
          <div className='px-20'>
            <img src={rapid} alt='calendar-icon ' className='pb-5 w-20 ' />
          </div>
          <h2 className='text-center text-white font-Montserrat font-bold tracking-wide'>
            Rapid <br></br>Implementation
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
