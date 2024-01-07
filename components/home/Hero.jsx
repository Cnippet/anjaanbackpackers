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
            <section className='relative isolate overflow-hidden -mt-20'>
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

                            <div className='mx-auto max-w-5xl px-6 py-48 lg:py-40 lg:px-0'>
                                <div className="hidden sm:mb-8 sm:flex">
                                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-200 ring-1 ring-gray-100/10 hover:ring-gray-100">
                                        Announcing our next round of funding. <a href="#" className="font-medium text-gray-100"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                    </div>
                                </div>
                                <h1 className='text-5xl font-semibold text-white md:text-6xl'>
                                    Explore Uttarakhand&apos;s Breathtaking Landscape with Us
                                </h1>
                                <p className='mt-6 text-base text-gray-200 md:font-light md:text-lg'>
                                    Embark on unforgettable hiking adventures in the stunning landscapes of Uttarakhand, where nature&apos;s awe-inspiring beauty awaits at every turn, inviting you to discover hidden treasures and create everlasting memories along the way.
                                </p>
                                <div className="mt-10 flex gap-x-6">
                                    <a href="#" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Discover trips</a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-orange-500 my-auto">
                                        Join us <span aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* <section className='relative bg-white overflow-hidden'>
                <div className='grid max-w-7xl grid-cols-12 mx-auto lg:gap-0'>
                    <div className='px-6 pb-20 pt-10 sm:pb-32 col-span-12 lg:px-8 lg:pb-24 lg:pt-16 xl:px-0 xl:col-span-7'>
                        <div className='mx-auto max-w-none lg:max-w-2xl lg:mx-0'>
                            <div className="hidden sm:mb-8 sm:flex">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    Explore our upcoming trips. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                                </div>
                            </div>
                            <h1 className='text-5xl font-semibold md:text-6xl'>
                                Explore Uttarakhand&apos;s Breathtaking Landscape with Us
                            </h1>
                            <p className='mt-6 text-base text-gray-600 md:font-light md:text-lg'>
                                Embark on unforgettable hiking adventures in the stunning landscapes of Uttarakhand, where nature&apos;s awe-inspiring beauty awaits at every turn, inviting you to discover hidden treasures and create everlasting memories along the way.
                            </p>
                            <div className="mt-10 flex gap-x-6">
                                <a href="#" className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600">Discover trips</a>
                                <a href="#" className="text-sm font-semibold leading-6 text-gray-900 my-auto">
                                    Join us <span aria-hidden="true">→</span></a>
                            </div>
                        </div>
                    </div>
                    <div className='mx-auto relative flex gap-4 col-span-12 px-8 xl:col-span-5 lg:mr-8 xl:inset-0 xl:px-0 xl:left-0 xl:mr-0 xl:-ml-3'>
                        <div className='ml-auto w-48 flex-none sm:ml-0 pt-0 md:pt-0 lg:w-44 lg:order-last xl:order-[0] lg:pt-72'>
                            <div className='relative'>
                                <Image
                                    src={Hero1}
                                    alt='hero image 2'
                                    quality={100}
                                    loading='eager'
                                    className='w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                />
                            </div>
                        </div>
                        <div className='ml-auto w-48 flex-none sm:ml-0 pt-0 md:pt-0 lg:w-44 lg:order-last xl:order-[0] lg:pt-32'>
                            <div className='relative'>
                                <Image
                                    src={Hero2}
                                    alt='hero image 2'
                                    quality={100}
                                    loading='eager'
                                    className='w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                />
                            </div>
                            <div className='relative hidden lg:block'>
                                <Image
                                    src={Hero3}
                                    alt='hero image 2'
                                    quality={100}
                                    loading='eager'
                                    className='mt-4 w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                />
                            </div>
                        </div>
                        <div className='hidden ml-auto w-48 flex-none sm:ml-0 pt-0 md:pt-0 md:block lg:w-44 lg:order-last xl:order-[0] lg:pt-2'>
                            <div className='relative'>
                                <Image
                                    src={Hero4}
                                    alt='hero image 2'
                                    quality={100}
                                    loading='eager'
                                    className='w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                />
                            </div>
                            <div className='relative hidden lg:block'>
                                <Image
                                    src={Hero5}
                                    alt='hero image 2'
                                    quality={100}
                                    loading='eager'
                                    className='mt-4 w-full h-full aspect-[2/3] rounded-2xl bg-gray-50 object-cover shadow-xl'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Hero