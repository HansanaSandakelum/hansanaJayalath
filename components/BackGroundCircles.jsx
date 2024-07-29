import React from 'react'
// import { motion } from "framer-motion"

const BackGroundCircles = () => {
  return (
    <div className='relative flex items-center justify-center left-11 top-[-6.5rem]'>
        <div className='absolute border border-[#3385ff] rounded-full h-[80px] w-[80px] mt-52 animate-ping'></div>
        
        <div className='absolute border border-[#3385ff] rounded-full h-[80px] w-[80px] mt-52 animate-ping '></div>
        {/* <div className='absolute border border-[#fb1a12] rounded-full h-[80px] w-[80px] mt-52 animate-ping'></div> */}
        {/* <div className='absolute border border-red-500 rounded-full h-[800px] w-[800px] mt-52 '></div> */}
    </div>
  )
}

export default BackGroundCircles