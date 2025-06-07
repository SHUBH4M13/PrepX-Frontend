import React from 'react';
import { ClockIcon } from "@heroicons/react/24/solid";
import InfoCard from '../Utility/InfoCard';

export default function FeatureCard(props) {
    return (
        <div className='md:w-[342px] md:h-[344px] w-[283px] h-[424px] bg-neutral-900 border-neutral-700 flex flex-col border-[1px] rounded-lg p-6 gap-5 hover:shadow-PrimaryGold shadow-md duration-300'>

            <div className='w-14 h-14 rounded-full flex justify-center items-center bg-[#4D5D53]/20'>
                <ClockIcon className='text-PrimaryGold size-8' />
            </div>

            <div className='flex gap-4 items-center '>
                <p className='font-Helvetica font-bold text-white text-lg'>{props.FeatureHead}</p>
                <div className='h-fit w-fit bg-PrimaryGold/30 flex justify-center items-center px-3 rounded-full'>
                    <p className='text-sm font-Helvetica text-PrimaryGold  '>{props.text}</p>
                </div>
            </div>

            <div>
                <p className='text-white/70 text-sm leading-relaxed'>{props.desc}</p>
            </div>

            <div className=' flex gap-4 '>
                <InfoCard text={props.infotext1} />
                <InfoCard text={props.infotext2} />
            </div>
            
        </div>
    );
}
