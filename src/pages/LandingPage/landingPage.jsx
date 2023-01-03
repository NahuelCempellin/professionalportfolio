import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/navbar'
import NavResponsive from '../../components/Navbar/NavResponsive/NavResponsive'
import VerticalNav from '../../components/Navbar/VerticalNav/VerticalNav'


function LandingPage() {
    const {name}= useSelector(state=> state)
    const [loopNum, setLoopNum]= useState(0)
    const[isDeleting, setIsDeleting]= useState(false)
    const toRotate=["Web Developer.", "Web Designer.", "Frontend Dev." , "Backend Dev."]
    const[text, setText]= useState("")
    const [delta, setDelta]= useState(300- Math.random() *100)
    const period= 2000;

    useEffect(()=>{
      let ticker = setInterval(()=>{
        tick();
      },delta)

      return()=> { clearInterval(ticker)}
    },[text])

    useEffect(()=>{

    },[name])


    const tick=()=>{
      let i= loopNum % toRotate.length;
      let fullText= toRotate[i];
      let updatedText= isDeleting ? fullText.substring(0,text.length -1) : fullText.substring(0, text.length +1);

      setText(updatedText);

      if(isDeleting){
        setDelta(prevDelta => prevDelta /2)
      }

      if(!isDeleting && updatedText === fullText){
          setIsDeleting(true)
          setDelta(period)
      }else if(isDeleting && updatedText === ""){
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
        setDelta(500)
      }
    }
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
            <div className='w-[60%]'>
              <div className='w-[100%] p-3 mt-[20em] ml-[-5em]'>
              <span className='text-4xl'>{`Hi! ${name}, welcome to my professional portfolio!`}</span>
              <h1 className='text-4xl flex items- center'>{`I'm `} <p className='text-violet-600 ml-2 mr-2'>Nahuel Cempellin,</p>{text}</h1>
              <hr className='border-violet-600 w-[80%] mt-5 mb-5'/>
              <p>Full Stack developer, and React.js Tutor in Coderhouse. Graduate of the bootcamp Soy Henry, with one year of experience as a frontend developer. I have carried out many personal and professional projects that you can see in the projects section.
              Among the technologies I use, there are mainly Javascript, Typescript, React, Node.js and more...</p>
              </div>
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