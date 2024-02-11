"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.png'

const links = [
    {
        id: 1,
        title: 'Explore Hikes',
        href: '#',
    },
    {
        id: 2,
        title: 'Blogs',
        href: '/blogs',
    },
    {
        id: 3,
        title: 'Contacts',
        href: '/contacts',
    },
    {
        id: 4,
        title: 'About',
        href: '/about',
    },
]
const Navbar = () => {

    const [mobilemenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    }

    return (
        <header className='relative z-10 overflow-hidden'>
            <nav>
                <div className='bg-black'>
                    <div className='mx-auto flex h-10 items-center justify-between px-6 lg:px-8'>
                        <div className='flex-1 text-white text-sm lg:block '>
                            English
                        </div>
                        <div className='hidden flex-1 items-center lg:flex-none'>
                            <a href="#" className='text-gray-200 text-sm'>
                                Get 20% discount on your first trip
                            </a>
                        </div>
                        <div className='lg:flex lg:flex-1 lg:gap-2 lg:items-center lg:justify-end'>
                            <a href="/login" className='text-gray-100 text-sm'>Log In</a>
                            <span className='hidden h-4 w-[1px] bg-gray-200 mx-2 lg:block'></span>
                            <a href="/signup" className='hidden text-gray-100 text-sm lg:block'>Create an account</a>
                        </div>
                    </div>
                </div>
                <div className='bg-white border-b border-gray-300 flex items-center justify-between px-6 lg:px-8'>
                    <div className="flex lg:flex-none">
                        <a href="/" className="-m-1.5 p-1.5 text-2xl font-medium">
                            <Image
                                src={Logo}
                                alt='site-logo'
                                className='h-16 w-16'
                            />
                            <span className="sr-only">Anjaan Backpackers</span>
                        </a>
                    </div>
                    <div className='flex lg:hidden'>
                        <button
                            onClick={toggleMobileMenu}
                            type='button' className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'>
                            <span className='sr-only'>Open main menu</span>
                            <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                            </svg>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12 ml-10">
                        {links.map((link) => (
                            <a key={link.id}
                                href={link.href}
                                className="text-sm font-semibold leading-6 text-gray-900">
                                {link.title}
                            </a>

                        ))}
                    </div>
                    <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:gap-4 lg:items-center lg:pl-8">
                        <a href="#" className='text-gray-700'>Search</a>
                        <a href="#" className='text-gray-700'>Help</a>
                        <span className='h-5 w-[1px] bg-gray-500'></span>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className='w-6 h-6 text-gray-400'><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"></path></svg>
                        </a>
                    </div>
                </div>
            </nav>

            {mobilemenu && (
                <div className='lg:hidden' role='dialog' aria-modal='true'>
                    <div className='fixed inset-0 z-50'></div>
                    <div className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto mt-10 bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
                        <div className='flex items-center justify-between'>
                            <a href='/' className='-m-1.5 p-1.5'>
                                <span className='sr-only'>Anjaan Backpackers</span>
                            </a>
                            <button
                                onClick={toggleMobileMenu}
                                type='button' className='-m-3 rounded-md p-4 text-gray-700'>
                                <span className='sr-only'>Close menu</span>
                                <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
                                    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            </button>
                        </div>
                        <div className='mt-6 flow-root'>
                            <div className='-my-6 divide-y divide-gray-500/10'>
                                <div className='space-y-2 py-6'>
                                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Explore hikes</a>
                                    <a href='#' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Plan trips</a>
                                    <a href='/contacts' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Contacts</a>
                                    <a href='/about' className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>About</a>
                                </div>
                                <div className='py-6'>
                                    <a href='/login' className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>Log in</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar