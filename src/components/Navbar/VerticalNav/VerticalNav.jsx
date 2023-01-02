import React from 'react'
import {GrLinkedinOption} from 'react-icons/gr'
import {FaInstagram} from 'react-icons/fa'
import {FiGithub} from 'react-icons/fi'

const VerticalNav = () => {
  return (
    <div className='w-[100%] h-[20em] flex flex-col items-center justify-between'>
        <div className=' w-8 h-8 flex items-center justify-center rounded-full bg-white text-black'>
            <FiGithub className='text-xl'/>
        </div>
        <div className='w-8 h-8 flex items-center justify-center rounded-full bg-[#065aaf]'>
            <GrLinkedinOption className='text-xl'/>
        </div>
        <div className=' w-8 h-8 flex items-center justify-center rounded-full' id='ig'>
            <FaInstagram className='text-xl'/>    
        </div>
    </div>
  )
}

export default VerticalNav