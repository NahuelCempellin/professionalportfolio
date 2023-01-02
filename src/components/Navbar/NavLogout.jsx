import React from 'react'
import Logo from '../Logo/logo'
import { Link } from 'react-router-dom'

function NavLogout() {
  return (
    <div className='w-[100%] p-4 flex items-center justify-between mt-3'>
        <div>
            <Logo/>
        </div>
        <div className='flex items-center justify-around w-[30%]'>
            <Link>Register</Link>
        </div>
    </div>
  )
}

export default NavLogout