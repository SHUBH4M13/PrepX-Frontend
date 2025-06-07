import React from 'react'
import Navbar from '../Utility/Navbar'
import TestCard from '../Cards/TestCard'

export default function AFCAT() {
  return (
        <div className="bg-darkbg min-h-screen flex flex-col">
            <Navbar />

        <div className=' flex justify-center items-center'>
            <div 
            className=' px-3 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 animate-fade-in-bottom'>

                <TestCard
                    examCode = "AFCAT2024GK01"
                    ExamName="AFCAT 2025 GK SET-1"
                    tag="2025"
                    desc="The Air Force Common Admission Test (AFCAT) includes four main subject areas: General Awareness, Verbal Ability in English, Numerical Ability and Reasoning, and Military Aptitude Test."
                    Questions="40+ Questions"
                    Duration="1 hours Duration"
                    
                />


            </div>
        </div>
        </div>
    )
}
