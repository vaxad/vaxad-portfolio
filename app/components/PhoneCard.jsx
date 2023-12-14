import React from 'react'
import { motion } from 'framer-motion'
const PhoneCard = ({web, repo, title, desc, img1, img2, img3}) => {
  return (
    
    <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
    variants={{
      visible: { opacity: 1 },
      hidden: { opacity: 0 }
    }} className=' lg:p-0 md:p-2 p-5'>
    <div className='proj rounded-2xl flex flex-col lg:flex-row justify-center items-center gap-4'>
        <div className='flex w-full'>
        {/* <a href={web} target="_blank" className='lg:block md:block hidden'>
          <div className=" grid grid-flow-row-dense grid-rows-1 grid-cols-3">
            <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.5, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:100 }
          }} className="phone" style={{ width: 160, height: 320, flex: 1, position:'relative', top:0, left:0 }} >
              <img src='/phone.png' style={{ width: 160, height: 360, zIndex:100, position:'relative', top:0,left:0 }} />
                <img className='' src={img1} preload='metadata' style={{ width: 500, alignSelf: 'center', height: 360,padding:5, borderRadius:20, zIndex:50, position:'absolute', top:0,left:0, objectFit:'fill' }}>
                </img>
            </motion.div>
            <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:100 }
          }} className="phone" style={{ width: 160, height: 320, flex: 1, position:'relative', top:0, left:0 }} >
              <img src='/phone.png' style={{ width: 160, height: 360, zIndex:100, position:'relative', top:0,left:0 }} />
                <img className='' src={img2} preload='metadata' style={{ width: 500, alignSelf: 'center', height: 360,padding:5, borderRadius:20, zIndex:50, position:'absolute', top:0,left:0, objectFit:'fill' }}>
                </img>
            </motion.div>
            <motion.div initial={"hidden"} whileInView="visible" transition={{ duration: 1.1, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:100 }
          }} className="phone" style={{ width: 160, height: 320, flex: 1, position:'relative', top:0, left:0 }} >
              <img src='/phone.png' style={{ width: 160, height: 360, zIndex:100, position:'relative', top:0,left:0 }} />
                <img className='' src={img3} preload='metadata' style={{ width: 500, alignSelf: 'center', height: 360,padding:5, borderRadius:20, zIndex:50, position:'absolute', top:0,left:0, objectFit:'fill' }}>
                </img>
            </motion.div>
            </div>
            </a> */}
            <a href={web} target="_blank" className=' flex w-full'>
          <div className=" flex justify-center items-center gap-5">
                <motion.img initial={"hidden"} whileInView="visible" transition={{ duration: 0.5, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:100 }
          }} className=' rounded-xl border border-slate-100 w-1/4' src={img1} preload='metadata'/>
                <motion.img initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:100 }
          }} className=' rounded-xl border border-slate-100 w-1/4' src={img2} preload='metadata'/>
                <motion.img initial={"hidden"} whileInView="visible" transition={{ duration: 1.1, ease: 'easeOut' }}
          variants={{
            visible: { opacity: 1, y:0 },
            hidden: { opacity: 0, y:100 }
          }} className=' rounded-xl border border-slate-100 w-1/4' src={img3} preload='metadata'/>
                
            </div>
            </a>
            </div>
            <div className='flex flex-col justify-center items-center w-full lg:py-1 md:py-2 py-5 textCard' >
              <div className='flex flex-col justify-center items-center gap-5'>
                <h1 className='transtext text-2xl lg:text-4xl text-center row-span-1 w-full'>{title}</h1>
                <h3 className='transtext text-center lg:row-span-2 text-gray-200' style={{ alignSelf:'center'}}>{desc}</h3>
                <div className='flex flex-col lg:flex-row gap-6 justify-center items-center ' style={{padding:4, marginLeft:30}}>
                <a href = {web} target='_blank'>
      <button type="button" className=" card smbtn text-white lg:my-0 sm:my-2  hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover: focus:ring-blue-800">View Prototype</button>
      </a>
      <a href = {repo} target='_blank'>
      <button type="button" className=" card text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover: focus:ring-blue-800">Visit Repository</button>
      </a>
            </div>
            </div>
            </div>
    </div>
    </motion.div>
  )
}

export default PhoneCard