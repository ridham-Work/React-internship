import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Check if context is undefined
  if (theme === undefined || toggleTheme === undefined) {
    throw new Error('Navbar must be used within a ThemeProvider');
  }

  return (
    <div
      className='bg-zinc-200 p-2 relative'
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h1 className='absolute top-5 font-extrabold text-3xl hover:text-red-800'>
        <i>Ridham</i>
      </h1>
      <ul className='flex justify-center gap-20 m-5 font-bold cursor-pointer text-xl'>
        <li><Link className='hover:text-red-600' to='/'>home</Link></li>
        <li><Link className='hover:text-red-600' to='/form'>form</Link></li>
        <li><Link className='hover:text-red-600' to='/about'>about</Link></li>
      </ul>
      <button 
        onClick={toggleTheme} className='text-xl font-bold text-red-600 bg-zinc-300 p-2 rounded-lg'
        aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

export default Navbar;
