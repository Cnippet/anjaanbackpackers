import Navbar from '@/components/Navbar';
import Hero from '@/components/(pages)/home/Hero';
import Feature from '@/components/(pages)/home/Feature';
import CtaTrip from '@/components/(pages)/home/CtaTrip';
import Testimonial from '@/components/(pages)/home/Testimonial';
import Pricing from '@/components/(pages)/home/Pricing';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Blogs from '@/components/(pages)/home/Blogs'

export default function Home() {

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
