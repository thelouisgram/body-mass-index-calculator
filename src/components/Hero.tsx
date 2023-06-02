import React from 'react'
import style from '../style'
import BmiCalculator from './Hero/BmiCalculator'
import HeroText from './Hero/HeroText'

const Hero: React.FC = () => {
  const { width } = style

  return (
    // Parent Container
    <div className='w-full md:mx-auto lg:w-[1300px] relative'>
      <div className={` ${width} pt-10 md:pt-14 z-20 relative`}>
        {/* Logo Container */}
        <div className='w-full flex justify-center md:justify-start'>
          <img src='/images/logo.svg' alt='Logo' className='w-[60px] h-auto' />
        </div>
        {/* Content Container */}
        <div className='flex flex-col px-4 xs:px-6 md:px-0 md:flex-row md:justify-between h-auto gap-12 md:items-start md:h-[500px]'>
          {/* Hero Text Section */}
          <HeroText />
          {/* Bmi Calculator Section */}
          <BmiCalculator />
        </div>
      </div>
      {/* Background container */}
      <div className='gradient-bg z-10 absolute' />
    </div>
  )
}

export default Hero
