import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-zinc-200 p-2 relative'>
        <h1 className='absolute top-5 font-extrabold text-3xl hover:text-red-800'><i>Ridham</i></h1>
      <ul className='flex justify-center gap-20 m-5 font-bold cursor-pointer text-xl'>
       <Link className='hover:text-red-600' to='/'>home</Link>
       <Link className='hover:text-red-600' to='/form'>form</Link>
       <Link className='hover:text-red-600' to='/about'>about</Link>
      </ul>
    </div>
  )
}

export default Navbar

