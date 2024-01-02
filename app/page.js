"use client"

import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Lines from "./components/Lines";
import Form from "./components/Form";
import Achievements from "./components/Achievements";
import Experiences from "./components/Experiences";
import Toast from "./components/Toast"

export default function Main() {
  const hiddenRef = useRef();
  const [toast, setToast] = useState(false)
  const [text, setText] = useState("Hello visitor!")
  const [error,setError] = useState(false)
  useEffect(() => {
    setText("Explore my most recent portfolio, this one is outdated!")
    setError(true)
    setToast(true)
  }, [])
  
  return (
    <>
    <div className='static-overlay flex w-full '>
      <div className='app flex flex-col w-full px-6 md:px-12 lg:px-24'>
      <Lines/>
      <Navbar hiddenRef={hiddenRef}/>
      <Home/>
      <Toast toast={toast} text={text} setToast={setToast} error={error}/>
      <Projects hiddenRef={hiddenRef}/>
      <Achievements/>
      <Experiences/>
      <Form/>
      </div>
      </div>
      </>
  )
}
