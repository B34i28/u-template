import Image from 'next/image'
import React from 'react'
import Carimg from '../../../../public/carimg.png'
import Heroicons from '../../../../public/heroicons.png'
import { ChevronDown, ChevronUp, Euro } from 'lucide-react'

export default function Hero() {
  return (
    <div className='relative'>
        <div className='xl:w-[1920px] w-auto h-[496px] '>
            <Image src={Carimg} alt='Car Image' />
        </div>

        <div className='flex w-[350px] top-28 lg:top-36 lg:left-6 absolute lg:pl-10 xl:pl-10 flex-col border-4 pb-32 lg:w-[992px] rounded-lg justify-center xl:w-[1160px] xl:h-[698] xl:top-[21rem] xl:left-[320px] bg-[#FFFFFF] shadow-[#4E4E4E] '>
            <div className='w-[330px] lg:w-[945px] xl:w-[1073px] bg-gray-200 xl:h-[48px]'>
                <Image src={Heroicons} alt='Hero Icons' />
            </div>


            <div className='w-[330px] lg:w-[945px] space-y-5 mt-8 border-b-[1px] pb-9 stroke-[#B8B8B8] mb-4'>
                <div className='xl:flex space-y-1 lg:flex grid grid-cols-2 lg:space-x-9 xl:space-x-3'>
                    <p className='border-[1px] w-40 h-11 items-center flex rounded-[8px]  xl:w-[210px] xl:h-[52px] top-[-3242px] xl:pl-3 lg:pl-3 xl:left-[-81px] text-[#444444] stroke-[#B8B8B8] justify-between'>Make <ChevronDown /></p>
                    <p className='border-[1px] w-40 h-11 items-center flex rounded-[8px]  xl:w-[210px] xl:h-[52px] top-[-3242px] xl:pl-3 lg:pl-3 xl:left-[141px] text-[#444444] stroke-[#B8B8B8] justify-between'>Model <ChevronDown /></p>
                    <p className='border-[1px] w-40 h-11 items-center flex rounded-[8px]  xl:w-[192px] xl:h-[52px] xl:top-[-3242px] xl:pl-3 lg:pl-3 xl:left-[363px] text-[#444444] stroke-[#B8B8B8]'>Variant</p>
                    <button className='xl:w-[185px] w-40 h-11 xl:h-[52px] xl:top-[-3242px] text-[#FFFFFF] left-[567px] rounded-[8px] items-center  xl:px-[15px] xl:py-[16px] bg-[#003087]'>Add another vehicle</button>
                    <p className='border-[1px] w-40 h-11 items-center flex px-2 text-[#FFFFFF] bg-[#EF2C2E] xl:w-[229px] xl:h-[52px] left-[789px] top-[-3242]  lg:py-[18px] xl::px-[41px] xl::py-[16px] rounded-[8px] '>5.221.456 results</p>
                </div>

                <div className='xl:flex space-y-1 lg:flex grid grid-cols-2 lg:space-x-3 xl:space-x-3'>
                    <p className=' xl:w-[154px] w-40 h-11 xl:h-[52px] top[-3170px] left-[-81px] rounded-[8px] border-[1px] stroke-[#B8B8B8] pl-3 items-center flex bg-[#FFFFFF] text-[#444444] justify-between'>Price from <Euro /></p>
                    <p className=' xl:w-[154px] xl:h-[52px] top[-3170px] left-[-85px] rounded-[8px] border-[1px] stroke-[#B8B8B8] pl-3 items-center flex bg-[#FFFFFF] text-[#444444] w-40 h-11 justify-between'>Price up to <Euro /></p>
                    <p className=' xl:w-[146px] xl:h-[52px] top[-3170px] left-[251px] rounded-[8px] border-[1px] stroke-[#B8B8B8] pl-3 items-center flex bg-[#FFFFFF] text-[#444444] w-40 h-11 justify-between '>Year from <ChevronDown /></p>
                    <p className=' xl:w-[146px] xl:h-[52px] top[-3170px] left-[409px] rounded-[8px] border-[1px] stroke-[#B8B8B8] pl-3 items-center flex bg-[#FFFFFF] text-[#444444] w-40 h-11 justify-between'>Year up to <ChevronDown /></p>
                    <p className=' xl:w-[186px] xl:h-[52px] top[-3170px] left-[567px] rounded-[8px] border-[1px] stroke-[#B8B8B8] pl-3 items-center flex bg-[#FFFFFF] text-[#444444] w-40 h-11 justify-between'>Vehicle Type <ChevronDown /></p>
                    <button className='lg:w-52 xl:w-[229px] xl:h-[52px] top-[-3170] left-[789px] rounded-[8px] border-[1px] px-[30px] py-[8px] lg:px-[41px] lg:py-[7px] xl:px-[41px] xl:py-[16px] text-[#003087] border-[#003087] '>Save Search</button>
                </div>

                <div className='space-y-1 xl:flex lg:flex grid grid-cols-2 lg:space-x-3 xl:space-x-3'>
                    <p className=' xl:w-[154px] xl:h-[52px] top-[-3098px] left-[-81px] rounded-[8px] border-[1px] stroke-[#B8B8B8] items-center pl-3 flex w-40 h-11 bg-[#FFFFFF] text-[#444444] justify-between'>Fuel type <ChevronDown /></p>
                    <p className='lg:w-[150px] xl:w-[470px] pl-3   flex xl:h-[52px]  rounded-[8px] border-[1px] items-center stroke-[#B8B8B8] w-40 h-11 bg-[#FFFFFF] text-[#444444] '>Payment type
                    <button className='hidden md:block lg:block xl:block w-[160px] lg:px-[60px] h-[52px] top[-3098px] left-[85px] rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#EF2C2E] text-[#FFFFFf]'>Buy</button>
                    <p className='w-[135px] h-[52px] rounded-x-[8px] rounded-y-[0px] border-l-[1px] border-t-[1px] border-b-[1px] border-r-[0px] stroke-[#B8B8B8] bg-[#FFFFFF] text-[#444444] items-center flex md:pl-3 xl:pl-3 '>Leasing</p></p>  
                    
                    <p className='lg:absolute lg:left-[38rem] lg:justify-start xl:w-[186px] xl:h-[52px] xl:top-[-3098px] xl:left-[566px] justify-end rounded-[8px] border-[1px] items-center pl-3 flex stroke-[#B8B8B8] w-40 h-11 bg-[#FFFFFF] text-[#444444] '>City or Zip Code</p>
                    <button className='lg:absolute lg:left-[49rem] lg:w-48 xl:w-[229px] xl:h-[52px] xl:top-[-3098] xl:left-[789px] rounded-[8px] border-[1px] justify-center lg:py-[16px] items-center pl-3 px-[30px] py-[8px] xl:px-[41px] xl:py-[16px] text-[#003087] w-40 h-11 border-[#003087] flex'>Close filters <ChevronUp /></button>
                </div>
            </div>


            <div>

                <div className='w-[330px] lg:flex xl:flex grid grid-cols-2 mt-5 space-x-3 lg:space-x-7 '>
                    <div className='lg:w-60 xl:w-[260px] xl:h-[84px] rounded-[8px]  stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='text-lg font-semibold text-[#1E1E1E] '>Numbers of seats</h1>
                        <div className='flex lg:mt-1 xl:mt-1 mt-7'>
                            <p className='text-[#444444] xl:w-[126px] lg:w-[126px] flex items-center pl-3 lg:h-[44px] xl:h-[52px] w-40 h-11 rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>From <ChevronDown /></p>
                            <p className='text-[#444444] xl:w-[126px] lg:w-[126px] flex items-center pl-3 lg:h-[44px] xl:h-[52px] w-40 h-11 rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>To <ChevronDown /></p>
                        </div>
                    </div>

                    <div className='lg:w-60 xl:w-[260px] xl:h-[84px] rounded-[8px]  stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='lg:text-lg text-lg xl:text-lg font-semibold text-[#1E1E1E] '>Numbers of doors</h1>
                        <p className='mt-7 lg:mt-1 xl:w-[260px] lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] w-40 h-11 text-[#444444] stroke-[#B8B8B8] justify-between'>4 <ChevronDown /></p>
                    </div>

                    <div className='lg:w-60 xl:w-[260px] xl:h-[84px] rounded-[8px]  stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='text-lg font-semibold text-[#1E1E1E] '>Type and condition</h1>
                        <p className='mt-1 xl:w-[260px] lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] w-40 h-11 text-[#444444] stroke-[#B8B8B8] justify-between'>Any <ChevronDown /></p>
                    </div>

                    <div className=' lg:w-60 xl:w-[260px] xl:h-[84px] rounded-[8px]  stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='text-lg font-semibold text-[#1E1E1E] '>Power</h1>
                        <div className='flex lg:mt-1 xl:mt-1 mt-8'>
                            <p className='text-[#444444] xl:w-[126px] lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] w-40 h-11 border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>From <ChevronDown /></p>
                            <p className='text-[#444444] xl:w-[126px] lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] w-40 h-11 border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>Up to <ChevronDown /></p>
                        </div>
                    </div>
                </div>


                <div className='w-[330px] lg:flex xl:flex lg:space-x-4 grid grid-cols-2 mt-5 space-x-3 border-b-[1px] pb-9'>
                    <div className='lg:w-60 xl:w-[260px] xl:h-[84px] rounded-[8px]  stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='text-lg font-semibold text-[#1E1E1E] '>Leasing Duration</h1>
                        <div className='flex xl:mt-1 lg:mt-1 mt-8'>
                            <p className='text-[#444444] xl:w-[126px] w-40 h-11 lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>From <ChevronDown /></p>
                            <p className='text-[#444444] xl:w-[126px] w-40 h-11 lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>To <ChevronDown /></p>
                        </div>
                    </div>

                    <div className='lg:w-[16rem] xl:w-[260px] xl:h-[84px] rounded-[8px] stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='text-lg font-semibold text-[#1E1E1E] '>Leasing Kilometer per year</h1>
                        <div className='flex mt-1'>
                            <p className='text-[#444444] xl:w-[126px]  w-40 h-11 lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>From <ChevronDown /></p>
                            <p className='text-[#444444] xl:w-[126px]  w-40 h-11 lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] stroke-[#B8B8B8] bg-[#FFFFFF] justify-between'>To <ChevronDown /></p>
                        </div>
                    </div>

                    <div className='lg:w-60 xl:w-[260px] xl:h-[84px] rounded-[8px]  stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='text-lg lg:w-44 font-semibold text-[#1E1E1E] '>Origin of the vehicle</h1>
                        <p className='mt-1 xl:w-[260px]  w-40 h-11 lg:h-[44px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] text-[#444444] stroke-[#B8B8B8] justify-between'>Home plates<ChevronDown /></p>
                    </div>

                    <div className='lg:w-60 xl:w-[260px] xl:h-[84px] rounded-[8px]  stroke-[#B8B8B8] text-[#444444] '>
                        <h1 className='text-lg font-semibold text-[#1E1E1E] '>Ownership</h1>
                        <p className='lg:mt-1 xl:mt-1 mt-8 xl:w-[260px] lg:h-[44px] w-40 h-11 lg:w-[165px] xl:h-[52px] flex items-center pl-3 rounded-[8px] border-[1px] text-[#444444] stroke-[#B8B8B8] justify-end'> <ChevronDown /></p>
                    </div>


                </div>

            </div>
        </div>
    </div>
  )
}
