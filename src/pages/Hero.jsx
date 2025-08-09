import React from 'react'
import Navbar from '../components/Navbar'
import CarouselSectionOne from '../components/CarouselSectionOne'
import BigCardsSectionTwo from '../components/BigCardsSectionTwo'
// ctrl + < = settings

const Hero = () => {
  return (
    <div>
        <div className="max-w-[1750px] w-[95%] m-auto mt-0">
          <CarouselSectionOne />
          <BigCardsSectionTwo />
        </div>
    </div>
  )
}

export default Hero