import React from 'react';
import report from './Images/report.png';

function Card() {
  return (
    <div>
      <div className=' font-Montserrat'>
        <div className='border-[1px] blur-xs border-purple-400 cursor-pointer w-64 backdrop-blur-xl bg-transparent rounded-3xl  py-7 drop-shadow-xl ease-out duration-300 hover:scale-125  '>
          <div className='px-20'>
            <img src={report} alt='report_icon' className='pb-5 w-20 ' />
          </div>
          <h2 className=' text-white font-bold text-center tracking-wide'>
            Post-Implementation <br></br>change reports
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Card;
