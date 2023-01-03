import React from 'react'
import NavLogout from '../../components/Navbar/NavLogout'
import Login from '../auth/login'

const Home = () => {
  return (
    <div className='w-screen h-screen bg-[#121212] text-white flex flex-col'>
    <div className="max-[1000px]:hidden w-[100%]">
      <NavLogout/>
    </div>
    <div className="min-[1000px]:hidden">
       
   </div>
   
   <div className='w-[80%] flex flex-col items-center justify-center  mt-20 ml-20'>
   <div className='typewriter'>
    <h1>Welcome Back Master... Please, signin</h1>
   </div>
   <Login/>
   </div>
    </div>
  )
}

export default Home