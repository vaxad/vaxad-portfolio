import React from 'react'
import { motion } from "framer-motion"
const Home = () => {
  return (
    <>
    <section className=" bg-transparent flex justify-center items-center pt-24 lg:pt-5 min-h-screen"style={{}} id='home'>
    <div className=" flex flex-col lg:flex-row justify-center  items-center w-full h-full" style={{}}>
    <motion.div initial={{ opacity: 0, x:100 }}
    animate={{ opacity: 1, x:0 }}
    transition={{ duration: 1 }} className="flex justify-center items-center w-full lg:hidden lg:mt-0 sm:col-span-1 lg:col-span-5 h-full" >
            <motion.img initial={{y:-50}}
  animate={{ y:-25 }}
  transition={{ repeat: Infinity, repeatType:"reverse", duration: 4 }}  className="heroimg h-auto self-center" src="/varad.png" alt="mockup" />
        </motion.div>
        <motion.div 
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ duration: 1 }} className=" w-full md:w-2/3 place-self-center sm:col-span-1 lg:col-span-7" style={{}}>
            <div className='flex w-full justify-center items-right flex-col px-5'>
            <h1 className=" text-center mb-4 lg:text-4xl text-2xl text-slate-100 font-extrabold leading-none md:text-4xl xl:text-4xl" style={{letterSpacing:1}}>Varad Prabhu</h1>
            <p className=" text-center mb-6 font-light text-slate-200 lg:mb-8 md:text-lg lg:text-xl " style={{}}>second year undergrad student pursuing computer engineering in DJSCE </p>
            </div>
            <div className='justify-center grid grid-flow-row-dense sm:gird-cols-1 sm:grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 '>
            <a href="/varad_resume.pdf" download="Varad's Resume" style={{margin:20}} className="trans sm:col-span-1 sm:row-span-1 inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg bg-black focus:ring-4 text-white border-gray-700 hover:bg-black focus:ring-gray-800">
                Get Resume
            </a>
             <a href="https://github.com/vaxad?tab=repositories" target="_blank" className=" hover:scale-110 transition-all text-slate-100  sm:col-span-1 sm:row-span-1 inline-flex items-center justify-center px-5 py-3 mr-3 font-medium text-center ">
                
                View Repositories
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
            <div className="flexCenter lg:col-span-2 sm:col-span-1" style={{marginTop:30}}>
            <motion.div initial={{ opacity: 0, y:100 }}
    animate={{ opacity: 1, y:0 }}
    transition={{ duration: 1.2 }} className=" linkedin">
            <a href="https://www.linkedin.com/in/varad-prabhu-622621270/" target="_blank"><img className='scale' src="/mdi_linkedin.png" alt="Linkedin" style={{height:60}} /></a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y:100 }}
    animate={{ opacity: 1, y:0 }}
    transition={{ duration: 1.5 }} className=" github">
            <a href="https://github.com/vaxad" target="_blank"><img className='scale' src="/mdi_github.png" alt="Github" style={{height:60}}/></a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y:100 }}
    animate={{ opacity: 1, y:0 }}
    transition={{ duration: 1.8 }} className="instagram">
            <a href="https://devfolio.co/@varadprabhu" target="_blank"><img className='scale' src="/mdi_instagram.png" alt="Devfolio" id='devfolio' style={{height:60}}/></a>
            </motion.div>
            </div>
        </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x:100 }}
    animate={{ opacity: 1, x:0 }}
    transition={{ duration: 1 }} className=" hidden lg:mt-0 sm:col-span-1 lg:col-span-5 lg:flex" >
            <motion.img initial={{y:-50}}
  animate={{ y:50 }}
  transition={{ repeat: Infinity, repeatType:"reverse", duration: 4 }} className="heroimg" src="/varad.png" alt="mockup" />
        </motion.div>                
    </div>

</section>
    </>
  )
}

export default Home