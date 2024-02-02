import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Logos from "../../../public/auth-page/Icon.png"

const Logo = () => {
  return (
    <Link href="/" className='flex items-center gap-3'>
      <Image
        className="w-[70px] block"
        src={Logos}
        alt="sync logo"
      />
      <p className='font-bold text-sm'>SYNC</p>
    </Link>
  );
}

export default Logo