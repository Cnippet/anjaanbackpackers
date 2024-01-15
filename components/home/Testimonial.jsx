"use client"
import React from 'react'
import Image from 'next/image'
import Profile1 from '@/public/profile/Profile1.jpg'
import Profile2 from '@/public/profile/Profile2.jpg'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

const Feedback = [
    {
        id: 1,
        name: "Aman Negi",
        image: Profile1,
        para: "The trek was incredible! The guides were knowledgeable and fun, making it feel like an adventure with friends. The itinerary was well-planned, showcasing breathtaking views. Everything was seamless, and I'm already planning my next trek with your team!",
        star: 4,
        rem: 1,
    },
    {
        id: 2,
        name: "Ananya Krishali",
        image: Profile2,
        para: "What an adventure! The trek was beyond amazing. The guides were both knowledgeable and fun, creating an incredible vibe. The views were breathtaking, and the whole experience was seamless. Can't wait for the next trek with your team!",
        star: 3,
        rem: 2,
    },
]

const Testimonial = () => {
    return (
        <section className='isolate overflow-hidden bg-white py-5 lg:py-10'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <h2 className='text-black max-w-2xl text-3xl font-semibold sm:text-4xl' data-aos="fade-up"  data-aos-duration="500">
                    Happy Hikers Club!
                </h2>
                <p className='mt-4 text-gray-700 text-lg' data-aos="fade-up"  data-aos-duration="500">
                    Read what our customers have to say about their hiking experiences
                </p>
            </div>

            <div className='relative mx-auto max-w-full py-6 sm:py-8' data-aos="fade-up"  data-aos-duration="500">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    navigation={false}
                    modules={[EffectFade, Autoplay, Pagination, Navigation]}
                >
                    {Feedback.map((feed) => (
                        <SwiperSlide key={feed.id}>
                            <div className='mx-auto items-center max-w-3xl py-14 gap-8 px-6 md:px-0'>
                                <div className='col-span-2 font-sans'>
                                    <div className='relative'>
                                        <svg viewBox="0 0 162 128" fill="none" aria-hidden="true" className='absolute h-24 z-[-10] top-[-2rem] stroke-slate-400'>
                                            <path id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z">
                                            </path>
                                            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86"></use>
                                        </svg>
                                        <blockquote className='text-xl text-center sm:text-[1.3rem] sm:leading-8 text-black'>
                                            <p>
                                                {feed.para}
                                            </p>
                                        </blockquote>
                                    </div>

                                    <div className='mt-8 flex mx-auto justify-center'>
                                        <Image
                                            src={feed.image}
                                            alt='profile-1'
                                            className='w-12 h-12 object-cover rounded-full'
                                        />
                                        <div className='ml-5 my-auto'>
                                            <div className='text-lg font-semibold'>
                                                {feed.name}
                                            </div>
                                        </div>
                                        <div className='h-10 bg-gray-400 w-[1px] mx-3 my-auto'></div>
                                        <div className='flex my-auto'>
                                            {[...Array(feed.star)].map((_, index) => (
                                                <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-blue-600'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                            ))}
                                            {[...Array(feed.rem)].map((_, index) => (
                                                <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className='w-5 h-5 text-gray-300'><path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd"></path></svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonial