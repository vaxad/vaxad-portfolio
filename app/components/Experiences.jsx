import React, { useRef, useState } from 'react'
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import ExperienceCard from './ExperienceCard';
import ProgressBar from '@ramonak/react-progress-bar';
import { useEffect } from 'react';

export default function Experiences() {
    const [experiences, setexperiences] = useState([])
    useEffect(() => {
      const getdata = async() => {
      const res = await fetch('/api/experiences')
      const data = await res.json()
      console.log(data)
      const sorted = data.experiences.sort((a, b) => parseFloat(b.order) - parseFloat(a.order))
      setexperiences(sorted)
      }
      getdata()
    }, [])

  const swiper = useSwiper();
  const expswiperRef = useRef();
  const [page, setPage] = useState(0);
  useEffect(() => {
    if (page <= 0) {
      document.getElementById("exppbtn").style.color = "#656565";
    } else {
      document.getElementById("exppbtn").style.color = "#ffffff";
    }
    if (page >= experiences.length - 1) {
      document.getElementById("expnbtn").style.color = "#656565";
    } else {
      document.getElementById("expnbtn").style.color = "#ffffff";
    }
  }, [page, experiences]);
  return (
    <div id='experiences' className=' flex w-full flex-col justify-center items-center min-h-screen'>
        <h1 className=' lg:primaryText lg:p-head projhead w-full text-center py-8'> Experience</h1>
        <div className=' w-full py-8'>
        <Swiper
          modules={[Virtual]}
          spaceBetween={50}
          slideToClickedSlide={true}
          slidesPerView={1}
          onSlideChange={() => setPage(expswiperRef.current.activeIndex)}
          onSwiper={(swiper) => {
            expswiperRef.current = swiper;
          }}
          virtual
        >
          {experiences.map((element, index) => (
            <SwiperSlide key={element} virtualIndex={index}>
            <ExperienceCard url={element.url} title={element.role} company={element.company} skills={element.skills} location={element.location} date={element.date} img={element.img===""?"/office.png":element.img} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='grid grid-flow-row-dense grid-cols-5 grid-rows-1' style={{ marginTop: 40 }}>
          <div className='col-span-1 flex justify-start items-start mx-2'>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {
              if (page > 0)
                setPage(page - 1)
              expswiperRef.current.slidePrev()
            }} 
            id='exppbtn'
            fill='currentColor'
            stroke="currentColor"
            className="h-16 w-16 scale"
            style={{ color: '#ffffff' }} x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 27.875 14 C 27.652344 14.023438 27.441406 14.125 27.28125 14.28125 L 17.28125 24.28125 C 17.085938 24.46875 16.976563 24.730469 16.976563 25 C 16.976563 25.269531 17.085938 25.53125 17.28125 25.71875 L 27.28125 35.71875 C 27.679688 36.117188 28.320313 36.117188 28.71875 35.71875 C 29.117188 35.320313 29.117188 34.679688 28.71875 34.28125 L 19.4375 25 L 28.71875 15.71875 C 29.042969 15.417969 29.128906 14.941406 28.933594 14.546875 C 28.742188 14.148438 28.308594 13.929688 27.875 14 Z"></path>
</svg>
</div>
          <div className='col-span-3 ' style={{ alignItems: 'center', alignContent: 'center', }}>
            <ProgressBar completed={page * (100 / (experiences.length - 1))} isLabelVisible={false} bgColor='#ffffff' baseBgColor='#0f0f0f' animateOnRender={true} height={5} />
          </div>
          <div className='col-span-1 flex justify-end items-end mx-2' style={{ placeItems: 'end' }}>
          <svg onClick={() => {
                if (page < experiences.length - 1)
                  setPage(page + 1)
                expswiperRef.current.slideNext()
              }}
              fill='currentColor'
              stroke="currentColor"
              className="h-16 w-16 scale"
              style={{ color: '#ffffff' }} id='expnbtn' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
<path d="M 25 2 C 12.308594 2 2 12.308594 2 25 C 2 37.691406 12.308594 48 25 48 C 37.691406 48 48 37.691406 48 25 C 48 12.308594 37.691406 2 25 2 Z M 25 4 C 36.609375 4 46 13.390625 46 25 C 46 36.609375 36.609375 46 25 46 C 13.390625 46 4 36.609375 4 25 C 4 13.390625 13.390625 4 25 4 Z M 21.90625 13.96875 C 21.863281 13.976563 21.820313 13.988281 21.78125 14 C 21.40625 14.066406 21.105469 14.339844 21 14.703125 C 20.894531 15.070313 21.003906 15.460938 21.28125 15.71875 L 30.5625 25 L 21.28125 34.28125 C 20.882813 34.679688 20.882813 35.320313 21.28125 35.71875 C 21.679688 36.117188 22.320313 36.117188 22.71875 35.71875 L 32.71875 25.71875 C 32.914063 25.53125 33.023438 25.269531 33.023438 25 C 33.023438 24.730469 32.914063 24.46875 32.71875 24.28125 L 22.71875 14.28125 C 22.511719 14.058594 22.210938 13.945313 21.90625 13.96875 Z"></path>
</svg>
            
          </div>
        </div>
      </div>
    </div>
  )
}
