import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo/logo'

const Navbar = () => {
  return (
    <div className='w-[100%] p-4 flex items-center justify-between mt-3'>
        <div>
            <Logo/>
        </div>
        <hr className='border-violet-600 w-[55%]'/>
        <div className='flex items-center justify-around w-[30%]'>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Projects</Link>
            <Link>Contact</Link>
            <Link>Cofee</Link>

        </div>

    </div>
  )
}

export default Navbar