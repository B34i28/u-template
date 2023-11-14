import Image from 'next/image'
import React from 'react'
import Heroimg from '../../../../public/carimg.png'

export default function Himg() {
  return (
    <div className='bg-slate-500 sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px]'>
        <Image src={Heroimg} alt='Hero Image' />
    </div>
  )
}
