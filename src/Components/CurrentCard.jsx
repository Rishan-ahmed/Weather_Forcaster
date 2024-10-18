import React from 'react'
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import VisibilityIcon from '@mui/icons-material/Visibility';
import OpacityIcon from '@mui/icons-material/Opacity';
import { colors } from '@mui/material';
function CurrentCard({title,temp, count}) {
  return (
    <div className="relative w-full h-full text-white">
        <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-xl "></div>
        <div className='w-full h-full  z-20 absolute rounded-xl p-2'>
          <div className='flex items-center'>
            {
            count === 1 ? (
              <DeviceThermostatIcon sx={{ color: 'white', fontSize: '2.5rem' }} />
            ) : count === 2 ? (
              <WaterDropIcon sx={{ color: 'white', fontSize: '2.5rem' }} />
            ) : count === 3 ? (
              <VisibilityIcon sx={{ color: 'white', fontSize: '2.5rem' }} />
            ): count === 4 ? (
              <OpacityIcon sx={{ color: 'white', fontSize: '2.5rem' }} />
            ) : null
            }
          
          <h1 className='px-2'>{title}</h1>
          </div>
          <div className='p-2'>
            <h1 className='text-6xl'>{temp}</h1>
          </div>
          <div className='p-2'>
            
          </div>
          
        </div>
    </div>
  )
}

export default CurrentCard