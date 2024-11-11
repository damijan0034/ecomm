import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='bg-gradient-to-r
                    from-sky-500 to-sky-700
                    relative mb-8
    '   >
        <div className='flex flex-col gap-2 md:flex-row
                        mx-auto px-8 py-12 items-center
                        justify-evenly
        '>
            <div className='text-center mb-8 md:mb-0'>
                <h1 className="text-4xl md:text-6xl
                font-bold text-white mb-4">
                Summer Sale!
                </h1>
                <p className="text-lg md:text-xl
                        text-white mb-2" >
                    Enjoy discount on selected items
                    </p>
                <p className="text-2xl md:text-5xl
                            text-yellow-400 font-bold">
                                GET 50% OFF
                                </p>
            </div>
            <div className='w-1/3 relative aspect-video'>
                <Image src="/banner-image.png "
                    fill alt='banner'
                    className='object-contain'
                />
            </div>
        </div>
    </div>
  )
}

export default Banner