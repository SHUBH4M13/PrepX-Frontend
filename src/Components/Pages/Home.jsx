import React, { useRef } from 'react';
import Navbar from '../Utility/Navbar'
import HeroText from '../Sections/HomeSection/HeroText'
import NumbersStrap from '../Sections/HomeSection/NumbersStrap'
import Feature from '../Sections/HomeSection/Features/Feature'
import Exams from '../Sections/HomeSection/Exams/Exams'
import { Analytics } from "@vercel/analytics/react"
import Footer from '../Utility/Footer'

export default function Home() {
  const targetRef = useRef(null);
  const SecTargetRef = useRef(null);

  const scrollToTarget = () => {
    targetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFea = () => {
    SecTargetRef.current?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <div className='bg-darkbg w-full '>
      
      <Navbar />
      <Analytics />
      <HeroText Scrolldown={scrollToTarget}  ScrollFeatures = {scrollToFea} />

      <div className=' flex justify-center items-center'>
        <NumbersStrap />
      </div>

      <div ref={SecTargetRef}>
        <Feature />
      </div>


      <div ref={targetRef}>
        <Exams />
      </div>

      <div className=' py-10'>
        <Footer />
      </div>
    </div>
  )
}
