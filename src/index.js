import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='bg-gradient-to-r from-rose-400 to-violet-800'>
      <App />
    </div>
  </React.StrictMode>
);
