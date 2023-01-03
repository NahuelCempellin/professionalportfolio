import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/navbar'
import NavResponsive from '../../components/Navbar/NavResponsive/NavResponsive'
import VerticalNav from '../../components/Navbar/VerticalNav/VerticalNav'


function LandingPage() {
    const {name}= useSelector(state=> state)
    const [loopNum, setLoopNum]= useState(0)
    const[isDeleting, setIsDeleting]= useState(false)
    const toRotate=["Web Designer.", "Frontend Developer." , "Backend Developer."]
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

        <div className='flex items-center justify-end w-[100%] h-[50em] max-[980px]:flex-col-reverse '>
          <div className=' w-[80%] h-[100%] min-[1000px]:mr-10'>
            <div className='w-[90%] flex items-center justify-around'>
              <div className='w-[70%] p-3 mt-[20em] max-[1000px]:mt-10 min-[1000px]:ml-[-5em]'>
                {
                  name?
                  <div>
                    <span className='text-4xl'>{`Hi! ${name}, welcome to my professional portfolio!`}</span>
                    <h1 className='text-4xl flex items- center'>{`I'm `} <p className='text-violet-600 ml-2 mr-2'>Nahuel Cempellin,</p>{text}</h1>
                    <hr className='border-violet-600 w-[80%] mt-5 mb-5'/>
                    <p>Full Stack developer, and React.js Tutor in Coderhouse. Graduate of the bootcamp Soy Henry, with one year of experience as a frontend developer. I have carried out many personal and professional projects that you can see in the projects section.
                    Among the technologies I use, there are mainly Javascript, Typescript, React, Node.js and more...</p>

                  </div>
                  :
                  <div>
                    <span className='text-4xl'>{`Hi! Completlly stranger, Nahuel wants you to see this content, but you have offended me, and I'm not in the mood >:(.`}</span>
                    <p>My creator has taught me about the importance of manners, you have broken my heart.
                    But if you tell me your name, I can show you the content of this page.</p>

                    <div className='mt-6 w-[100%] flex items-center justify-end'>
                      <Link to={'/'} className='text-xl p-3'>Back...</Link>
                    </div>
                  </div>

                }
              </div>
              <div>
                {
                  !name &&
                  <p className='text-6xl text-red-500 h-[2em] flex items-center' id='face'>{'( ˘︹˘ )'}</p>
                }
              </div>
            </div>
          </div>
          <div className='w-[5%] mr-5 max-[1000px]:w-[20em]'>
            <VerticalNav/>
          </div>

        </div>

        
        
    </div>
  )
}

export default LandingPage