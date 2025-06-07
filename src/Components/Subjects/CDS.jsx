import React from 'react'
import Navbar from '../Utility/Navbar'
import TestCard from '../Cards/TestCard'

export default function CDS() {
  return (
        <div className="bg-darkbg min-h-screen flex flex-col">
            <Navbar />

        <div className=' flex justify-center items-center'>
            <div 
            className=' px-3 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 animate-fade-in-bottom'>

                <TestCard
                    examCode = "CDS2025ELEMATHS01"
                    ExamName="CDS 2025 MATHS SET-1"
                    tag="2025"
                    desc="Number System, Elementary Number Theory, Algebra, Trigonometry, Geometry, Mensuration, and Statistics."
                    Questions="40+ Questions"
                    Duration="1 hours Duration"
                    
                />

                <TestCard
                    examCode = "CDS2025GK01"
                    ExamName="NDA 2025 GK SET-1"
                    tag="2025"
                    desc="The General Awareness section comprises questions from the Current Affairs general Science, history, polity, geography, Maths etc. "
                    Questions="30+ Questions"
                    Duration="1 hours Duration"
                />


            </div>
        </div>
        </div>
    )
}
