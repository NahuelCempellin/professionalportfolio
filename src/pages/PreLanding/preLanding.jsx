import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { handlerSetName } from '../../reducer/actions/actions'
import './animation/animation.css'
import {BsCheckLg , BsSkipForward} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const PreLanding = () => {
    const dispatch= useDispatch()
    const[name,setName]=useState('')

    function handlerName(e){
        setName(e.target.value)
    }

    function NowKnowYou(){
        dispatch(handlerSetName(name))
    }

  return (
    <div className='w-screen h-screen bg-[#121212] text-white flex flex-col items-center justify-center '>
        <div className='h-[10em] w-[90%] flex flex-col items-center justify-around'>
        <div className='typewriter'>
        <h1>Hello stranger!</h1>
        </div>
        
        <div id='animate' className='w-[100%] flex flex-col items-center justify-center'>
        <div className='w-[60%] flex items-center justify-center mt-[5em]'>
            <input value={name} className='bg-transparent p-3 border-b border-violet-600 w-[80%]' placeholder='What is your name?' onChange={(e)=>handlerName(e)}/>
        </div>

        <div className='w-[70%] flex items-center justify-between mt-5'>
            <Link to={'/landing'} className='p-3 text-xl w-[20%] mt-[5em] text-violet-600' onClick={()=>NowKnowYou()}><BsCheckLg/></Link>
            <button className='p-3 text-xl w-[5em] mt-[5em]  flex items-center justify-around'>Skip <BsSkipForward/></button>
        </div>
        </div>
        </div>

    </div>
  )
}

export default PreLanding