import Card from './Components/Card';

function App() {
  return (
    <div className='bg-gradient-to-r from-fuchsia-300 to-violet-700 flex justify-center'>
      <div className='bg-gradient-to-r from-purple-500 to-blue-400 h-96 w-96 rounded-3xl  border-4 border-solid mx- my-16 px-10 py-5 border-blue-900 '>
        <div className='flex-1'>
          <div id='Logo' className='mb-7 flex'>
            <img
              src='https://iconape.com/wp-content/files/rf/369356/svg/dollar-1-logo-icon-png-svg.png'
              className='mt-3 h-9 w-10 mr-2'
            />
            <div className='text-white   items-center'>
              <span className='font-black text-2xl'>STT</span>
              <br></br>
              <span className='tracking-wide'>group</span>
            </div>
          </div>
          <div>
            <span className='text-yellow-400 text-4xl font-black tracking-normal'>
              Improve
            </span>
            <br></br>
            <span className='text-white text-4xl font-black tracking-normal '>
              your bussiness
            </span>
            <span className='text-white text-normal tracking-normal '>
              <br></br>
              Increase Sales in the first week
            </span>
          </div>
        </div>
        <div className='pl-5 bg-blue-200'>
          <img
            src='https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/featured-section-new-in-macos_2x.png'
            className='w-2/3 h-2/3'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
