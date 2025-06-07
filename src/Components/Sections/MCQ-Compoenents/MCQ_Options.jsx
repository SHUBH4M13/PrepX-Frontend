import React, { useState } from 'react';

function MCQ_Options(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {

        setIsClicked(!isClicked);
    };

    return (
        <div 
            className={`w-full h-[48px] rounded-lg border border-PrimaryGold duration-150 flex cursor-pointer ${isClicked ? 'bg-hovergold/30' : 'hover:bg-hovergold/30'}`}
            onClick={handleClick}
        >
            <p className='font-Helvetica font-medium text-white py-3'>
                {props.OptionDesc}
            </p>
        </div>
    );
}

export default MCQ_Options;