import React from 'react'
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import TickInfoCard from '../../Utility/TickInfoCard'
import MacbookProcess from './MacBookProcess'

export default function HeroText(props) {
    return (
        <div className=' bg-darkbg w-full flex flex-col lg:flex-row md:justify-between xl:justify-around gap-4 md:gap-2 px-4 sm:px-14 py-16 lg:gap-8'>

            <div className='flex flex-col animate-fade-in-left'>

                <div>
                    <div>

                        <div className='flex items-center justify-center sm:justify-start' >

                            <div>
                                <h1 className=' text-3xl text-center sm:text-left sm:text-6xl font-Helvetica text-PrimaryGold font-bold'>Conquer</h1>
                            </div>
                            <div>
                                <h1 className='px-2 text-3xl text-center sm:text-left sm:text-6xl font-Helvetica text-white font-bold '>
                                    Defence
                                </h1>
                            </div>

                        </div>

                        <h1 className='text-3xl  text-center sm:text-left sm:text-6xl font-Helvetica font-bold text-white'>
                                Exams
                            </h1>

                        <div className='flex items-center justify-center sm:justify-start'>
                            
                            <div>
                                <h1 className='text-3xl text-center sm:text-left  sm:text-6xl  font-Helvetica font-bold text-white'>
                                    With Precision
                                </h1>
                            </div>
                        </div>

                        <div>
                            <p className=' py-5 text-xl text-center sm:text-left text-white/90 font-Helvetica '> Prepare for NDA, CDS, AFCAT, and more with military-grade <br /> mock tests designed to ensure your success. <br /> Train like a warrior,
                                succeed like a champion. </p>
                        </div>
                    </div>

                    <div className=' flex justify-center sm:justify-start gap-5 py-5 '>
                        <div
                        onClick={props.Scrolldown}
                         className='  bg-PrimaryGold px-4 sm:px-10 font-Helvetica font-bold hover:bg-hovergold duration-300 rounded-xl flex justify-center items-center'>
                            <button className=' text-darkbg p-2.5 sm:p-6 font-Helvetica font-bold  text-md rounded-xl'>Start Training Now</button>
                            <ArrowRightIcon className='size-8 sm:size-4 font-bold text-Secondarybg' />
                        </div>

                        <div 
                        onClick={props.ScrollFeatures}
                        className=' px-2 border-darkgreen border-2 font-Helvetica rounded-xl flex justify-center hover:border-PrimaryGold duration-300 hover:bg-Secondarybg items-center '>
                            <button className=' text-white p-2.5 sm:p-6 font-Helvetica rounded-xl text-md'>Explore Features</button>
                            <PlusIcon className='size-8 sm:size-4 font-bold text-white' />
                        </div>

                    </div>

                    <div className=' py-6 opacity-0 sm:opacity-100'>
                        <div className=' flex gap-8 justify-center lg:justify-start '>
                            <TickInfoCard text="Instant results" />
                            <TickInfoCard text="Train Free" />
                        </div>
                    </div>

                </div>

            </div>

            <div className='flex justify-center lg:justify-start animate-fade-in-right'>
                <MacbookProcess />
            </div>

        </div>
    )
}
