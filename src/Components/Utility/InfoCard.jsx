import React from 'react';


export default function InfoCard(props) {
  return (
      <div className='h-fit w-fit bg-neutral-700 flex justify-center items-center gap-2 px-3 py-1 rounded-full  opacity-75'>
        <p className='text-white/90 text-xs font-Helvetica'>{props.text}</p>
      </div>
  );
}
