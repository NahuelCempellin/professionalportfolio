import React from 'react'
import reLogo from '../../assets/React-logo.png'
import {FaReact} from 'react-icons/fa'

const Logo = () => {
  return (
    <div className='flex justify-between items-center w-36'>
        <div className='w-[4em]  h-[4em] flex justify-center items-center'>
            <img className='w-[100%] ' src={reLogo} alt='logo'/>
            {/* <FaReact className='text-5xl text-violet-800'/> */}
        </div>
        <h2 className='text-xl border-b border-violet-600'>PORTFOLIO</h2>
    </div>
  )
}

export default Logo