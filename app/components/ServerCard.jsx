import { motion } from 'framer-motion'
import React from 'react'
const ServerCard = ({web, repo, title, desc, img}) => {
  return (
    
    <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }} className=' lg:p-0 md:p-2 p-5'>
    <div className='proj rounded-2xl flex flex-col lg:flex-row justify-center items-center' >
        <div className='col-span-1 lg:row-span-1 sm:row-span-3 p-8 w-full'>
        <a href={web} target="_blank" className=' flex w-full justify-center items-center'>
            <div className=" flex w-full justify-center items-center p-5" style={{alignItems:'center', position:'relative', top:0, left:0 }} >
              <img src={img} className='serverpic' style={{width:350 }} />
            </div>
            </a>
            </div>
            <div className='col-span-1 lg:row-span-1 sm:row-span-1 textCard' >
              <div className='flex flex-col w-full justify-center items-center gap-3 '>
                <h1 className='transtext text-2xl lg:text-4xl flex flex-wrap break-words overflow-x-clip row-span-1  text-center'>{title}</h1>
                <h3 className='transtext text-center lg:row-span-2 text-gray-200' style={{ alignSelf:'center'}}>{desc}</h3>
                <div className='flex flex-col lg:flex-row gap-4 justify-center items-center ' style={{padding:4, marginLeft:30}}>
                <a href = {web} target='_blank'>
      <button type="button" className=" card smbtn text-white lg:my-0 sm:my-2  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover: dark:focus:ring-blue-800">Visit Server</button>
      </a>
      <a href = {repo} target='_blank'>
      <button type="button" className=" card text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover: dark:focus:ring-blue-800">Visit Repository</button>
      </a>
            </div>
            </div>
            </div>
    </div>
    </motion.div>
  )
}

export default ServerCard