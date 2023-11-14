import React from 'react'
import { ChevronDown, Facebook, Instagram, Linkedin, X, Youtube } from 'lucide-react';
import PlayStore from '../../../../public/GooglePlayBanner.svg'
import AppStore from '../../../../public/AppStoreBanner.svg'
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='lg:mt-[31rem] sm:w-[640px] xl:w-[1280px] md:w-[768px] lg:w-[1024px] h-[771px]'>
        <div className='flex flex-col lg:flex-row bg-[#003087] justify-around px-4 border-b-[1px] border-[#FFFFFF] '>

            <div className='py-14'>
                <h1 className='text-[#FFFFFF] xl:w-[472px] xl:h-[82px] text-3xl font-medium '>The most wanted makes and models</h1>
                
                <div className='md:w-[550px] w-[300px] lg:w-[470px] h-[215px] md:grid md:grid-cols-2 grid grid-cols-1 lg:grid-cols-2 rounded-[8px] gap-4 mt-8'>
                    <button className='text-[#FFFFFF] rounded-lg bg-blue-800 h-[27] py-2 px-4 flex justify-center items-center text-xl '>Audi A4</button>
                    <button className='text-[#FFFFFF] rounded-lg  bg-blue-800 h-[27] py-2 px-4 flex justify-center items-center text-xl '>Volkswagen</button>
                    <button className='text-[#FFFFFF] rounded-lg bg-blue-800 h-[27] py-2 px-4 flex justify-center items-center text-xl '>Sakoka Octavia</button>
                    <button className='text-[#FFFFFF] rounded-lg  bg-blue-800 h-[27] py-2 px-4 flex justify-center items-center text-xl '>BMW 5 Series</button>
                    <button className='text-[#FFFFFF] rounded-lg bg-blue-800 h-[27] py-2 px-4 flex justify-center items-center text-xl '>Fiant Punto</button>
                    <button className='text-[#FFFFFF] rounded-lg  bg-blue-800 h-[27] py-2 px-4 flex justify-center items-center text-xl '>Renault Clio</button>

                </div>
                <div className='flex gap-11 mt-60'>
                    <button className='text-[#003087] flex bg-white rounded-full py-2 px-9 text-lg'>English <ChevronDown /></button>
                    <button className='text-[#003087] bg-white rounded-full py-2 px-7 text-lg flex'><p className='rounded-3xl bg-[#003087] p-3 mr-1'></p>Light</button>
                </div>
            </div>


            <div className='py-14'>
                <h1 className='text-[#FFFFFF] text-3xl font-medium'>Quick Links</h1>
                <ul className='space-y-5 py-8'>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Vehicle Assessment</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Safe. scam-free used car shopping</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Email ads</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Book of impreesions</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Advantages of advertising</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Frequently asked questions</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Digital advertising</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>About us</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Terms of use</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Privacy notice</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>You provide car services</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Mobile applications</li>
                    <li className='text-gray-300 text-base hover:bg-blue-800'>Friends of the site</li>
                </ul>
            </div>


            <div className='py-14 '>
                <h1 className='text-[#FFFFFF] flex justify-start lg:justify-end md:justify-start xl:justify-end  text-3xl font-medium'>Let's connect</h1>
                <div className='flex space-x-4 py-12'>
                    <Facebook className='bg-[#FFFFFF] rounded-full p-1' size={40} />
                    <Instagram className='bg-[#FFFFFF] rounded-full p-1' size={40} />
                    <Linkedin className='bg-[#FFFFFF] rounded-full p-1' size={40} />
                    <Youtube className='bg-[#FFFFFF] rounded-full p-1' size={40} />
                    <X className='bg-[#FFFFFF] rounded-full p-1' size={40} />
                </div>
                <div className='flex '>
                    <Image src={PlayStore} alt='googleplaystore banner' />
                    <Image src={AppStore} alt='apple store banner' />
                </div>
            </div>
        </div>


        <div className='bg-[#003087] xl:w-auto xl:py-8 lg:py-4 flex justify-center'>
            <p className='text-[#FFFFFF] text-lg'>Copyright 2023 Endrobil.no. All rights reserved</p>
        </div>
    </div>
  )
}
