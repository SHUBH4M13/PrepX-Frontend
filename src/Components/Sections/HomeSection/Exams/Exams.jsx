import React from 'react'
import GoldHeading from '../../../Utility/GoldHeading'
import ExamCard from '../../../Cards/ExamCard'
import { useNavigate } from 'react-router';
import {motion} from 'framer-motion'

export default function Exams() {

  const Navigate = useNavigate();

  const GoToNDA = () => {
    Navigate("/NDA")
  }

  const GoToCDS = () => {
    Navigate("/CDS")
  }

  const GoToAFCAT= () => {
    Navigate("/AFCAT")
  }

  const ComingSoonOverlay = () => (
    <div className="absolute inset-0 bg-black/70 rounded-xl flex flex-col items-center justify-center z-10 backdrop-blur-sm">
      <div className="bg-PrimaryGold/90 px-6 py-3 rounded-lg shadow-lg transform rotate-[-5deg]">
        <p className="text-darkbg font-bold text-xl md:text-2xl tracking-wider">COMING SOON</p>
      </div>
      <p className="text-white mt-4 px-4 text-center text-sm md:text-base">
        This exam module is under development and will be available shortly
      </p>
    </div>
  );

  return (

    <div className='bg-darkbg'>

      <motion.div
      initial = {{ opacity: 0 , x: -200   }}
      whileInView={{opacity: 1 , x: 0  }}
      transition={{ duration: 1 }}
      viewport={{once: true , amount: 0.2 }}
      className='bg-darkbg w-full px-10' >
        <GoldHeading
          heading="Mission Selection"
          semiheading="Choose Your Battleground"
          text1="Select your target exam and begin specialized preparation with our tailored mock"
          text2="tests designed by defence experts."
        />
      </motion.div>

      <div className='h-full flex justify-center items-center pb-10'>
        <motion.div
        initial = {{ opacity: 0 , y: 200   }}
        whileInView={{opacity: 1 , y: 0  }}
        transition={{ duration: 1 }}
        viewport={{once: true}}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>

          <div onClick={GoToNDA}>
            <ExamCard
              title="NDA"
              subtitle="National Defence Academy"
              description="Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
            />
          </div>

          <div onClick={GoToCDS}>
            <ExamCard
            title="CDS"
            subtitle="Combined Defence Services"
            description="Practice with our CDS mock tests covering English, general knowledge, and elementary mathematics in exam format."
          />
          </div>
          
          <div onClick={GoToAFCAT}>
          <ExamCard 
            title="AFCAT"
            subtitle="Air Force Common Admission Test"
            description="Soar through AFCAT preparation with our specialized tests covering general awareness, verbal, and numerical ability."
          />
          </div>
          
          <div className="relative">
            <ComingSoonOverlay />
            <ExamCard
              title="CAPF"
              subtitle="Central Armed Police Forces"
              description="Prepare for CAPF AC with our specialized tests focusing on general studies, mental ability, and numerical aptitude."
            />
          </div>
          
          <div className="relative">
            <ComingSoonOverlay />
            <ExamCard
              title="INET"
              subtitle="Indian Navy Entrance Test"
              description="Navigate through INET preparation with our comprehensive tests for mathematics, English, general science and reasoning."
            />
          </div>

          <div className="relative">
            <ComingSoonOverlay />
            <ExamCard
              title="INET"
              subtitle="Indian Navy Entrance Test"
              description="Navigate through INET preparation with our comprehensive tests for mathematics, English, general science and reasoning."
            />
          </div>


        </motion.div>
      </div>

    </div>

  )
}