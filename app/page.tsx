"use client"
import AOS from 'aos'
import 'aos/dist/aos.css'

import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import CtaTrip from '@/components/home/CtaTrip';
import Testimonial from '@/components/home/Testimonial';
import Pricing from '@/components/home/Pricing';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Blogs from '@/components/home/Blogs'
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <>
      {/* strucuted data using micro-data */}
      <div itemScope itemType="https://schema.org/WebSite">
        <meta itemProp="url" content="https://www.anjaanbackpackers.com/" />
        <meta itemProp="name" content="Anjaan Backpackers" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Feature />
        <Blogs />
        {/* <CtaTrip /> */}
        <Testimonial />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
