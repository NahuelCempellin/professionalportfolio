import React from 'react'
import NavLogout from '../Navbar/NavLogout'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-[#121212] text-white flex flex-col'>
    <div className="max-[1000px]:hidden w-[100%]">
      <NavLogout/>
    </div>
    <div className="min-[1000px]:hidden">
       
   </div>
   
   <div className='w-[80%] flex flex-col items-center'>
   <div className='typewriter'>
    <h1>Welcome Back Master... Please, signin</h1>
   </div>
   </div>
    </div>
  )
}

export default Home