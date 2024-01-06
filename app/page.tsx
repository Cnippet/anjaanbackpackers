import Navbar from '@/components/Navbar';
import Hero from '@/components/home/Hero';
import Feature from '@/components/home/Feature';
import CtaTrip from '@/components/home/CtaTrip';
import Testimonial from '@/components/home/Testimonial';
import Pricing from '@/components/home/Pricing';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <CtaTrip />
        <Testimonial />
        <Pricing />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
