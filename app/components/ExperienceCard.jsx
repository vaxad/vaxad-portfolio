import React from 'react'
import { motion } from 'framer-motion'

export default function AchievementCard({title, company, date, location, skills, url, img}) {
    const shownSkills = []
    let skillNum = 0;
    skills.forEach(element => {
        skillNum=skillNum+element.length
        if(skillNum<60){
            shownSkills.push(element)
        }
    });
  return (
    <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }} className=' lg:p-0 md:p-2 p-5 flex w-full justify-center items-center relative'> 
    <div className='proj rounded-2xl flex w-full flex-col lg:flex-row flex-wrap lg:flex-nowrap justify-center items-center gap-4' >
        <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, scale:1 },
            hidden: { opacity: 0, scale:0.9 }
          }} className='flex w-full'>
        {/* <a href={web} target="_blank" className=' lg:flex hidden justify-center items-center w-full'>
            <div className="laptop flex justify-center items-center relative min-h-[407px]" >
              <img src='/laptop.png' style={{ width: 640, height: 407, zIndex:100, position:'absolute'}} />
                <img src={img} preload='metadata' style={{ width: 500, height: 337, zIndex:50, position:'absolute' }}>
                </img>
            </div>
            </a> */}
            <a href={url} target="_blank" className=' flex w-full p-5'>
            <div className="flex justify-center items-center w-full" >
                <img className='rounded-xl w-full md:w-1/2' src={img} preload='metadata' style={{}}>
                </img>
            </div>
            </a>
            </motion.div>
            <div className='flex w-full flex-col justify-center gap-1 md:gap-4 items-center' >
                <h1 className='text-2xl lg:text-4xl row-span-1 w-full text-center'>{title}</h1>
                <div className=' flex flex-col w-full justify-center items-center'>
                <h3 className='transtext text-center  lg:row-span-2 text-gray-200' style={{ alignSelf:'center'}}>{company}</h3>
                <h3 className='transtext text-center  lg:row-span-2 text-gray-200' style={{ alignSelf:'center'}}>{date}</h3>
                <h3 className='transtext text-center  lg:row-span-2 text-gray-200' style={{ alignSelf:'center'}}>{location}</h3>
                </div>
                <div className='flex flex-col lg:flex-row gap-3 md:gap-6 justify-center items-center' style={{padding:4, marginLeft:30}}>
                <a href = {url} target='_blank' className=' mb-2 md:mb-6'>
      <button type="button" className=" card smbtn text-white lg:my-0 sm:my-2  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover: dark:focus:ring-blue-800">View Company</button>
      </a>
      
            </div>
            <div className=' flex flex-row justify-center items-center w-full flex-wrap gap-2'>
        {shownSkills.map((skill,index)=>{
            
        return(
        <div key={index} className=' px-4 py-2 rounded-xl text-blue-500 bg-slate-100 text-xs font-medium'>{skill}</div>
        )
})}
    </div>
            </div>
            
    </div>
    </motion.div>
  )
}
