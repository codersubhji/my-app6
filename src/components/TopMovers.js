import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import {FreeMode} from "swiper"
import 'swiper/css'
import "swiper/css/free-mode"
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'
import "./Top.css"
function TopMovers() {
  return (

    <div>
        <h1 className='heading'>Top Movers</h1>
   <div className=' py-2 px-3 justify-content-center'>

    <Swiper freeMode={true}
    grabCursor={true}
    modules={[FreeMode]}
    className='mySwiper'
    breakpoints={{
        0:{
            slidesPerView:2,
            spaceBetween:10,
        },
        480:{
            slidesPerView:2,
            spaceBetween:10,
        },
        768:{
            slidesPerView:3,
            spaceBetween:15,
        },
        950:{
            slidesPerView:4,
            spaceBetween:25,
        },
        1250:{
            slidesPerView:5,
            spaceBetween:30,
        }
    }}
    >
        <SwiperSlide>
           <Card/>
        </SwiperSlide>
     
        <SwiperSlide>
           <Card/>
        </SwiperSlide>
        <SwiperSlide>
           <Card/>
        </SwiperSlide>
        <SwiperSlide>
           <Card/>
        </SwiperSlide>
        <SwiperSlide>
           <Card/>
        </SwiperSlide>

        <SwiperSlide>
           <Card/>
        </SwiperSlide>
        <SwiperSlide>
           <Card/>
        </SwiperSlide>
        <SwiperSlide>
           <Card/>
        </SwiperSlide>
        <SwiperSlide>
           <Card/>
        </SwiperSlide>
        
    </Swiper>
    
   </div>
   </div>
  )
}

export default TopMovers