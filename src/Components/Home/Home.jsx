import React, { useState , useEffect} from 'react'
import CurrentCard from '../CurrentCard'
import ForcastCard from '../Forcast/ForcastCard'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Divider } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ThermostatAutoIcon from '@mui/icons-material/ThermostatAuto';
import StormIcon from '@mui/icons-material/Storm';
import SearchBar from '../SearchBar';
import { useSelector } from 'react-redux';
import { getWeatherMessage } from './weatherMessages';
import DayForcastCard from '../DayForcast/DayForcastCard';
import InfoCard from '../InfoCard';


function Home() {

  const data = useSelector((store)=>store.current)
  const WeatherMessage = getWeatherMessage(data.condition_code)
  const [image, setImage] = useState()
  useEffect(() => {
 
    setImage(WeatherMessage[2])
    
  }, [WeatherMessage])
  
  
  return (
    <div className='w-full h-screen px-28 pt-32 pb-16 md:p-20 relative  '>

      <div className="absolute inset-0 z-10 blur-sm" style={{backgroundImage: `url(${image})`,backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}></div>
      
      <div className=' w-full h-full rounded-3xl flex flex-col md:flex-row justify-between p-16  relative z-20'>
      <div className="absolute bg-black opacity-70 inset-0 z-40 rounded-xl"></div>
       
        <div className='w-full md:w-[42%] h-[50%] md:h-full rounded-xl flex flex-col justify-between mb-5 md:mb-0 z-50 '>
        
          <div className=' w-full h-[6%] rounded-2xl z-20'>
            <SearchBar/>
          </div>
          <div className=' w-full h-[90%] relative rounded-xl' style={{background:`url(${image})`, backgroundSize: 'cover'}}>
          <div className="absolute inset-0 bg-black opacity-40 z-10 rounded-xl"></div>
            <div className='w-full h-[40%] flex flex-col text-white items-center justify-center p-10 space-y-2 z-20 relative'>
              <h1 className='text-6xl'> <span ><img src={WeatherMessage[1]} alt="" />{data.temp_c}&deg;C</span></h1>
              <h1> <span>{data.country}</span> <span>{data.city}</span> {data.localtime}</h1>
              <h1 className='text-4xl'>{data.condition_text} Day</h1>
              <p>{WeatherMessage[0]}</p>
            </div>
            <div className='w-full h-[60%]  flex flex-wrap justify-between p-3 md:p-5 z-20 relative'>
              <div className=' h-[50%] w-[46%] mb-2 rounded-xl'>
                <CurrentCard title={"FEELS LIKE"} temp={data.feelslike_c} count={1}/>
              </div>
              <div className='h-[50%] w-[46%] mb-2 rounded-xl'>
                <CurrentCard title={"PRECIPACITION"} temp={data.precip_in}  count={2}/>
              </div>
              <div className='h-[50%] w-[46%] mb-2 rounded-xl'>
                <CurrentCard title={"VISIBILITY"} temp={data.vis_miles}  count={3}/>
              </div>
              <div className='h-[50%] w-[46%] mb-2 rounded-xl'>
                <CurrentCard title={"HUMIDITY"} temp={data.humidity} count={4}/>
              </div>
            </div>
          </div>
        </div>
        
        <div className='w-full md:w-[55%] h-[50%] md:h-full rounded-xl flex flex-col z-50 text-white'>
        <div className='w-full h-[30%]  mb-3 md:mb-5 relative'>
          <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-xl"></div>
          <div className='w-full h-full relative z-20 p-4'>
          <div className='flex h-[20%]'>
            <AccessTimeIcon sx={{color:"white"}}/>
            <h1 className='px-2'>HOURLY FORCAST</h1>
            <Divider style={{ backgroundColor: 'blue' }} />
          </div>
            <div className='h-[80%]'>
              <ForcastCard />
            </div>
          </div>
            
          </div>
          <div className='w-full h-[30%]  mb-3 md:mb-5 relative'>
          <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-xl"></div>
          <div className='w-full h-full relative z-20 p-4'>
          <div className='flex h-[20%]'>
            <CalendarMonthIcon sx={{color:"white"}}/>
            <h1 className='px-2'>10-DAY FORCAST</h1>
            <Divider style={{ backgroundColor: 'blue' }} />
          </div>
          <div className='h-[80%]'>
              <DayForcastCard/>
            </div>
          </div>
          </div>
          <div className='w-full h-[30%] flex justify-between mb-3 md:mb-5'>
            <div className='relative h-full w-[48%]'>
            <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-xl"></div>
            <div className='w-full h-full relative z-20 p-4'>
          <div className='flex h-[20%]'>
            <ThermostatAutoIcon sx={{color:"white"}}/>
            <h1 className='px-2'>UV INDEX</h1>
            <Divider style={{ backgroundColor: 'blue' }} />
          </div>
          <div className='h-[80%]'>
              <InfoCard uv={data.uv} msg={""}/>
            </div>
          </div>
            </div>
            <div className='h-full w-[48%] relative'>
            <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-xl"></div>
            <div className='w-full h-full relative z-20 p-4'>
          <div className='flex h-[20%]'>
            <StormIcon sx={{color:"white"}}/>
            <h1 className='px-2'>WIND</h1>
            <Divider style={{ backgroundColor: 'blue' }} />
          </div>
          <div className='h-[80%]'>
          <InfoCard uv={data.wind} msg={"MPH"}/>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
