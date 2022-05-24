import React from 'react';
import data_report from '../Components/Images/data_report.webp';

function Rapid() {
  return (
    <div className='bg-white w-3/4 rounded-3xl'>
      <div className='flex center columns-2'>
        <div className=' font-Montserrat font-bold px-7 mx-5 py-7 w-2/4'>
          <div id='logo'>Logo</div>
          <div id='texto'>
            Rapid implementation of all data do you have in your company
          </div>
          <div id='foot'>Pie</div>
        </div>
        <div className='w-2/4'>
          <img className='rounded-3xl pr-1.5 py-1.5' src={data_report} />
        </div>
      </div>
    </div>
  );
}

export default Rapid;
