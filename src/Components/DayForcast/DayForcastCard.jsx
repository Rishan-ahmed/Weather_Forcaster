import React from 'react';
import { useSelector } from 'react-redux';
import DayForcastitems from './DayForcastitems';
function DayForcastCard() {

    const dayforcastData = useSelector((store) => store.dayforcast);
    console.log("this is dayforcastCard")
    console.log(dayforcastData.days)
    return (
  <div className='w-full h-full flex overflow-x-scroll custom-scrollbar'>
    {dayforcastData.days?.map((item, index) => (
      <DayForcastitems date={item.date} max_temp={item.day.maxtemp_c} min_temp={item.day.mintemp_c} image={item.day.condition.icon}/>
    ))}
  </div>
  
  
    )
}

export default DayForcastCard