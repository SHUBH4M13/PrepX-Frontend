import React from 'react'

function Option(props) {
    return (
        <div className='w-full  h-[48px] rounded-lg border border-PrimaryGold duration-150 flex cursor-pointer'>
            <p className=' font-Helvetica text-white font-medium py-3 px-4'>
                {props.OptionA}
            </p>
            <p className=' font-Helvetica font-medium text-white py-3' >
                {props.OptionDesc}
            </p>
        </div>
    )
}

export default Option