import React from 'react';
import Card from './Components/Card';
import Banner from './Components/Images/growing-up.svg';
import Logo from './Components/Images/logo.png';
import { Route, Routes, Link, BrowserRouter as Router } from 'react-router-dom';
import Rapid from './Components/Rapid';

function App() {
  return (
    <Router>
      <div className='bg-gradient-to-r from-rose-300 to-violet-800 flex columns-1 justify-center'>
        <div className='static bg-gradient-to-l from-blue-500 to-purple-500 w-3/4 rounded-3xl  border-4 border-solid my-16 px-14 py-7 border-blue-900 '>
          <div className='flex-grid columns-2'>
            <div id='Logo' className='mb-7 flex pb-10'>
              <img src={Logo} alt='logo' className='mt-2 h-12 w-12 mr-2' />
              <div className='text-white   items-center'>
                <span className='font-black text-2xl'>STT</span>
                <br></br>
                <span className='tracking-wide font-Montserrat'>group</span>
              </div>
            </div>
            <div>
              <span className='text-yellow-400 text-6xl font-black tracking-normal'>
                Improve
              </span>
              <br></br>
              <span className='text-white text-6xl font-black tracking-normal '>
                your bussiness
              </span>
              <div className='text-white text-xl tracking-normal pt-4 font-Montserrat'>
                Increase Sales in the first week
              </div>

              <div className='pt-16'>
                <Link to='/improve'>
                  <button className='ease-out duration-300 rounded-full text-xl text-white tracking-wide font-black drop-shadow-md bg-gradient-to-r from-slate-700 to-purple-700 px-12 py-2  hover:scale-110  '>
                    Improve
                  </button>
                </Link>
              </div>
            </div>
            <div className=''>
              <img src={Banner} alt='banner' className='drop-shadow-2xl' />
            </div>
          </div>
          <div className=''>
            <div className=' rounded-3xl'>
              <Card />
            </div>
          </div>
        </div>

        <Routes>
          <Route path='/improve' element={<Rapid />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
