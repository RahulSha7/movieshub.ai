import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[15%] px-20 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-3xl py-5'> {title}</h1>
      <p className='w-1/2 text-lg'>{overview}</p>
      <div className='my-6'>
        <button className='bg-white text-black py-3 px-10  rounded-lg hover:bg-opacity-80'>  Play</button>
        <button className='mx-2 bg-gray-500 text-black py-3 px-8  rounded-lg '> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
