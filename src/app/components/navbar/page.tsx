import Link from "next/link";
import React from "react";
import { Bell } from 'lucide-react';
import { Star } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import Img2 from '../../../../public/img2.png'
import Logo from '../../../../public/logo.png'
import Image from "next/image";
function Navbar() {
  return (
    <div className="flex justify-around xl:w-[1920px] items-center xl:h-[96px] top-[-3689px] left-[-434px] bg-[#FFFFFF] shadow-[#4E4E4E]">
        <div className="hidden xl:block lg:block md:block">
            <Image src={Logo} alt="Logo img" />
        </div>


        <div className="flex items-center gap-x-5">
            <Link href='/' className="text-[#1E1E1E]">Search</Link>
            <Link href='/' className="text-[#1E1E1E]">News & Guides</Link>
            <button className="hidden md:block lg:block xl:block w-Hug[92px] bg-[#EF2C2E] w-[28] h-[24] text-[#FFFFFF] h-Hug[40px] top-[-3661px] left-[586px] rounded-[8px] py-[8px] px-[32px] gap-[8px]">Sell</button>
        </div>


        <div className="flex items-center gap-x-3">
            <Image className="hidden lg:block xl:block" src={Img2} alt="icon-image" />
            <button className="w-Hug[130px] flex justify-end h-Hug[48px] top-[-3665px] left-[967px] rounded-[8px] px-[48px] py-[12px] text-[#FFFFFF] bg-[#003087] gap-[8px]">Login</button>
        </div>
    </div>
  );
}

export default Navbar;
