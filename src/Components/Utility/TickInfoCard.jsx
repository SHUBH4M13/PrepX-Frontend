import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function TickInfoCard( props ) {
  return (
      <div className='  sm:w-[156px] bg-darkgreen/50 flex justify-center items-center gap-2 px-3 rounded-full'>
        <FontAwesomeIcon icon={faCheck} className="text-PrimaryGold" />
        <p className='text-white/90 text-sm sm:text-md font-Helvetica'>{props.text}</p>
      </div>
  );
}
