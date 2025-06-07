import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function Footer() {
  return (

    <div className=' h-fit bg-darkbg w-full  border-PrimaryGold border-t-2'>

      <div className=' flex justify-center items-center'>

        <div className=' py-5 flex flex-col items-center'>
          <div>
            <h4 className=' py-2 font-Helvetica font-bold text-PrimaryGold text-3xl'>PrepX</h4>
          </div>
          <div className=' p-3  py-5'>
            <p className=' text-center text-dullwhite '>PrepX offers mock tests and AI-driven analysis to help you excel in defence exams like NDA, CDS, and AFCAT.</p>
          </div>

          <div className=' flex justify-center items-center gap-5 '>
            <SocialIcon url="https://twitter.com" bgColor='#141414' />
            <SocialIcon url="https://instagram.com" bgColor='#141414' />
            <SocialIcon url="https://linkedin.com" bgColor='#141414' />
          </div>

        </div>

      </div>


    </div>

  )
}
