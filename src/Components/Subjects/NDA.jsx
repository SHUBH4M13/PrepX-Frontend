import React from 'react';
import TestCard from '../Cards/TestCard';
import Footer from '../Utility/Footer';
import Navbar from '../Utility/Navbar';

export default function NDA() {

    return (
        <div className="bg-darkbg min-h-screen flex flex-col">
            <Navbar />

        <div className=' flex justify-center items-center'>
            <div 
            className=' px-3 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 animate-fade-in-bottom'>

                <TestCard
                    examCode = "NDA2024GAT01"
                    ExamName="NDA 2024 GAT SET-1"
                    tag="2022"
                    desc="The GAT has 150 questions, with 50 on English and 100 on GK . Each correct answer is worth 4 marks, and each incorrect answer deducts 1.33 marks."
                    Questions="50+ Questions"
                    Duration="1 hours Duration"
                    
                />

                <TestCard
                    examCode = "NDA2024MATHS01"
                    ExamName="NDA 2024 Maths SET-1"
                    tag="2022"
                    desc="covers various topics, including Algebra, Matrices and Determinants, Trigonometry, Analytical Geometry"
                    Questions="30+ Questions"
                    Duration="1 hours Duration"
                />


            </div>
        </div>
        </div>
    );
}
