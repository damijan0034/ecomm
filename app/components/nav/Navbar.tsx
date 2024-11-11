import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { Redressed } from 'next/font/google'

const redressed=Redressed({subsets:['latin'],weight:['400']})

const Navbar = () => {
  return (
    <div className='
      sticky
        top-0
        w-full
        bg-slate-200
        z-30
        shadow-sm
    '>
      <div className='py-4 border-b-[1px]'>
          <Container >
            <div className='flex items-center 
            justify-between gap-6'>
            <Link href={'/'} 
            className={`${redressed.className} text-2xl font-bold`}>
              E-shop
            </Link>
            <div className='hidden md:block'>Search</div>
            <div className='flex items-center gap-8 md:gap-12'>
              <div>Cart Count</div>
              <div>User Name</div>
            </div>
            </div>
          </Container>
      </div>
    </div>
  )
}

export default Navbar