import React from 'react'

export default function GoldHeading(props) {
    return (
        <div className=' flex flex-col gap-2 items-center  '>

            <div className=' w-fit h-fit flex justify-center items-center sm:gap-4 gap-2 py-10 '>
                <div className=' bg-PrimaryGold h-[2px] sm:w-[48px] w-[28px] '></div>
                <p className=' text-PrimaryGold font-Helvetica sm:text-md text-sm text-center font-bold uppercase'>{props.heading}</p>
                <div className=' bg-PrimaryGold h-[2px] sm:w-[48px] w-[28px]'></div>
            </div>

            <div className=' flex justify-center items-center '>
                <h1 className=' text-4xl sm:text-5xl md:text-6xl font-Helvetica text-center font-bold text-white'>{props.semiheading}</h1>
            </div>

            <div className=' py-5 hover:text-white duration-300'>
                <p className=' text-white/80 text-center text-sm sm:text-md md:text-lg hover:text-white duration-300 '> {props.text1}
                </p>
                <p className=' text-white/80 text-center text-sm sm:text-md md:text-lg hover:text-white duration-300 '> {props.text2}
                </p>
            </div>

        </div>

    )
}
