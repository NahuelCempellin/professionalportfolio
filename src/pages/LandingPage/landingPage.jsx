import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar'
import NavResponsive from '../../components/Navbar/NavResponsive/NavResponsive'
import VerticalNav from '../../components/Navbar/VerticalNav/VerticalNav'


function LandingPage() {
    const {name}= useSelector(state=> state)

    useEffect(()=>{

    },[name])
  return (
    <div className='w-screen h-screen bg-[#121212] text-white flex flex-col  '>
         <div className="max-[1000px]:hidden">
           <Navbar/>
         </div>
         <div className="min-[1000px]:hidden">
            <NavResponsive/>
        </div>

        <div className='flex items-center justify-end w-[100%] h-[50em] '>
          <div className=' w-[80%] h-[100%] mr-10'>
            <div className='typewriter'>
              <h1>{`Welcome ${name} to Nahuel Cempellin portfolio.`}</h1>
            </div>
          </div>

          <div className='w-[5%] mr-5'>
            <VerticalNav/>
          </div>

        </div>
        
        
    </div>
  )
}

export default LandingPage