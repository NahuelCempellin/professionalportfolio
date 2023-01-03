import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=' w-[40%] h-[20em] mt-7 rounded-lg  flex flex-col items-center justify-around'>
        <div className='flex flex-col w-[80%]'>
            <label>Mail:</label>
            <input className='p-2  bg-transparent border-b border-violet-600'/>
        </div>
        <div className='flex flex-col w-[80%]'>
            <label>Password:</label>
            <input type={'password'} className='p-2  bg-transparent border-b border-violet-600'/>
        </div>
        <div className='w-[80%] flex items-center justify-around'>
            <Link>Confirm</Link>
            <Link to={'/'}>Back</Link>
        </div>
    </div>

  )
}

export default Login