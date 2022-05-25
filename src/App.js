import React from 'react';
import Card from './Components/Card';
import Banner from './Components/Images/growing-up.svg';
import Logo from './Components/Images/logo.png';
import {
  Route,
  Routes as Switch,
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import Rapid from './Pages/Rapid.jsx';

function App() {
  return (
    <Router>
      <div className='relative py-5'>
        <Switch>
          <Route path='/' />
          <Route path='/improve' />
        </Switch>
        <div className='my-7'></div>
        <div className='bg-gradient-to-l from-blue-500 to-purple-500 mx-14 rounded-3xl  border-4 border-solid px-14 py-7 border-blue-900 '>
          <div className='flex-grid columns-2'>
            <div id='Logo' className='mb-7 flex pb-10'>
              <Link to='/home'>
                <img src={Logo} alt='logo' className='mt-2 h-12 w-12 mr-2' />
              </Link>
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
                  <button className='ease-out duration-300 rounded-full text-xl text-white border-solid border-2 border-transparent tracking-wide font-black drop-shadow-md bg-gradient-to-r from-slate-700 to-purple-700 px-12 py-2  hover:scale-110 hover:text-black hover:to-transparent hover:from-transparent hover:border-solid hover:border-2 hover:border-white'>
                    Improve
                  </button>
                </Link>
              </div>
            </div>
            <img src={Banner} alt='banner' className='drop-shadow-2xl' />
          </div>
        </div>
        <div>
          <Card />
        </div>
      </div>
    </Router>
  );
}

export default App;
