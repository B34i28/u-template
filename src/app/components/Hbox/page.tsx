import Image from 'next/image'
import React from 'react'
import Icons from '../../../../public/heroicons.png'
import { ChevronDown, ChevronUp, Euro } from 'lucide-react'

export default function Hbox() {
  return (
    <div className='bg-slate-200  border-[1px] rounded-[8px] shadow-[#4E4E4E] border-[#FFFFFF] sm:w-[640px] '>
      <Image src={Icons} alt='icons' />

      <div className='grid grid-cols-2 space-y-2 py-3'>
        <p className='mt-2 flex justify-between text-[#444444] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 bg-white'>Make <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 bg-white'>Model <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 bg-white'>Variant</p>
        <button className='flex justify-between text-[#FFFFFF] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 text-sm bg-[#003087]'>Add another vehicle</button>
        <p className='flex justify-between text-[#FFFFFF] stroke-[#B8B8B8] rounded-[8px] border-[1px] items-center w-40 h-9 bg-[#EF2C2E]'>5.221.456 results</p>
      </div>

      <div className='grid grid-cols-2 space-y-2 py-1'>
        <p className='mt-2 flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9'>Price from <Euro /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9'>Price up to <Euro /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9'>Year from <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9'>Year up to <ChevronDown /></p>
        <p className='flex justify-between text-[#444444] bg-[#FFFFFF] items-center stroke-[#B8B8B8] rounded-[8px] border-[1px] w-40 h-9'>Vehicle Type <ChevronDown /></p>
        <button className='flex justify-center text-[#003087] border-[#003087] items-center rounded-[8px] border-[1px] w-40 h-9'>Save Search</button>
      </div>

      <div className='grid grid-cols-2 space-y-2'>
        <p className='mt-2 flex justify-between bg-[#FFFFFF] text-[#444444] stroke-[#B8B8B8] w-40 h-9 rounded-[8px] border-[1px] items-center'>Fuel type <ChevronDown /></p>

        <div className='flex text-sm rounded-[8px] border-[1px] bg-[#FFFFFF]'>

          <p className='rounded-[8px] border-[1px] stroke-[#B8B8B8] items-center bg-[#FFFFFF] text-[#444444] w-24 h-9'>Payment Type</p>
          <button className='stroke-[#B8B8B8] bg-[#EF2C2E] text-[#FFFFFf] rounded-[8px] border-[1px] hidden'>Buy</button>
          <p className='rounded-[8px] border-[1px] stroke-[#B8B8B8] items-center bg-[#FFFFFF] text-[#444444] w-16 h-9 '>Leasing</p>
          
        </div>
        <p className='flex bg-[#FFFFFF] text-[#444444] stroke-[#B8B8B8] w-40 h-9 rounded-[8px] border-[1px] items-center'>City or Zip Code</p>
        <button className='flex justify-between bg-[#FFFFFF] text-[#444444] stroke-[#B8B8B8] w-40 h-9 rounded-[8px] border-[1px] items-center'>Close filters <ChevronUp /></button>
      </div>


      <div className='grid grid-cols-2 space-y-2'>

        <div className='rounded-[8px] mt-2'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Numbers of seats</h1>
          <div className='flex'>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>From <ChevronDown /></p>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>To <ChevronDown /></p>
          </div>
        </div>

        <div className='rounded-[8px]'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Numbers of doors</h1>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-40 h-9'>4 <ChevronDown /></p>
        </div>

        <div className='rounded-[8px]'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Type and condition</h1>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-40 h-9'>Any <ChevronDown /></p>

        </div>

        <div className='rounded-[8px]'>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Power</h1>
          <div className='flex '>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>From <ChevronDown /></p>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>To <ChevronDown /></p>
          </div>
        </div>

      </div>


      <div className='grid grid-cols-2 space-y-2'>

        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] mt-2'>Leasing Duration</h1>
          <div className='flex mt-8'>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>From <ChevronDown /></p>
            <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>To <ChevronDown /></p>
          </div>
        </div>

        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Leasing Kilometer per year</h1>
            <div className='flex mt-1'>
              <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>From <ChevronDown /></p>
              <p className='text-[#444444] flex items-center rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between w-20 h-9'>To <ChevronDown /></p>
            </div>
        </div>

        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Origin of the vehicle</h1>
          <p className='flex items-center rounded-[8px] border-[1px] text-[#444444] stroke-[#B8B8B8] justify-between bg-[#FFFFFF] w-40 h-9'>Home plates<ChevronDown /></p>
        </div>
        
        <div>
          <h1 className='text-lg font-semibold text-[#1E1E1E] '>Ownership</h1>
          <p className='flex items-center rounded-[8px] border-[1px] text-[#444444] stroke-[#B8B8B8] justify-between bg-[#FFFFFF] w-40 h-9'> <ChevronDown /></p>
        </div>

      </div>

    </div>
  )
}
