import React from 'react'
import { useState } from 'react'

export default function Form() {
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')
    const [clicked,setClicked]=useState('')

    const handleSubmit=async()=>{
        console.log(email,message)
        setClicked(true)
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        setEmail('')
        setMessage('')
        setClicked(false)
        const res = await fetch('/api/contact',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({"email":email,"message":message})
        })
    }

    return (
        <div id='form' className=' flex flex-col justify-center items-center my-16 w-full bg-slate-950 p-5 rounded-xl max-w-full' style={{opacity:0.85}}>
            <form onSubmit={(e)=>{e.preventDefault();
                handleSubmit()}} className=' flex flex-col justify-center items-center w-full gap-4'>
                <h2>Contact me</h2>
                <div className=' flex w-full flex-col'>
            <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-left text-white">Your Email</label>   
                <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email-address-icon" required className=" text-sm rounded-lg  block w-full p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="name@gmail.com" />
                </div>
                <div className=' flex w-full flex-col'>
                <label htmlFor="message" className="block mb-2 mt-2 text-left text-sm font-medium  text-white">Your message</label>
                <textarea id="message" value={message} onChange={(e)=>{setMessage(e.target.value)}}  rows="4" required className="block p-2.5 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
            <div className='py-5'>
            <button type="submit" className="card  text-white  focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">{clicked?'Message sent!':'Send message'}</button>
            </div>
            </form>
        </div>
    )
}
