import React from 'react'
import Logo from '../../Logo/logo'
import{GiHamburgerMenu} from 'react-icons/gi'

const NavResponsive = () => {
  return (
    <div className='w-[100%] p-4 flex items-center justify-between mt-3'>
        <div className='mr-3'>
        <GiHamburgerMenu className='text-2xl'/>
        </div>

        <div className=' w-[90%]'>
        <hr className='border-violet-600 w-[100%]'/>
        </div>

    </div>
  )
}

export default NavResponsive