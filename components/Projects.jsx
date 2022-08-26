/* eslint-disable react/no-unescaped-entities */ 
import React from 'react'
import Image from 'next/image'

import createWand3D from "../public/assets/Projects/createWand3D.jpeg"
const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651ef]'>Projects</p>
            <h2>What I've built </h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651ef] to-[#709dff]'>
                     <Image className='rounded-xl group-hover:opacity-10' src={createWand3D} alt="/" />
                     <div>
                        <h3>Wizard Creator</h3>
                     </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Projects