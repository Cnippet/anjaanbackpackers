import React from 'react'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/(pages)/gallery/Hero';

export const metadata: Metadata = {
    title: 'About | Anjaan Backpackers',
    description: '',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero/>
            </main>
            <Footer />
        </>
    )
}

export default page