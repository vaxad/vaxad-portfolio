import React, { useEffect, useRef } from 'react'

const Navbar = ({hiddenRef}) => {

  useEffect(() => {
    
    window.addEventListener('scroll', scrollHandler);
 
    return () => window.removeEventListener('scroll', scrollHandler);
    
}, []);

const openMenu=()=>{
  var x = document.getElementById("navbar-sticky");
  
  if (x.className.includes("topnav")&&!x.className.includes("responsive")) {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

const scrollHandler = () => {
  // console.log(window.scrollY + window.innerHeight - hiddenRef.current.offsetTop)
  if(window.scrollY + window.innerHeight - hiddenRef.current.offsetTop>=3550){
    document.getElementById("contactNav").style.color = "#747bff";
      document.getElementById("projNav").style.color = "#ffffff";
      document.getElementById("achNav").style.color = "#ffffff";
      document.getElementById("expNav").style.color = "#ffffff";
      document.getElementById("homeNav").style.color = "#ffffff";
  }else if(window.scrollY + window.innerHeight - hiddenRef.current.offsetTop>=2900){
    document.getElementById("contactNav").style.color = "#ffffff";
      document.getElementById("projNav").style.color = "#ffffff";
      document.getElementById("achNav").style.color = "#ffffff";
      document.getElementById("expNav").style.color = "#747bff";
      document.getElementById("homeNav").style.color = "#ffffff";
  }else if(window.scrollY + window.innerHeight - hiddenRef.current.offsetTop>=2150){
      document.getElementById("contactNav").style.color = "#ffffff";
        document.getElementById("projNav").style.color = "#ffffff";
        document.getElementById("achNav").style.color = "#747bff";
        document.getElementById("expNav").style.color = "#ffffff";
        document.getElementById("homeNav").style.color = "#ffffff";
        }else if(window.scrollY + window.innerHeight - hiddenRef.current.offsetTop>=400){
      document.getElementById("contactNav").style.color = "#ffffff";
        document.getElementById("projNav").style.color = "#747bff";
        document.getElementById("achNav").style.color = "#ffffff";
        document.getElementById("expNav").style.color = "#ffffff";
        document.getElementById("homeNav").style.color = "#ffffff";
        }else{
          document.getElementById("contactNav").style.color = "#ffffff";
          document.getElementById("projNav").style.color = "#ffffff";
          document.getElementById("achNav").style.color = "#ffffff";
          document.getElementById("expNav").style.color = "#ffffff";
        document.getElementById("homeNav").style.color = "#747bff";
        }
    
}
  
  const scroll = () => {
    openMenu()
    const section = document.querySelector( '#projects' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  const scrollBack = () => {
    openMenu()
    const section = document.querySelector( '#home' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  const scrollAch = () => {
    openMenu()
    const section = document.querySelector( '#achievements' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  const scrollExp = () => {
    openMenu()
    const section = document.querySelector( '#experiences' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  const scrollForm = () => {
    openMenu()
    const section = document.querySelector( '#form' );
    section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
  };
  return (
    
<nav className=" bg-dark bg-dark fixed w-full z-20 top-0 left-0 border-b  border-gray-600 " style={{backgroundColor:'#000000', opacity:0.87, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
  <div className="lg:max-w-screen-xl md:max-w-screen-sm flex flex-wrap items-center justify-between mx-auto p-4" >
  <a href="/" className="flex items-center">
      <img src="/varadglow.png" className="h-8 mr-3" alt="Varad's"/>
      <span className="self-center lg:text-2xl lg:font-semibold whitespace-nowrap text-white">Portfolio</span>
  </a>
  <div className="flex md:order-2">
  <a href = "/varad_resume.pdf" download = "Varad's Resume">
      <button type="button" className="card text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 lg:font-medium  rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600  dark:focus:ring-blue-800">Get Resume</button>
      </a>
      <button data-collapse-toggle="navbar-sticky" onClick={openMenu}  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg lg:hidden focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="true">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="topnav items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-sticky" style={{backgroundColor:'#000000'}}>
    <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border  rounded-lg  lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0  bg-gray-800 md:bg-gray-900 border-gray-700" style={{backgroundColor:'#000000'}}>
    <li>
        <a onClick={()=>{scrollBack()}} className="trans block py-2 pl-3 pr-4  rounded   md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" style={{backgroundColor:'#000000', color:'#747bff'}} aria-current="page" id="homeNav">Home</a>
      </li>
      <li>
        <a onClick={()=>{scroll()}} className="trans block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" style={{backgroundColor:'#000000'}} id="projNav">Projects</a>
      </li>
      <li>
        <a onClick={()=>{scrollAch()}} className="trans block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" style={{backgroundColor:'#000000'}} id="achNav">Achievements</a>
      </li>
      <li>
        <a onClick={()=>{scrollExp()}} className="trans block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" style={{backgroundColor:'#000000'}} id="expNav">Experiences</a>
      </li>
      <li>
        {/* <a href="https://mail.google.com/mail/u/0/?fs=1&to=prabhuvrd@gmail.com&su=&body=&bcc=&tf=cm" target='_blank' className="trans block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 " style={{backgroundColor:'#000000'}}>Contact</a> */}
        <a onClick={()=>{scrollForm()}} className="trans block py-2 pl-3 pr-4  rounded  md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700" style={{backgroundColor:'#000000'}} id="contactNav">Contact</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

  )
}

export default Navbar