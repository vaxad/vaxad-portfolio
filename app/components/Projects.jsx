import React, { useEffect, useRef, useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import "swiper/css"
import ProjectCard from './ProjectCard'
import ProgressBar from "@ramonak/react-progress-bar";
import PhoneCard from './PhoneCard';
import ServerCard from './ServerCard';
import Form from './Form';
import { motion } from 'framer-motion';

const Projects = ({ hiddenRef }) => {
  
  // useEffect(() => {
  //   const getData = async() => {
  //     const resp =  await fetch('/api/github')
  //     const data= await resp.json()
  //     console.log(data)
  //   }
  //   getData()
  // }, [])
  
  const swiper = useSwiper();
  const swiperRef = useRef();
  const [page, setPage] = useState(0);
  const [projects, setprojects] = useState(
  [{ web: "https://youtu.be/07G-66KQ3zA", url: "https://github.com/vaxad/bistro-client", title: "BistroBites", desc: "Dynamic restaurant websites, enabling seamless customer orders, admin control, menu updates, password security, and feedback channels using Next.js", img: ['/sample.gif'] },
  { web: "https://vblog-vaxad.vercel.app/", url: "https://github.com/vaxad/vblog-client", title: "vBlog", desc: "Experience unparalleled blogging with my Next.js-powered website: create, update, and delete posts, engage through comments, and connect via user profiles. Enjoy secure authentication, follow users, and show appreciation through likes.", img: ['/sample.gif'] },
  { web: "https://imdb-1000.vercel.app/", url: "https://github.com/vaxad/imdb-1000", title: "IMDB-1000", desc: "A Next.js site: Real-time IMDb top 1000 movies via self-made API. Jump ranks, delve into cinematic details", img: ['/sample.gif'] },
  { web: "https://main--venerable-pithivier-2cdd0c.netlify.app/", url: "https://github.com/vaxad/vYou-client", title: "vYou", desc: "vYou is a social media website having features like creating, viewing, liking, deleting posts aided with user authentication", img: ['/sample.gif'] },
  { web: "https://main--bejewelled-cannoli-02eee9.netlify.app/", url: "https://github.com/vaxad/vnotes-client", title: "vNotebook", desc: "vNotebook is a note keeping website facilitating creation/viewing/editing/deletion of notes", img: ['/sample.gif'] },
  { web: "https://wikikaro.vercel.app/", url: "https://github.com/vaxad/nextJs-wikiAPI", title: "WikiKaro", desc: "WikiKaro is a search engine for wikipedia articles that uses the wikipedia API, created for getting started with next.js", img: ['/sample.gif'] }])
  const [sprojects, setsprojects] = useState(
  [{ web: "https://bistro-backend-pceo.onrender.com", repo: "https://github.com/vaxad/bistro-backend", title: "BistroBites server", desc: "Backend for restaurant platform, facilitating food management, secure admin access, order processing, and feedback handling" },
  { web: "https://vblog-qz53.onrender.com/", repo: "https://github.com/vaxad/vblog-server", title: "vBlog server", desc: "Handles CRUD operations for blog posts, comments, and user profiles along with authentication and functionalities like user follow/unfollow, post liking" },
  { web: "https://imdb-scraping-in.onrender.com/", repo: "https://github.com/vaxad/imdb-scraping", title: "IMDB-1000 server", desc: "A robust custom server to efficiently deliver real-time IMDb data by web-scraping. Seamlessly handles requests, ensuring rapid access to movie insights" },
  { web: "https://vyou.onrender.com/", repo: "https://github.com/vaxad/vYou-server", title: "vYou server", desc: "vYou server is a social media backend with primary features of user and post CRUD along with likes and user authenticatuon" }])
  const [appProjects, setappProjects] = useState(
  [{ web: "https://youtu.be/ogduAxdy5M4", repo: "https://github.com/vaxad/festivity_client", title: "Festivity", desc: "Festivity is a community gathering app project, created in collaboration for MumbaiHacks", img: ['/sample2.gif', '/sample2.gif', '/sample2.gif'] },
  { web: "https://youtube.com/shorts/dIS6E3EB69U?feature=share", repo: "https://github.com/vaxad/01_healthcare", title: "Swasthya", desc: "Swasthya is an healthcare app integrated with ABHA id and other features", img: ['/sample2.gif', '/sample2.gif', '/sample2.gif'] }])

  const changePage = (event) => {
    setPage(event.target.value)
    swiperRef.current.slideTo(page)
  }
  
  const url = 'https://portfolio-server-am21.onrender.com'
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`/api/github`)
      const resp = await res.json()
      console.log(resp)
      const arr = resp.web.sort((a, b) => (parseFloat(b.id) - parseFloat(a.id)))
      setprojects(arr)
      if(page===projects.length-1)
      swiperRef.current.slidePrev()
      const arr2 = resp.app.sort((a, b) => (parseFloat(b.id) - parseFloat(a.id)))
      setappProjects(arr2)
      if(apage===appProjects.length-1)
      aswiperRef.current.slidePrev()
      const arr3 = resp.server.sort((a, b) => (parseFloat(b.id) - parseFloat(a.id)))
      setsprojects(arr3)
      if(spage===sprojects.length-1)
      sswiperRef.current.slidePrev()
    }
    getData()
  }, [])


  useEffect(() => {
    if (page <= 0) {
      document.getElementById("pbtn").style.color = "#656565";
    } else {
      document.getElementById("pbtn").style.color = "#ffffff";
    }
    if (page >= projects.length - 1) {
      document.getElementById("nbtn").style.color = "#656565";
    } else {
      document.getElementById("nbtn").style.color = "#ffffff";
    }
  }, [page, projects]);

  const aswiperRef = useRef();
  const [apage, setaPage] = useState(0);

  const changeaPage = (event) => {
    setaPage(event.target.value)
    aswiperRef.current.slideTo(apage)
  }

  useEffect(() => {
    if (apage <= 0) {
      document.getElementById("apbtn").style.color = "#656565";
    } else {
      document.getElementById("apbtn").style.color = "#ffffff";
    }
    if (apage >= appProjects.length - 1) {
      document.getElementById("anbtn").style.color = "#656565";
    } else {
      document.getElementById("anbtn").style.color = "#ffffff";
    }
  }, [apage, appProjects]);

  const sswiperRef = useRef();
  const [spage, setsPage] = useState(0);

  const changesPage = (event) => {
    setsPage(event.target.value)
    sswiperRef.current.slideTo(spage)
  }

  useEffect(() => {
    if (spage <= 0) {
      document.getElementById("spbtn").style.color = "#656565";
    } else {
      document.getElementById("spbtn").style.color = "#ffffff";
    }
    if (spage >= sprojects.length - 1) {
      document.getElementById("snbtn").style.color = "#656565";
    } else {
      document.getElementById("snbtn").style.color = "#ffffff";
    }
  }, [spage, sprojects]);


return (

  <div style={{}} id='projects' ref={hiddenRef} className=' mb-16'>
    <section className=" w-full ">
      <motion.div 
        initial={"hidden"} whileInView="visible" transition={{ duration: 0.8, ease: 'easeOut' }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}  className=" py-5">
        <h1 className="lg:primaryText lg:p-head projhead w-full text-center " style={{ color: '#f0f0f5', marginBottom: 30, alignSelf: 'center', justifyContent: 'center', textAlign: 'center' }}>
          My Projects
        </h1>
        <p className=' lg:text-base md:text-sm text-xs lg:mb-8 mb-2 w-full text-center'>(this data is collected in real-time from my github repositories)</p>
      </motion.div>
      <div className=' mb-24'>
        <Swiper
          modules={[Virtual]}
          spaceBetween={50}
          slideToClickedSlide={true}
          slidesPerView={1}
          onSlideChange={() => setPage(swiperRef.current.activeIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          virtual
        >
          {projects.map((element, index) => (
            <SwiperSlide key={element} virtualIndex={index}>
              <ProjectCard web={element.web} repo={element.url} title={element.title} desc={element.desc} img={element.img[0]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='grid grid-flow-row-dense grid-cols-5 grid-rows-1' style={{ marginTop: 40 }}>
          <div className='col-span-1 flex justify-start items-start mx-2'>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
              if (page > 0)
                setPage(page - 1)
              swiperRef.current.slidePrev()
            }} 
            id='pbtn'
            fill='currentColor'
            stroke="currentColor"
            className="h-16 w-16 scale"
            style={{ color: '#ffffff' }} x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 27.875 14 C 27.652344 14.023438 27.441406 14.125 27.28125 14.28125 L 17.28125 24.28125 C 17.085938 24.46875 16.976563 24.730469 16.976563 25 C 16.976563 25.269531 17.085938 25.53125 17.28125 25.71875 L 27.28125 35.71875 C 27.679688 36.117188 28.320313 36.117188 28.71875 35.71875 C 29.117188 35.320313 29.117188 34.679688 28.71875 34.28125 L 19.4375 25 L 28.71875 15.71875 C 29.042969 15.417969 29.128906 14.941406 28.933594 14.546875 C 28.742188 14.148438 28.308594 13.929688 27.875 14 Z"></path>
</svg>
</div>
          <div className='col-span-3 ' style={{ alignItems: 'center', alignContent: 'center', }}>
            <ProgressBar completed={page * (100 / (projects.length - 1))} isLabelVisible={false} bgColor='#ffffff' baseBgColor='#0f0f0f' animateOnRender={true} height={5} />
          </div>
          <div className='col-span-1 flex justify-end items-end mx-2' style={{ placeItems: 'end' }}>
          <svg onClick={() => {
                if (page < projects.length - 1)
                  setPage(page + 1)
                swiperRef.current.slideNext()
              }}
              fill='currentColor'
              stroke="currentColor"
              className="h-16 w-16 scale"
              style={{ color: '#ffffff' }} id='nbtn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 21.90625 13.96875 C 21.863281 13.976563 21.820313 13.988281 21.78125 14 C 21.40625 14.066406 21.105469 14.339844 21 14.703125 C 20.894531 15.070313 21.003906 15.460938 21.28125 15.71875 L 30.5625 25 L 21.28125 34.28125 C 20.882813 34.679688 20.882813 35.320313 21.28125 35.71875 C 21.679688 36.117188 22.320313 36.117188 22.71875 35.71875 L 32.71875 25.71875 C 32.914063 25.53125 33.023438 25.269531 33.023438 25 C 33.023438 24.730469 32.914063 24.46875 32.71875 24.28125 L 22.71875 14.28125 C 22.511719 14.058594 22.210938 13.945313 21.90625 13.96875 Z"></path>
</svg>
            
          </div>
        </div>
      </div>

      {/* for phone */}

      <div className=' mb-24'>
        <Swiper
          modules={[Virtual]}
          spaceBetween={50}
          slideToClickedSlide={true}
          slidesPerView={1}
          onSlideChange={() => setaPage(aswiperRef.current.activeIndex)}
          onSwiper={(swiper) => {
            aswiperRef.current = swiper;
          }}
          virtual
        >
          {appProjects.map((element, index) => (
            <SwiperSlide key={element} virtualIndex={index}>
              <PhoneCard web={element.web} repo={element.url} title={element.title} desc={element.desc} img1={element.img[0]} img2={element.img[1]} img3={element.img[2]} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='grid grid-flow-row-dense grid-cols-5 grid-rows-1' style={{ marginTop: 40 }}>
          <div className='col-span-1 flex justify-start items-start mx-2'>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
              if (apage > 0)
                setaPage(apage - 1)
              aswiperRef.current.slidePrev()
            }} 
            id='apbtn'
            fill='currentColor'
            stroke="currentColor"
            className="h-16 w-16 scale"
            style={{ color: '#ffffff' }} x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 27.875 14 C 27.652344 14.023438 27.441406 14.125 27.28125 14.28125 L 17.28125 24.28125 C 17.085938 24.46875 16.976563 24.730469 16.976563 25 C 16.976563 25.269531 17.085938 25.53125 17.28125 25.71875 L 27.28125 35.71875 C 27.679688 36.117188 28.320313 36.117188 28.71875 35.71875 C 29.117188 35.320313 29.117188 34.679688 28.71875 34.28125 L 19.4375 25 L 28.71875 15.71875 C 29.042969 15.417969 29.128906 14.941406 28.933594 14.546875 C 28.742188 14.148438 28.308594 13.929688 27.875 14 Z"></path>
</svg>
</div>
          <div className='col-span-3' style={{ alignItems: 'center', alignContent: 'center', }}>
            <ProgressBar completed={apage * (100 / (appProjects.length - 1))} isLabelVisible={false} bgColor='#ffffff' baseBgColor='#0f0f0f' animateOnRender={true} height={5} />
          </div>
          <div className='col-span-1 flex justify-end items-end mx-2' style={{ placeItems: 'end' }}>
          <svg onClick={() => {
                if (apage < projects.length - 1)
                  setaPage(apage + 1)
                aswiperRef.current.slideNext()
              }}
              fill='currentColor'
              stroke="currentColor"
              className="h-16 w-16 scale"
              style={{ color: '#ffffff' }} id='anbtn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 21.90625 13.96875 C 21.863281 13.976563 21.820313 13.988281 21.78125 14 C 21.40625 14.066406 21.105469 14.339844 21 14.703125 C 20.894531 15.070313 21.003906 15.460938 21.28125 15.71875 L 30.5625 25 L 21.28125 34.28125 C 20.882813 34.679688 20.882813 35.320313 21.28125 35.71875 C 21.679688 36.117188 22.320313 36.117188 22.71875 35.71875 L 32.71875 25.71875 C 32.914063 25.53125 33.023438 25.269531 33.023438 25 C 33.023438 24.730469 32.914063 24.46875 32.71875 24.28125 L 22.71875 14.28125 C 22.511719 14.058594 22.210938 13.945313 21.90625 13.96875 Z"></path>
</svg>
          </div>
        </div>
      </div>

      {/* for server */}

      <div className=''>
        <Swiper
          modules={[Virtual]}
          spaceBetween={50}
          slideToClickedSlide={true}
          slidesPerView={1}
          onSlideChange={() => setsPage(sswiperRef.current.activeIndex)}
          onSwiper={(swiper) => {
            sswiperRef.current = swiper;
          }}
          virtual
        >
          {sprojects.map((element, index) => (
            <SwiperSlide key={element} virtualIndex={index}>
              <ServerCard web={element.web} repo={element.url} title={element.title} desc={element.desc} img={index % 2 == 0 ? '/server1.png' : '/server2.png'} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='grid grid-flow-row-dense grid-cols-5 grid-rows-1' style={{ marginTop: 40 }}>
          <div className='col-span-1 flex justify-start items-start mx-2'>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
              if (spage > 0)
                setsPage(spage - 1)
              sswiperRef.current.slidePrev()
            }} 
            id='spbtn'
            fill='currentColor'
            stroke="currentColor"
            className="h-16 w-16 scale"
            style={{ color: '#ffffff' }} x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 27.875 14 C 27.652344 14.023438 27.441406 14.125 27.28125 14.28125 L 17.28125 24.28125 C 17.085938 24.46875 16.976563 24.730469 16.976563 25 C 16.976563 25.269531 17.085938 25.53125 17.28125 25.71875 L 27.28125 35.71875 C 27.679688 36.117188 28.320313 36.117188 28.71875 35.71875 C 29.117188 35.320313 29.117188 34.679688 28.71875 34.28125 L 19.4375 25 L 28.71875 15.71875 C 29.042969 15.417969 29.128906 14.941406 28.933594 14.546875 C 28.742188 14.148438 28.308594 13.929688 27.875 14 Z"></path>
</svg>
          
          </div>
          <div className='col-span-3' style={{ alignItems: 'center', alignContent: 'center', }}>
            <ProgressBar completed={spage * (100 / (sprojects.length - 1))} isLabelVisible={false} bgColor='#ffffff' baseBgColor='#0f0f0f' animateOnRender={true} height={5} />
          </div>
          <div className='col-span-1 flex justify-end items-end mx-2' style={{ placeItems: 'end' }}>
          <svg onClick={() => {
                if (spage < projects.length - 1)
                  setsPage(spage + 1)
                sswiperRef.current.slideNext()
              }}
              fill='currentColor'
              stroke="currentColor"
              className="h-16 w-16 scale"
              style={{ color: '#ffffff' }} id='snbtn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 21.90625 13.96875 C 21.863281 13.976563 21.820313 13.988281 21.78125 14 C 21.40625 14.066406 21.105469 14.339844 21 14.703125 C 20.894531 15.070313 21.003906 15.460938 21.28125 15.71875 L 30.5625 25 L 21.28125 34.28125 C 20.882813 34.679688 20.882813 35.320313 21.28125 35.71875 C 21.679688 36.117188 22.320313 36.117188 22.71875 35.71875 L 32.71875 25.71875 C 32.914063 25.53125 33.023438 25.269531 33.023438 25 C 33.023438 24.730469 32.914063 24.46875 32.71875 24.28125 L 22.71875 14.28125 C 22.511719 14.058594 22.210938 13.945313 21.90625 13.96875 Z"></path>
</svg>
          </div>
        </div>
      </div>
    </section>
  </div>

)
}

export default Projects