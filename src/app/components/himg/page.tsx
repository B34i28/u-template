import Image from 'next/image'
import React from 'react'
import Heroimg from '../../../../public/carimg.png'

export default function Himg() {
  return (
    <div className='bg-slate-500 w-[280px] sm:w-[640px]'>
        <Image src={Heroimg} alt='Hero Image' />
    </div>
  )
}
