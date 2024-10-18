import React from 'react';
import ForcastItems from './ForcastItems';
import { useSelector } from 'react-redux';

function ForcastCard() {
  const data = useSelector((store) => store.current);
  const forcastData = useSelector((store) => store.forcast);

  const currentHour = data?.localtime?.substring(11, 13);

  const filteredForecast = forcastData?.hours?.filter(item => {
    const forecastHour = item?.time?.substring(11, 13); 
    return forecastHour >= currentHour;
  });

  return (
    <div className='w-full h-full flex overflow-x-scroll custom-scrollbar'>
      {filteredForecast?.map((item, index) => (
        <ForcastItems
          key={index}
          time={item.time}
          temp={item.temp_c}
          url={item.condition.icon}
          index={index}
        />
      ))}
    </div>
  );
}

export default ForcastCard;
