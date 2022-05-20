import Card from './Components/Card';
import Banner from './Components/Images/banner_image.png';
import Logo from './Components/Images/logo.png';

function App() {
  return (
    <div className='bg-gradient-to-r from-rose-300 to-violet-800 flex justify-center'>
      <div className='static bg-gradient-to-l from-blue-500 to-purple-500 w-3/4 rounded-3xl  border-4 border-solid my-16 px-14 py-7 border-blue-900 '>
        <div className='flex-grid columns-2'>
          <div id='Logo' className='mb-7 flex pb-10'>
            <img src={Logo} className='mt-2 h-12 w-12 mr-2' />
            <div className='text-white   items-center'>
              <span className='font-black text-2xl'>STT</span>
              <br></br>
              <span className='tracking-wide'>group</span>
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
            <div className='text-white text-xl tracking-normal pt-4 '>
              Increase Sales in the first week
            </div>
            <div className='pt-16'>
              <button className='  ease-out duration-300 rounded-full text-xl text-white tracking-wide font-black drop-shadow-md bg-gradient-to-r from-slate-700 to-purple-700 px-12 py-2  hover:scale-110  '>
                Improve
              </button>
            </div>
          </div>
          <div className=''>
            <img src={Banner} className='drop-shadow-2xl' />
          </div>
        </div>
        <div className=''>
          <div className='absolute bottom-0  rounded-3xl '>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
