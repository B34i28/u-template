import Image from 'next/image'
import React from 'react'
import Icons from '../../../../public/heroicons.png'
import { ChevronDown, ChevronUp, Euro } from 'lucide-react'

export default function Hbox() {
  return (
    <div className='bg-[#FFFFFF] lg:px-3 lg:pb-20 border-[1px] rounded-[8px] shadow-sm shadow-[#4E4E4E] sm:w-[640px] md:w-[768px] lg:w-[800px] lg:absolute lg:ml-32 lg:top-60 xl:ml-64 xl:top-72'>
      <Image src={Icons} alt='icons' />

      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex space-y-2 py-3'>
        <p className='mt-2 flex justify-between text-[#444444] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 bg-white'>Make <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 bg-white'>Model <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 bg-white'>Variant</p>
        <button className='flex justify-between text-[#FFFFFF] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 text-sm bg-[#003087] pl-1'>Add another vehicle</button>
        <p className='flex justify-between text-[#FFFFFF] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 bg-[#EF2C2E] pl-1'>5.221.456 results</p>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex space-y-2 py-1'>
        <p className='mt-2 flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>Price from <Euro /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>Price up to <Euro /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>Year from <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>Year up to <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>Vehicle Type <ChevronDown /></p>
        <button className='flex justify-center text-[#003087] border-[#003087] items-center rounded-[8px] border-[1px] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>Save Search</button>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex space-y-2 lg:border-b-2 lg:border-[#B8B8B8] lg:pb-7'>
        <p className='mt-2 flex justify-between bg-[#FFFFFF] text-[#444444] stroke-[#B8B8B8] w-40 h-9 md:w-56 md:h-11 rounded-[8px] border-[1px] items-center lg:w-40 lg:h-11'>Fuel type <ChevronDown /></p>

        <div className='flex items-center text-sm rounded-[8px] border-[1px] md:w-56 w-40 lg:w-[20rem] lg:h-11 bg-[#FFFFFF]'>

          <p className='rounded-[8px] border-[1px] stroke-[#B8B8B8] flex items-center bg-[#FFFFFF] text-[#444444] w-24 h-9 md:w-20 md:h-11 lg:w-[10rem] lg:h-11'>Payment Type</p>
          <button className='stroke-[#B8B8B8] bg-[#EF2C2E] text-[#FFFFFf] rounded-[8px] border-[1px] hidden md:block lg:block md:w-16 md:h-11 lg:w-[8rem] lg:h-11'>Buy</button>
          <p className='rounded-[8px] border-[1px] stroke-[#B8B8B8] flex items-center bg-[#FFFFFF] text-[#444444] w-16 h-9 md:w-16 md:h-11 lg:w-[8rem] lg:h-11'>Leasing</p>
          
        </div>
        <p className='flex bg-[#FFFFFF] text-[#444444] stroke-[#B8B8B8] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 rounded-[8px] border-[1px] items-center'>City or Zip Code</p>
        <button className='flex justify-between bg-[#FFFFFF] text-[#444444] stroke-[#B8B8B8] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 rounded-[8px] border-[1px] items-center'>Close filters <ChevronUp /></button>
      </div>


      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex space-y-2'>

        <div className='rounded-[8px] mt-2 md:mt-2'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Numbers of seats</h1>
          <div className='flex md:w-56 md:h-11 lg:w-[14rem] lg:h-11'>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>From <ChevronDown /></p>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>To <ChevronDown /></p>
          </div>
        </div>

        <div className='rounded-[8px]'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Numbers of doors</h1>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>4 <ChevronDown /></p>
        </div>

        <div className='rounded-[8px]'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Type and condition</h1>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11'>Any <ChevronDown /></p>

        </div>

        <div className='rounded-[8px]'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Power</h1>
          <div className='flex md:w-56 md:h-11 lg:w-[14rem] lg:h-11'>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>From <ChevronDown /></p>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>To <ChevronDown /></p>
          </div>
        </div>

      </div>


      <div className='grid grid-cols-2 md:grid-cols-3 lg:flex space-y-2 lg:border-b-2 lg:border-[#B8B8B8] lg:pb-7'>

        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] mt-2'>Leasing Duration</h1>
          <div className='flex mt-8 md:mt-1 md:w-56 md:h-11 lg:w-[14rem] lg:h-11'>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>From <ChevronDown /></p>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>To <ChevronDown /></p>
          </div>
        </div>

        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Leasing Kilometer per year</h1>
            <div className='flex mt-1 md:w-56 md:h-11 lg:w-[14rem] lg:h-11'>
              <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>From <ChevronDown /></p>
              <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9 md:w-28 md:h-11'>To <ChevronDown /></p>
            </div>
        </div>

        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Origin of the vehicle</h1>
          <p className='flex items-center rounded-[8px] border-[1px] text-[#444444] stroke-[#B8B8B8] justify-between bg-[#FFFFFF] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 lg:mt-1'>Home plates<ChevronDown /></p>
        </div>
        
        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Ownership</h1>
          <p className='flex items-center rounded-[8px] border-[1px] text-[#444444] stroke-[#B8B8B8] justify-end md:justify-end bg-[#FFFFFF] w-40 h-9 md:w-56 md:h-11 lg:w-40 lg:h-11 lg:mt-1'> <ChevronDown /></p>
        </div>

      </div>

    </div>
  )
}
