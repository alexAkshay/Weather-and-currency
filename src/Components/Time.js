import React, { useEffect, useState } from 'react'
import './Component.css'


export default function Time() {
    const [currentTime, setCuttenstTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    useEffect(()=>{
      setInterval(()=>{
        setCuttenstTime(new Date().toTimeString());
        setCurrentDate(new Date().toDateString());
      }, 1000)
    },[currentDate, currentTime])
  return (
    <div className='time-contaienr' >
<div className='time'>{currentTime}</div>
<div className='time'>{currentDate}</div>
    </div>
  )
}
