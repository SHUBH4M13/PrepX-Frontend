import React from 'react'
import { useState, useEffect } from 'react'
import { ClockIcon } from "@heroicons/react/24/outline"

export default function Timer({ duration }) {

    const [Time, setTime] = useState(duration);


    useEffect(() => {
    if (Time === 0) return

    const Timer = setInterval(() => {
            setTime((prev) => prev - 1)
        }, 1000)

        return () => clearInterval(Timer)
    }, [])

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
      };

    return (
        <div>
           <div className=" flex items-center gap-2">
            <ClockIcon className=" text-PrimaryGold size-6 " />
            <p className=" text-white text-lg font-Helvetica ">{formatTime(Time)}</p>
          </div>
        </div>
    )
}
