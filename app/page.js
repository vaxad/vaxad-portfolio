"use client"

import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Lines from "./components/Lines";


export default function Main() {
  const hiddenRef = useRef();
  return (
    <>
    <div className='static-overlay flex w-full '>
      <div className='app flex flex-col w-full px-6 md:px-12 lg:px-24'>
      <Lines/>
      <Navbar hiddenRef={hiddenRef}/>
      <Home/>
      <Projects hiddenRef={hiddenRef}/>
      </div>
      </div>
      </>
  )
}
