import React from 'react'
import { useSelector } from 'react-redux';

function ForcastItems({time, temp, url, index}) {
  const forcastData = useSelector((store) => store.forcast);
  return (
    
    <div className={`flex flex-col min-w-[150px] justify-center rounded-xl items-center h-full ${index === 0 ? 'bg-[#34333D]' : ''}`}>
      <div>
        <p>{time.substring(10)}</p>
      </div>
      <div>
        <h1 className='text-2xl'>{temp}&deg;C</h1>
      </div>
      <div>
      <img src={url} alt="" />
      </div>
    </div>
  
  );
}

export default ForcastItems;
