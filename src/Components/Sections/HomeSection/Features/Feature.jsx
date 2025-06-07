import React from 'react'
import GoldHeading from '../../../Utility/GoldHeading'
import FeatureCard from '../../../Cards/FeatureCard'
import { motion } from 'framer-motion'

export default function Feature() {
    return (
        <div className=' py-6  h-full '>
            <div className=' bg-Secondarybg/55 '>
                    <motion.div 
                    initial = {{ opacity: 0 , x: -200   }}
                    whileInView={{opacity: 1 , x: 0  }}
                    transition={{ duration: 1 }}
                    viewport={{once: true , amount: 0.4 }}
                    className='  h-full  flex justify-center'>
                        <GoldHeading
                            heading="Strategic Advantage"
                            semiheading=" Battle-Ready Features"
                            text1="Our platform is equipped with military-grade tools designed to enhance your"
                            text2="preparation and maximize your chances of success."
                        />
                    </motion.div>
            </div>

            <div className=' flex justify-center bg-Secondarybg/55 py-4 '>
                <motion.div 
                initial = {{ opacity: 0 , y: 200   }}
                whileInView={{opacity: 1 , y: 0  }}
                transition={{ duration: 1 }}
                viewport={{once: true }}
                className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 items-center '>

                    <FeatureCard
                        FeatureHead="Timed Test Mode"
                        text="Essentail"
                        desc="Simulate real exam conditions with our timed mode. Train under pressure to improve your speed and accuracy, just like in actual defence exams."
                        infotext1="Time Management"
                        infotext2="Exam Simulation"
                    />
                    <div className=' hidden lg:block  '>
                        <FeatureCard
                            FeatureHead="Tab-Switch Detection"
                            text="Advanced"
                            desc="Our platform detects tab switching during tests, enforcing exam discipline and preventing unfair advantages. Build integrity while you prepare."
                            infotext1="Anti-Cheating"
                            infotext2="Discipline Buidling"
                        />
                    </div>
                    <FeatureCard
                        FeatureHead="Non-Timed Practice"
                        text="Foundational"
                        desc="Strengthen your concepts at your own pace with our non-timed practice mode. Perfect for building fundamental knowledge before facing time constraints."
                        infotext1="Self-Paced"
                        infotext2="Concept Building"
                    />
                    <FeatureCard
                        FeatureHead="AI-Based Analysis"
                        text="Strategic"
                        desc="Receive detailed performance insights powered by AI. Identify your strengths and weaknesses to create a targeted improvement strategy."
                        infotext1="Insights"
                        infotext2="Targeted Improvement"
                    />
                    <FeatureCard
                        FeatureHead="Extensive Question Bank"
                        text="Comprehensive"
                        desc="Access thousands of meticulously curated questions covering all defence exam subjects. Updated regularly to reflect the latest exam patterns."
                        infotext1="Updated Content"
                        infotext2="Complete Coverage"
                    />

                    <div className=' hidden lg:block '>

                        <FeatureCard
                            FeatureHead="Secure Test Environment"
                            text="Protected"
                            desc="Experience a fully secure testing platform with protocols that mimic actual examination conditions, preparing you for the disciplined environment of defence exams."
                            infotext1="Exam Simulation"
                            infotext2="Integrity Checks"
                        />
                    </div>


                </motion.div>
            </div>


        </div>

    )
}

// FeatureHead , text ,  desc
