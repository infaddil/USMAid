import Hero from '@/components/Home/Hero'
import Navbar from '@/components/Home/Navbar'
import React from 'react'

const HomePage = () => {
  return (
    <div className='transition-fade'>
    <Navbar />
    <Hero />
    </div>
  )
}

export default HomePage