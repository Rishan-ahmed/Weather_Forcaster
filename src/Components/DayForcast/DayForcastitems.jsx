import React from 'react'
import { useSelector } from 'react-redux';
function DayForcastitems({date, max_temp, min_temp, image}) {

    const forcastData = useSelector((store) => store.forcast);
  return (
    <div className='flex flex-col min-w-[150px] justify-center items-center h-full'>
      <div>
        <p className='text-2xl'>{date}</p>
      </div>
      <div>
        <h1 className=''>{max_temp}&deg;C/ {min_temp}&deg;C</h1>
      </div>
      <div>
      <img src={image} alt="" />
      </div>
    </div>
  );
  
}

export default DayForcastitems