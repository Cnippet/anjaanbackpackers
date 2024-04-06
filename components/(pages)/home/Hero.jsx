"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Hero1 from '@/public/hiking/hiking1.WEBP';
import Hero2 from '@/public/hiking/hiking2.WEBP';
import Hero3 from '@/public/hiking/hiking3.WEBP';
import Hero4 from '@/public/hiking/hiking4.WEBP';
import Hero5 from '@/public/hiking/hiking5.WEBP';
import Hero6 from '@/public/hiking/hiking6.WEBP';
import Hero7 from '@/public/hiking/hiking7.WEBP';
import Hero8 from '@/public/hiking/hiking8.WEBP';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

const Trek = [
    {
        id: 1,
        imageUrl: Hero8,
    },
    {
        id: 2,
        imageUrl: Hero1,
    },
    {
        id: 3,
        imageUrl: Hero3,
    },
]

const Hero = () => {



    return (
        <>
            <section className='relative isolate h-screen overflow-hidden -mt-20'>
                <Swiper
                    spaceBetween={30}
                    // navigation={true}
                    effect={'fade'}
                    autoplay={{
                        delay: 6500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, EffectFade, Navigation, Pagination]}
                >
                    {Trek.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Image
                                src={item.imageUrl}
                                alt='hero image 3'
                                quality={100}
                                loading='eager'
                                fill={true}
                                sizes='100vw'
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                }}
                                className='absolute inset-0 z-[-10]'
                            />
                            <div className='md:absolute w-full h-full z-[-9] bg-gradient-to-b from-white/10 to-black/90'></div>

                            <div className='md:hidden block absolute w-full h-full z-[-9] bg-gradient-to-b from-black/10 via-black/30 to-black/80'></div>

                            <div className='mx-auto max-w-[80%] px-6 flex flex-col justify-end pb-20 h-[98vh] lg:px-0'>
                                <div className="hidden sm:mb-8 sm:flex">
                                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100">
                                        Announcing our next round of funding. <a href="#" className="font-medium text-gray-100"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                    </div>
                                </div>
                                <h1 className='text-5xl max-w-2xl font-semibold text-white md:text-6xl'>
                                    Explore Uttarakhand&apos;s Breathtaking Landscape with Us
                                </h1>
                                <p className='mt-6 text-base ml-auto max-w-2xl text-gray-200 md:font-light md:text-lg'>
                                    Embark on unforgettable hiking adventures in the stunning landscapes of Uttarakhand, where nature&apos;s awe-inspiring beauty awaits at every turn, inviting you to discover hidden treasures and create everlasting memories along the way.
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="#" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Discover trips</a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-orange-500 my-auto">
                                        Join us <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    )
}

export default Hero