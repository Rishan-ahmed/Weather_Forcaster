import React from 'react'

function InfoCard({uv,msg}) {
  return (
    <div className="relative w-full h-full text-white">
    <div className="absolute inset-0 bg-black opacity-70 z-10 rounded-xl "></div>
    <div className='w-full h-full  z-20 absolute rounded-xl p-2'>
      <div className='flex items-center'>
     
      </div>
      <div className='p-2'>
        <h1 className='text-6xl'>{uv} {msg}</h1>
      </div>
      <div className='p-2'>
        
      </div>
      
    </div>
</div>
  )
}

export default InfoCard