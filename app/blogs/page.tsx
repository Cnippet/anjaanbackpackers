import React from 'react'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/blogs/Hero'
import type { Metadata } from 'next'
import Newsletter from '@/components/Newsletter'

export const metadata: Metadata = {
    title: 'Blogs | Anjaan Backpackers',
    description: 'recent blogs',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Newsletter />
            </main>
            <Footer />
        </>
    )
}

export default page