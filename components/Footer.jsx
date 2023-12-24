import React from 'react'
import Image from 'next/image';
import Logo from '@/public/logo.png';

const Footer = () => {
    return (
        <footer className='relative pt-10 pb-4 border-t border-gray-300'>
            <div className='mx-auto max-w-7xl px-6 lg:px-0'>
                <div className='mb-6 sm:flex sm:justify-between'>

                    <div>
                        <a href='/' className='flex space-x-3 rtl:space-x-reverse'>
                            <Image
                                src={Logo}
                                alt='site-logo'
                                quality={100}
                                loading='eager'
                                className='w-16 h-16'
                            />
                            <span className='my-auto hidden text-2xl font-medium text-black whitespace-nowrap md:block'>
                                Anjaan Backpackers
                            </span>
                        </a>
                        <dl className='mt-5 text-sm text-gray-600 space-y-2'>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-400 my-auto'><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                                <dd>545 Mavis Island Chicago, Il99191</dd>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-400 my-auto'><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                <dd className='flex gap-3'>
                                    <a href="tel:+91 89541 05231">+91 89541 05231</a>
                                    <div className='bg-gray-600 w-[1px] h-[1rem] my-auto'></div>
                                    <a href="tel:+91 80068 57264">+91 80068 57264</a>
                                </dd>
                            </div>
                            <div className='flex gap-6'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-gray-400 my-auto'><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                                <dd>
                                    <a href="mailto:anjaanbackpackers@gmail.com">anjaanbackpackers@gmail.com</a>
                                </dd>
                            </div>
                        </dl>
                    </div>

                    <div className='flex gap-x-20 max-w-md mt-5 md:justify-between md:mt-0 md:max-w-none'>
                        <div>
                            <h3 className='mb-3 text-sm font-bold text-gray-900'>Hiking</h3>
                            <ul className='flex flex-col space-y-2 flex-wrap text-sm font-medium text-gray-500'>
                                <li>
                                    <a href='#' className='hover:underline '>Packages</a>
                                </li>
                                <li>
                                    <a href='#' className='hover:underline '>Trails</a>
                                </li>
                                <li>
                                    <a href='#' className='hover:underline'>Tips</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:underline'>Safety</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='mb-3 text-sm font-bold text-gray-900'>Pages</h3>
                            <ul className='flex flex-col space-y-2 flex-wrap text-sm font-medium text-gray-500'>
                                <li>
                                    <a href='#' className='hover:underline'>Hikes</a>
                                </li>
                                <li>
                                    <a href='#' className='hover:underline'>Trips</a>
                                </li>
                                <li>
                                    <a href='#' className='hover:underline'>Contacts</a>
                                </li>
                                <li>
                                    <a href="#" className='hover:underline'>About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between flex-col pt-8 space-y-4 border-t border-gray-200 md:flex-row md:space-y-0'>
                    <div className='flex gap-x-4'>
                        <span className='block text-xs text-gray-400 sm:text-left md:text-sm'>
                            <a href='/' className='underline'>
                                Privacy Policy
                            </a>
                        </span>
                        <span className='block text-xs text-gray-400 sm:text-left md:text-sm'>
                            <a href='/' className='underline'>
                                Terms of Service
                            </a>
                        </span>
                        <span className='block text-xs text-gray-400 sm:text-left md:text-sm'>
                            <a href='/' className='underline'>
                                Cookies Policy
                            </a>
                        </span>
                    </div>

                    <div>
                        <span className='block text-sm text-gray-500 sm:text-right dark:text-gray-400'>© 2023 <a href='/' className='hover:underline'>Anjaan Backpackers™</a>. All Rights Reserved.</span>
                        <span className='mt-2 block text-xs text-gray-500 sm:text-right dark:text-gray-400'>Designed by: <a target='_blank' href='https://www.deepaknegi.in/'>Deepak Negi</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer