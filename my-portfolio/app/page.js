'use client'
import Image from 'next/image'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { SiNestjs, SiTypescript  } from "react-icons/si";
import { 
  DiJsBadge, DiHtml5, DiCss3, DiReact, DiNodejsSmall, DiMysql, DiMongodb, DiGit,  
} from "react-icons/di";
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {
  return (
    <main className=' px-10 '>
      <section className=' min-h-screen'>
        <nav className=' py-10 mb-12 flex justify-between'>
          <ul className=' flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">Resume</a>
            </li>
          </ul>
        </nav>
        <div className=' text-center p-10'>
          <h2 className=' text-5xl py-2 text-teal-600 font-medium'>
            Franco Velazquez
          </h2>
          <h3 className='text-2xl py-2'>
            {' '}
            <span className=''>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Full Stack', 'Backend', 'Frontend', 'Cloud', 'Scrum']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
          <p className='text-md py-5 leading-8'>
            I develop applications from the server part as well as the client side. I’m currently 21 years old and always looking for new opportunities to grow professionally and personally
          </p>
        </div>
        <div className=' text-5xl flex justify-center gap-16 py-3'>
          <DiHtml5/>
          <DiCss3/>
          <DiJsBadge/>
          <SiTypescript/>
          <SiNestjs/>
          <DiNodejsSmall/>
          <DiReact/>
          <DiMongodb/>
          <DiMysql/>
        </div>
      </section>
      <section>
        <div>
          <h3>
            My Projects
          </h3>
        </div>
        <div className=' lg:flex dap-10'>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2'>
              Alquilinos
            </h3>
            <p>
              lorem
            </p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2'>
              Aluilinos
            </h3>
            <p>
              lorem
            </p>
          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10'>
            <h3 className='text-lg font-medium pt-8 pb-2'>
              Aluilinos
            </h3>
            <p>
              lorem
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
