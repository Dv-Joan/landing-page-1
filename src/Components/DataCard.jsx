import React from 'react';
import datapresentation from './Images/correct.png';

function Card() {
  return (
    <div>
      <div className='font-Montserrat'>
        <div className='border-[1px] border-purple-400 cursor-pointer w-64 backdrop-blur-xl bg-transparent  rounded-3xl  py-7 drop-shadow-2xl ease-out duration-300 hover:scale-125 '>
          <div className='px-20'>
            <img
              src={datapresentation}
              alt='correct-icon'
              className='pb-5 w-20 '
            />
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
