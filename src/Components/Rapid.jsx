import React from 'react';
import data_report from './Images/data_report.webp';

function Rapid() {
  return (
    <div className='flex gap-7 columns-2 rounded-xl'>
      <div className='bg-yellow-50 rounded-xl'>
        <div id='logo'>Logo</div>
        <div id='texto'>Texto</div>
        <div id='foot'>Pie</div>
      </div>
      <div>
        <img className='rounded-2xl' src={data_report} />
      </div>
    </div>
  );
}

export default Rapid;
